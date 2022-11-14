import styles from '../styles/Auth.module.css'

const Auth = ({ supabase }) =>{
    const signInWithGithub = () => {
        supabase.auth.signIn({provider: 'github'})
    }
    const signInWithGoogle = () =>{
        supabase.auth.signIn({ provider: 'google' })
    }
    return (
        <>
        <div className="background"></div>
        <p>
            <button className={styles.github} onClick = {signInWithGithub}> Login with Github </button>
        </p>
        <p>
                <button className={styles.github} onClick={signInWithGoogle}> Login with Google</button>
        </p>
    </>
    );
}

export default Auth