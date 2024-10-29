import Header from "./components/headers/header.jsx";
import Lots from "./components/titleHeader/lots.jsx";
import Items from "./components/items/Items.jsx";
import FilterGames from "./components/filter/FilterGames.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {json} from "react-router-dom";
import Auth from "./components/Auth/Auth.jsx";


export default function App() {
    const [auth, setAuth] = useState(true)
    const [items, setItems] = useState()


    return (
        <>
            <Header setAuth={setAuth}/>

            {auth ?
                <>
                    <Lots />

                    <div className='container'>
                        <Items items={items} setItems={setItems}/>
                        <FilterGames items={items} setItems={setItems}/>
                    </div>
                </>
                :
                <Auth setAuth={setAuth} />
            }
        </>
    )

}