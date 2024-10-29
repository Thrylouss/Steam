import {useEffect, useRef} from "react";
import axios from "axios";
import {json} from "react-router-dom";
import styles from "./styles.module.css"
import {getUserToken} from "../../features/getUserToken/getUserToken.jsx";

export default function Login({setAuth, setLogged}) {

    const username = useRef()
    const password = useRef()

    const handleSubmit = () => {
        getUserToken({
            username: username.current.value,
            password: password.current.value,
            setAuth,
        })
    }

    const handleClick = () => {
        setLogged(true)
    }


    return (
        <>
            <div className={styles.container}>
                <h1>Login</h1>
                <input className={styles.info} ref={username} type="text"/>
                <input className={styles.info} ref={password} type="text"/>
                <button className={styles.btn} onClick={handleSubmit}>Login</button>

                <button className={styles.btn} onClick={handleClick}>Have no account?</button>
            </div>
        </>
    )
}