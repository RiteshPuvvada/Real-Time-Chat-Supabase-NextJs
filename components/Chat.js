import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Chat.module.css'


const Chat = ({ currentUser, session, supabase }) => {
    if (!currentUser) return null
    const [messages, setMessages] = useState([])
    const [editingUsername, setEditingUsername] = useState(false)
    const [users, setUsers] = useState({})
    const message = useRef("")
    const newUsername = useRef(currentUser.username)
    
    useEffect(async () => {
        const getMessages = async () => {
            let { data: messages, error } = await supabase
                .from('message')
                .select('*')
        setMessages(messages)
    }
    await getMessages()
    const setupMessagesSubscription = async () => {
        await supabase
        .from('message')
        .on('INSERT', payload => {
            setMessages(previous => [].concat(previous, payload.new))
        })
        .subscribe()
    }
    await setupMessagesSubscription()
    const setupUserSubscription = async () => {
        await supabase
            .from('user')
            .on('UPDATE',payload => {
                setUsers(users => {
                    const user = users[payload.new.id]
                    if (user){
                        return Object.assign({}, users, {
                            [payload.new.id]: payload.new
                        })
                    }
                    else{
                        return users
                    }
                })
            })
        .subscribe()
    }
    await setupUserSubscription()
}, [])
    
    const sendMessage = async evt =>{
        evt.preventDefault()

        const content = message.current.value
        await supabase
            .from('message')
            .insert([
                {content, user_id: session.user.id}
            ])
            message.current.value = ""
    }
    const logout = evt =>{
        evt.preventDefault()
        window.localStorage.clear()
        window.location.reload()
        // supabase.auth.signOut();
    }
    const setUsername = async evt =>{
        evt.preventDefault()
        const username = newUsername.current.value
        await supabase
            .from('user')
            .insert([
                { ...currentUser, username}
            ], {upsert: true})
        newUsername.current.value =""
        setEditingUsername(false)
    }

    const getUsersFromSupabase = async(users, userIds) =>{
        const usersToGet = Array.from(userIds).filter(userIds => !users[userIds])
        if (Object.keys(users).length && usersToGet.length == 0) return users

        const {data} = await supabase
            .from('user')
            .select('id, username')
            .in('id', usersToGet)
        const newUsers = {}
        data.forEach(user => newUsers[user.id] = user)
        return Object.assign({}, users, newUsers)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const getUsers = async () => {
            const userIds = new Set(messages.map(message => message.user_id))
            const newUsers = await getUsersFromSupabase(users, userIds)
            setUsers(newUsers)
        }
        await getUsers()
    },[messages])

    const username = user_id =>{
        const user = users[user_id]
        if (!user) return ""
        return user.username ? user.username : user.id
    }
    return ( 
    <>
        <div className={styles.header}>
            <div className={styles.headerText}>
                <h1>Supabase Chat</h1>
                <p className={styles.headerUser}>
                Welcome, {currentUser.username ? currentUser.username : session.user.email}
                </p>
            </div>
            
            <div className = {styles.settings}>
                {editingUsername ? (
                    <form onSubmit={setUsername}>
                        <input className = {styles.updateUser} placeholder="New Username" required ref= {newUsername}></input>
                        <button className={styles.btnnn} type="submit">Update</button>
                    </form>
                ) : (
                    <div>
                        <button className={styles.btn} onClick={() => setEditingUsername(true)}>Edit username</button>
                        <button className={styles.btnn} onClick={evt => logout(evt)}>logout</button>
                    </div>
                )}
            </div>
        </div>
        <div className={styles.container}>
            {messages.map(message => 
                <div key = {message.id} className={styles.messageContainer}> 
                    <span className = {styles.user}>{username(currentUser.username)}</span>
                    <div>{message.content}</div>
                </div>
            )}
        </div>
    
        <form className={styles.chat} onSubmit={sendMessage}>
            <input className={styles.messageInput} required type="text" placeholder="Write your message" ref=  {message}/>
            <button className={styles.submit} type="submit">Send Message
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </button>
        </form>
    </>
    )
}
export default Chat
