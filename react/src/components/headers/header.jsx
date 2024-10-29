import {Balance} from "../../UI/balance/balance.jsx";
import styles from "./styles.module.css"


export default function Header({setAuth}){


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>Торговая площадка</h1>
                    <p className={styles.color}>Продовайте предметы участникам сообщества или приобретайте их</p>
                </div>
                <Balance setAuth={setAuth}/>
            </div>
        </header>
    )
}