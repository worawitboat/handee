import axios from 'axios'

const apiUrl = 'http://localhost:4000'

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
