import {useEffect, useState} from "react";
import axios from "axios";


export const getGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('https://1.ins.cx/games/')
            .then(res => {
                setGames(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return {games}
}
