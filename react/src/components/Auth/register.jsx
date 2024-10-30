import styles from "./styles.module.css"
import {useEffect, useRef} from "react";
import axios from "axios";
import {getUserToken} from "../../features/getUserToken/getUserToken.jsx";

export default function Register({setAuth, setLogged}) {
    const username = useRef()
    const password = useRef()

    const handleSubmit = () => {
            axios.post('https://1.ins.cx/api/register/',{
                username: username.current.value,
                password: password.current.value
            }).then(
                res => {
                    if (res.status === 201) {
                        console.log(res.data)
                        const { access, user_id } = res.data;
                        localStorage.setItem('access', access);
                        localStorage.setItem('user_id', user_id);
                        setAuth(true);
                    }
                }).catch(error => console.error("Ошибка регистрации:", error))
        }


    const handleClick = () => {
        setLogged(false)
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Register</h1>
                <input className={styles.info} ref={username} type="text"/>
                <input className={styles.info} ref={password} type="text"/>
                <button className={styles.btn} onClick={handleSubmit}>Register</button>

                <button className={styles.btn} onClick={handleClick}>Have no account?</button>
            </div>
        </>
    )
}
