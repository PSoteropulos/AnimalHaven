import { getAllCreatures, getOneCreature, createCreature, updateOneCreature, deleteCreature, getAllOpenCreatures, getAllClosedCreatures } from "../services/apiService"
import validator from "./validator"

const getAllHandler = async (dataStateSetter, loadedStateSetter, mostRecentSetter) => {
    try {
        const res = await getAllCreatures()
        console.log("Get all:", [...res])
        dataStateSetter(res)
        mostRecentSetter(res[res.length - 1])
        loadedStateSetter(true)
    } catch (error) {
        console.log("Get all error:", error)
    }
}

const getOneHandler = async (id, dataStateSetter, loadedStateSetter, navigation) => {
    try {
        const res = await getOneCreature(id)
        console.log("Get one:", res)
        dataStateSetter(res)
        loadedStateSetter(true)
    } catch (error) {
        console.log("Get one error:", error);
        if (error.response && error.response.status === 400) {
            navigation("/notfound");
        }
    }
}

const createHandler = async (event, formDataObject, formDataSetter, defaultDataShape, allStateSetter, validSetter, errorSetter, setMostRecent, navigation) => {
    event.preventDefault()
    try {
        const res = await createCreature(formDataObject)
        console.log("Create:", res)
        allStateSetter(prev => [...prev, res])
        setMostRecent(res)
        formDataSetter(defaultDataShape)
        errorSetter({})
        validSetter(false)
        // navigation("/");
    } catch (err) {
        console.log("Create error:", err)
        errorSetter(err.response.data.errors)
    }
}

const editHandler = async (event, id, formDataObject, formDataSetter, defaultDataShape, errorSetter, navigation, validSetter, allStateSetter) => {
    event.preventDefault()
    try {
        const res = await updateOneCreature(id, formDataObject)
        console.log("Update:", res)
        // validSetter(true)
        // allStateSetter(prev => [...prev, res]);
        // formDataSetter(defaultDataShape);
        // errorSetter({});
        navigation(`/creatures/${res._id}`)
    } catch (err) {
        console.log("Update error:", err)
        errorSetter(err.response.data.errors)
    }
}

const deleteHandler = async (id, navigation, allStateSetter) => {
    try {
        const res = deleteCreature(id)
        console.log("Deleted:", res)
        allStateSetter(prev => prev.filter(creature => creature._id !== id))
        navigation("/")
    } catch (error) {
        console.log("Deletion error:", error)
    }
}

const changeHandler = (event, formDataSetter, formData, errorSetter, validSetter) => {
    let updatedFormData = { ...formData, [event.target.name]: event.target.value.trim() }
    let [errors, valid] = validator(updatedFormData)
    // console.log(tempErrors)
    formDataSetter(updatedFormData)
    errorSetter(errors)
    validSetter(valid)
}

const getAllOpenHandler = async (dataStateSetter, loadedStateSetter) => {
    try {
        const res = await getAllOpenCreatures()
        console.log("Get all open:", [...res])
        dataStateSetter(res)
        loadedStateSetter(true)
    } catch (error) {
        console.log("Get all open error:", error)
    }
}

const getAllClosedHandler = async (dataStateSetter, loadedStateSetter) => {
    try {
        const res = await getAllClosedCreatures()
        console.log("Get all closed:", [...res])
        dataStateSetter(res)
        loadedStateSetter(true)
    } catch (error) {
        console.log("Get all closed error:", error)
    }
}


export { getAllHandler, getOneHandler, createHandler, editHandler, deleteHandler, changeHandler, getAllOpenHandler, getAllClosedHandler }