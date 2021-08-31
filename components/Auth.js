import styles from '../styles/Auth.module.css'

const Auth = ({ supabase }) =>{
    const signInWithGithub = () => {
        supabase.auth.signIn({provider: 'github'})
    }
    return (
        <>
        <div className="background"></div>
        <p>
            <button className={styles.github} onClick = {signInWithGithub}> Login with Github</button>
        </p>
    </>
    );
}

export default Auth