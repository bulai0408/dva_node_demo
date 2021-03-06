export const initialUrl = 'http://localhost:8888';

export const getData = ({ url, method = 'get', params = {} }) => {
    const token = localStorage.getItem('token');
    if (method === 'post') {
        return new Promise((resolve, reject) => {
            fetch(`${initialUrl}${url}`, {
                body: JSON.stringify(params),
                credentials: 'include',
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                method
            })
                .then(res => {
                    console.log(res);
                    return res.json();
                })
                .then(res => {
                    resolve(res)
                })
                .catch(error => { reject(error) })
        })
    } else if (method === 'get') {
        const getParams = (params) => {
            let newPrams = '';
            const keyList = Object.keys(params);
            if (keyList.length === 0) return false;

            keyList.forEach((item, index) => {
                if (index === (keyList.length - 1)) {
                    newPrams += `${item}=${params[item]}`;
                    return;
                }
                newPrams += `${item}=${params[item]}&`
            });
            return newPrams;
        }
        const endUrl = !getParams(params)
            ? `${initialUrl}${url}`
            : `${initialUrl}${url}?${getParams(params)}`
        return new Promise((resolve, reject) => {
            fetch(endUrl, {
                credentials: 'include',
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                method
            })
                .then(res => {
                    if (res.status === 401) {
                        throw new Error('登录异常，请重新登录');
                    }
                    return res.json();
                })
                .then(res => { resolve(res) })
                .catch(error => { reject(error) })
        })
    }
}

