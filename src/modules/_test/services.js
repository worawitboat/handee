import axios from 'axios'

// const apiUrl = 'http://localhost:4000'
const apiUrl = 'https://handee.tk'

export function getTest() {
    return axios.get(`${apiUrl}/test`)

}

export function createTest() {

    return axios.post(`${apiUrl}/test`, {
        name: "test03",
        email: "test03@gmail.com",
    })
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function deleteTest(id) {

    return axios.delete(`${apiUrl}/test/${id}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function userorder(data) {

    return axios.post(`${apiUrl}/userorder`, data)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}
export function province(data) {

    return axios.get(`${apiUrl}/userorder/${data}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function handee(data) {

    return axios.post(`${apiUrl}/handee`, data)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}


export function order(data) {

    return axios.post(`${apiUrl}/order`, data)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function getUserInfo(data) {

    return axios.get(`${apiUrl}/handee/${data.userId}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function statusorder(data) {

    return axios.patch(`${apiUrl}/userorder/${data}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}


export function handeeinfo(data) {

    return axios.patch(`${apiUrl}/order/${data}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function paymentqrcode(data) {

    return axios.post(`${apiUrl}/payment`, data)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function paymentimage(data) {

    return axios.patch(`${apiUrl}/payment`, data)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function getUserOrderById(id) {

    return axios.post(`${apiUrl}/userorder/${id}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function getOrderHistory(id) {
    return axios.get(`${apiUrl}/history/${id}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function getMyOrder(id) {
    return axios.post(`${apiUrl}/history/${id}`)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}

export function orderSuccess(data) {
    return axios.post(`${apiUrl}/userorder/success`,data)
        .catch(({ response }) => {
            throw new Error(response.data.message)
        })
}