import styles from './styles.module.css'
import {useEffect, useState} from "react";
import {getItems} from "../../features/getItems/getItems.jsx";
import ItemCard from "../itemCard/ItemCard.jsx";
import ActiveLots from "../activeLots/activeLots.jsx";

export default function Items({items, setItems}) {


    const [page, setPage] = useState(1)
    const [active, setActive] = useState(true)



    useEffect(() => {
        getItems({setItems, page})
    }, [page])

    const handleNextClick = () => {
        if (items.next) {
            setPage(page + 1)
            getItems({setItems, page})
        }

    }

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1)
            getItems({setItems, page})
        }
    }

    const handleClick = () => {
        setActive(true)
    }

    const handleClick2 = () => {
        setActive(false)
    }


    return(
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.name}>Название</p>
                    <p className={styles.amount}>Кол-во</p>
                    <p className={styles.price}>Цена</p>
                </div>
                <div className={styles.wrapper}>
                    <button onClick={()=>handleClick()} className={styles.button}>Lots</button>
                    <button onClick={()=>handleClick2()} className={styles.button}>Buy Items</button>
                </div>
                <div className={styles.items}>
                    {active ?
                        <ActiveLots isAuth={true} active={false}/>
                        :
                        items && items.map
                        (item => <ItemCard key={item.id} item={item}/>)
                    }
                </div>

                <div className={styles.pagination}>
                    <button onClick={()=>handlePrevClick()}>Prev</button>
                    <p>{page}</p>
                    <button onClick={()=>handleNextClick()}>Next</button>
                </div>
            </div>
        </>
    )
}