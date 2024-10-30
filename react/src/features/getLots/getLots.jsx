import {useEffect, useState} from "react";
import axios from "axios";


export const getLots = ({setLots, isAuth=false})=> {


    useEffect(() => {
        const user_id = parseInt(localStorage.getItem('user_id'))

        axios.get('https://1.ins.cx/lots/')
            .then(res => {
                setLots(res.data.results)
                if (isAuth === false) {
                    console.log(res.data.results)
                    console.log(res.data.results.filter(lot => lot.user_id === user_id))
                    setLots(res.data.results.filter(lot => lot.user_id === user_id))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
}
