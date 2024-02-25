import axios from "axios"

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const getAllCreatures = async () => {
    return await http.get('/creatures')
    .then(response => response.data)
    .catch(error=>{
        throw error
    })
}

const getOneCreature = async (id) => {
    return await http.get(`/creatures/${id}`)
    .then(response=>response.data)
    .catch(error=>{
        throw error
    })
}

const createCreature = async (dataObject) => {
    return await http.post('/creatures', dataObject)
    .then(response => response.data)
    .catch(error=>{
        throw error
    })
}

const updateOneCreature = async (id, dataObject) => {
    return await http.put(`/creatures/${id}`, dataObject)
    .then(response=>response.data)
    .catch(error=>{
        throw error
    })
}

const deleteCreature = async (id) => {
    return await http.delete(`/creatures/${id}`)
    .then(response=>response.data)
    .catch(error=>{
        throw error
    })
}

export {getAllCreatures, createCreature, getOneCreature, updateOneCreature, deleteCreature}