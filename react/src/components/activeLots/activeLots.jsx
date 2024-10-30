import {getLots} from "../../features/getLots/getLots.jsx";
import styles from "./styles.module.css"
import axios from "axios";
import {useEffect, useState} from "react";


export default function ActiveLots({isAuth, active}) {
    const [lots, setLots] = useState()

    getLots({setLots, isAuth})

    const handleClick = (id) => {
        axios.delete(`https://1.ins.cx/lots/${id}/`)
            .then(res => {
                setLots(lots.filter(lot => lot.id !== id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    // console.log(lots)

    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                {lots ?
                    lots.map(lot => <div className={styles.lots} key={lot.id}>
                        <div className={styles.name}>
                            <img src={lot.item_id.icon} alt=""/>
                            <div style={{display: "flex", flexDirection: "column", gap: "0.5em", textAlign: "start"}}>
                                <p>{lot.item_id.name}</p>
                                <p>{lot.item_id.game_id.name}</p>
                            </div>
                        </div>

                        {active ?
                            <>
                                <p className={styles.placed}>{lot.sold_at.slice(0, 10)}</p>
                                <p className={styles.price}>{lot.price}</p>
                                <p className={styles.btn} onClick={() => handleClick(lot.id)}>Снять лот</p>
                            </>
                            :

                            <>
                                <p className={styles.placed}></p>
                                <p className={styles.price}></p>
                                <p className={styles.btn}>Продано</p>
                            </>}
                        </div>
                    )
                    :
                    <div className={styles.lots}>Нет активных лотов</div>
                }
            </div>
        </div>
    )
}
