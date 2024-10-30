import {useEffect} from "react";
import axios from "axios";


export const getBalance = ({setBalance}) => {
    useEffect(() => {
        axios.get('https://1.ins.cx/payment-history/')
            .then(res => {
                // console.log(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [setBalance])
}
