import {useEffect, useState} from "react";
import axios from "axios";
import {json} from "react-router-dom";
import styles from "./styles.module.css"
import Register from "./register.jsx";
import Login from "./login.jsx";


export default function Auth({setAuth}) {
    const [logged, setLogged] = useState(false)


    return (
        <div className={styles.container}>
            {logged ?
            <Register setAuth={setAuth} setLogged={setLogged}/>
            :
            <Login setAuth={setAuth} setLogged={setLogged}/>
        }
        </div>
    )
}