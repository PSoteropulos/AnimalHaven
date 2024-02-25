
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneHandler, changeHandler, editHandler } from '../hooks/handlers'
import defaultCreatureShape from '../utils/defaultShape'

const EditCreatureForm = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(defaultCreatureShape)
    const [errors, setErrors] = useState({})
    const [validForm, setValidForm] = useState(true)
    const [localName, setLocalName] = useState("")

    useEffect(() => {
        getOneHandler(id, setFormData, navigate, setLocalName)
    }, [])

    return (
        <div className='fluid bg-secondary p-4' style={{ minHeight: '85vh' }}>
            <div>
                <h1 className='m-2'>{`Edit ${localName}'s information`}</h1>
                <div>
                    <form className='row justify-content-center ' onSubmit={(e) => editHandler(e, id, formData, setErrors, navigate)}>

                        <div className='col-3 m-4'>
                            <h5>Required Fields</h5>
                            <label className='form-label'>Creature Name:</label>
                            <input type="text" name="name" className='form-control' onChange={(e) => changeHandler(e, setFormData, formData, setErrors, setValidForm)} value={formData.name} />
                            {errors.name && <span className='text-warning'>{errors.name.message}</span>}<br />

                            <label className='form-label'>Creature Type:</label>
                            <input type="text" name="creatureType" className='form-control' onChange={(e) => changeHandler(e, setFormData, formData, setErrors, setValidForm)} value={formData.creatureType} />
                            {errors.creatureType && <span className='text-warning'>{errors.creatureType.message}</span>}<br />

                            <label className='form-label'>Description:</label>
                            <input type="text" name="description" className='form-control' onChange={(e) => changeHandler(e, setFormData, formData, setErrors, setValidForm)} value={formData.description} />
                            {errors.description && <span className='text-warning'>{errors.description.message}</span>}<br />

                            <div className='mt-4'>
                                <button type='submit' className='btn btn-primary' disabled={!validForm}>{validForm ? "Update Creature" : "Complete Form to Submit"}</button>
                            </div>
                        </div>

                        <div className='col-3 m-4'>
                            <h5>Optional Fields</h5>
                            <label className='form-label'>Special Skill:</label>
                            <input type="text" name='skill1' className='form-control' onChange={(e) => changeHandler(e, setFormData, formData, setErrors, setValidForm)} value={formData.skill1} />
                            {errors.skill1 && <span className='text-warning'>{errors.skill1.message}</span>}<br />

                            <>
                                <label className='form-label'>Special Skill:</label>
                                <input disabled={formData.skill1 ? false : true} type="text" name='skill2' className='form-control' onChange={(e) => changeHandler(e, setFormData, formData, setErrors, setValidForm)} value={formData.skill2} />
                            </>
                            {errors.skill1 && <span className='text-warning'>{errors.skill1.message}</span>}<br />

                            <>
                                <label className='form-label'>Special Skill:</label>
                                <input disabled={formData.skill2 ? false : true} type="text" name='skill3' className='form-control' onChange={(e) => changeHandler(e, setFormData, formData, setErrors, setValidForm)} value={formData.skill3} />
                            </>
                            {errors.skill3 && <span className='text-warning'>{errors.skill3.message}</span>}<br />

                            <label className='form-label'>Creature Picture URL:</label>
                            <input type="text" name="image" className='form-control' onChange={(e) => changeHandler(e, setFormData, formData, setErrors, setValidForm)} value={formData.image} />
                            {errors.image && <span className='text-warning'>{errors.image.message}</span>}<br />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCreatureForm