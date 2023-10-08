

const getLocalStorage = () => {
    const getStorage = localStorage.getItem("booking")
    if(getStorage){
        return JSON.parse(getStorage)
    }
    return []
}

const saveLocalStorage = (id) => {
    const bookingStorage = getLocalStorage();
    bookingStorage.push(id)
    localStorage.setItem("booking", JSON.stringify(bookingStorage))
}

export {saveLocalStorage, getLocalStorage}