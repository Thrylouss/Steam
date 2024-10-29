import styles from './styles.module.css'
import {useRef} from "react";
import {getGames} from "../../features/getGames/getGames.jsx";
import {getItems} from "../../features/getItems/getItems.jsx";

export default function FilterGames({setItems})
{
    const games = getGames().games
    const searchInput = useRef()

    const handleFilter = (game_id) => {
        getItems({setItems, game_id: game_id})
    }

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <h4>Поиск предметов</h4>
                <input className={styles.inp} ref={searchInput} type="text"/>
                <button className={styles.btn}>Дополнительные настройки поиска</button>
            </div>
            <div className={styles.games}>
                <h4>Фильтр по игре</h4>
                {games ?
                    games.map(game => {
                        return (
                            <div key={game.id} onClick={()=> handleFilter(game.id)} className={styles.game}>
                                <img className={styles.img} src={game.icon} alt=""/>
                                <p>{game.name}</p>
                            </div>
                        )
                    })
                    :
                    <p className={styles.game}>По вашему запросу ничего не найдено</p>
                }

            </div>
        </div>
    )
}