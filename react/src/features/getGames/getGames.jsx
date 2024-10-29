import {useEffect, useState} from "react";
import axios from "axios";


export const getGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/games/')
            .then(res => {
                setGames(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return {games}
}