const validator = (formData) => {
    let tempErrors = {}
    let valid = true

    if (formData.name) {
        if (formData.name.length < 3) {
            tempErrors = { ...tempErrors, name: { message: "Creature name must be longer than 2 characters." } }
            valid = false
        }
        else if (formData.name.length > 25) {
            tempErrors = { ...tempErrors, name: { message: "Creature name can not exceed 25 characters." } }
            valid = false
        }
    }
    else valid = false

    if (formData.creatureType) {
        if (formData.creatureType.length < 3) {
            tempErrors = { ...tempErrors, creatureType: { message: "Creature type must be longer than 2 characters." } }
            valid = false
        }
        else if (formData.creatureType.length > 20) {
            tempErrors = { ...tempErrors, creatureType: { message: "Creature type can not exceed 20 characters." } }
            valid = false
        }
    }
    else valid = false


    if (formData.description) {
        if (formData.description.length < 3) {
            tempErrors = { ...tempErrors, description: { message: "Creature description must be longer than 2 characters." } }
            valid = false
        }
    }
    else valid = false

    return [tempErrors, valid]
}

export default validator