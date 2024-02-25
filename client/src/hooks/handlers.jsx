import { getAllCreatures, getOneCreature, createCreature, updateOneCreature, deleteCreature } from "../services/apiService"
import validator from "./validator"

const getAllHandler = async (dataStateSetter) => {
    try {
        const res = await getAllCreatures()
        console.log("Get all:", [...res])
        dataStateSetter(res)
    } catch (error) {
        console.log("Get all error:", error)
    }
}

const getOneHandler = async (id, dataStateSetter, navigation, localNameSetter) => {
    try {
        const res = await getOneCreature(id)
        console.log("Get one:", res)
        dataStateSetter(res)
        if (localNameSetter) localNameSetter(res.name) 
    } catch (error) {
        console.log("Get one error:", error);
        if (error.response && error.response.status === 400) {
            navigation("/notfound");
        }
    }
}

const createHandler = async (event, formDataObject, errorSetter, navigation) => {
    event.preventDefault()
    try {
        const res = await createCreature(formDataObject)
        console.log("Create:", res)
        navigation("/");
    } catch (err) {
        console.log("Create error:", err)
        errorSetter(err.response.data.errors)
    }
}

const editHandler = async (event, id, formDataObject, errorSetter, navigation ) => {
    event.preventDefault()
    try {
        const res = await updateOneCreature(id, formDataObject)
        console.log("Update:", res)
        navigation('/')
    } catch (err) {
        console.log("Update error:", err)
        errorSetter(err.response.data.errors)
    }
}

const likeHandler = async (id, updatedLikeCount, likeSetter) => {
    try {
        const res = await updateOneCreature(id, {likeCount: updatedLikeCount})
        console.log("Like update:", res)
        likeSetter(true)
    } catch (err) {
        console.log("Like update error:", err)
    }
}

const deleteHandler = async (id, navigation) => {
    try {
        const res = deleteCreature(id)
        console.log("Deleted:", res)
        navigation("/")
    } catch (error) {
        console.log("Deletion error:", error)
    }
}

const changeHandler = (event, formDataSetter, formData, errorSetter, validSetter) => {
    let updatedFormData = { ...formData, [event.target.name]: event.target.value.trim() }
    let [errors, valid] = validator(updatedFormData)
    formDataSetter(updatedFormData)
    errorSetter(errors)
    validSetter(valid)
}


export { getAllHandler, getOneHandler, createHandler, editHandler, deleteHandler, changeHandler, likeHandler }