import axios from "axios";

export const getUserToken = ({username, password, setAuth}) => {
    axios.post('https://1.ins.cx/api/login/', {
        username: username,  // здесь можно просто передать username и password
        password: password
    }).then(
        res => {
            if (res.status === 200) {
                const { access, user_id } = res.data;
                localStorage.setItem('access', access);
                localStorage.setItem('user_id', user_id)
                setAuth(true);
            }
        }
    ).catch(error => {
        console.error("Error logging in:", error);
    });
};
