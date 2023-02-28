export const setStorageData = (key, value) => {
    localStorage.setItem(key, value);
    return  true;
}

export const getStorageData = (key) => {
    let data = localStorage.getItem(key);
    return data;
}

export const removeStorageData = (key) => {
    localStorage.removeItem(key);
    return true;
}

export const setToken = (token) => {
    localStorage.setItem('token', `Bearer ${token}`);
    return true;
}