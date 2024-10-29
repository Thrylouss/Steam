import {useEffect} from "react";
import axios from "axios";


export const getItems = ({setItems, page=1, game_id}) => {
        axios.get(`http://127.0.0.1:8000/items/?page=${page}`)
            .then(res => {
                // console.log(res.data)
                setItems(res.data.results)
                if (game_id) {
                    console.log(game_id)
                    console.log(res.data)
                    setItems(res.data.results.filter(item => item.game_id.id === game_id))
                }

            })
            .catch(err => {
                console.log(err)
            })
}