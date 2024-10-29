import styles from "./styles.module.css"
import {useState} from "react";
import {SellButton} from "../../UI/sellButton/sellButton.jsx";
import ActiveLots from "../activeLots/activeLots.jsx";

export default function Lots() {
    const [active, setActive] = useState(true)

    const handleClick = (value) => {
        setActive(value)
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div onClick={() => handleClick(true)} className={active ? styles.active : ""}>
                        Активные лоты
                    </div>
                    <div onClick={() => handleClick(false)} className={active ? "" : styles.active}>
                        История покупок
                    </div>
                </div>
                <SellButton/>
            </div>
            <div className={styles.title}>
                <p className={styles.name}>Название</p>
                <p className={styles.placed}>Размещено</p>
                <p className={styles.price}>Цена</p>
            </div>

            {active ?
                <div className={styles.lots}>
                    <ActiveLots isAuth={false} active={true}/>
                </div>
                :
                <div>История покупок</div>}

        </>
    )
}