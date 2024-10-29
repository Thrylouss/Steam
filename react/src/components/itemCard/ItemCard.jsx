import styles from "./styles.module.css"

export default function ItemCard({item}) {
    // console.log(item)

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.name}>
                    <img className={styles.img} src={item.icon} alt=""/>
                    <div style={{display: "flex", flexDirection: "column", gap: "0.5em"}}>
                        <p>{item.name}</p>
                        <p>{item.game_id.name}</p>
                    </div>
                </div>

            </div>
        </div>

    )
}