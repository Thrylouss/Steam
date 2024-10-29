

export const logout = ({setAuth}) => {
    localStorage.removeItem('access')
    setAuth(false)
}