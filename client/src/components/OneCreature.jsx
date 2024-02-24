import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const OneCreature = (props) => {

    const { id } = useParams()

    const [creature, setCreature] = useState({})
    const [notFoundError, setNotFoundError] = useState("")
    const [like, setLike] = useState(false)
    // const [localLikeCount, setLocalLikeCount] = useState(creature.likeCount)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/creatures/${id}`)
            .then((res) => {
                console.log(res)
                setCreature(res.data)
            }).catch((err) => {
                console.log(err)
                setNotFoundError("A creature with that ID does not exist.")
            })

    }, [])

    const deleteHandle = (id) => {
        axios.delete(`http://localhost:8000/api/creatures/${id}`)
            .then((res) => {
                console.log(res)
                navigate("/")
            }).catch((err) => {
                console.log(err)
            })
    }

    const likeHandle = () => {
        axios.put(`http://localhost:8000/api/creatures/${id}`, {
            likeCount: creature.likeCount += 1
        })
            .then((res) => {
                console.log(res)
                setLike(true)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='fluid bg-secondary p-4' style={{ minHeight: '85vh' }}>
            {notFoundError ?
                <div>
                    <h2>{notFoundError}</h2>
                    <h3>Click <Link style={{ textDecoration: 'none' }} to={'/new'}>here</Link> to add a new movie, or <Link style={{ textDecoration: 'none' }} to={'/'}>here</Link> to return home.</h3>
                </div>
                :
                <div>
                    <div className='row justify-content-center align-items-center m-2'>
                        <h2 className='col-5'>Details about {creature.name}</h2>
                        <div className='col-5'>
                            <button onClick={(e) => deleteHandle(creature._id)} className='btn btn-danger m-2'>Adopt {creature.name}!</button>
                        </div>
                    </div>

                    {creature.image && <img className='col col-3 mx-auto m-3' src={creature.image} alt={`${creature.image}'s picture`} />}
                    <div className='row justify-content-center m-2 align-items-center'>
                        <h4 className='col-3'>Creature Type:</h4>
                        <h4 className='col-3'>{creature.creatureType}</h4>
                    </div>
                    <div className='row justify-content-center align-items-center m-2'>
                        <h4 className='col-3'>Description:</h4>
                        <h4 className='col-3'>{creature.description}</h4>
                    </div>
                    <div className='row justify-content-center align-items-center m-2'>
                        <h4 className='col-3'>Skills:</h4>
                        {creature.skill1 ?
                            <div className='col-3 align-items-center'>
                                <h5>{creature.skill1}</h5>
                                <h5>{creature.skill2}</h5>
                                <h5>{creature.skill3}</h5>
                            </div>
                            :
                            <div className='col-3 align-items-center'>
                                <h5>No special skills listed.</h5>
                            </div>

                        }

                    </div>
                    <div className='row justify-content-center align-items-center m-2'>
                        <div className='col-2'>

                            {like == false ?
                                <button onClick={(e) => likeHandle()} className='btn btn-success m-2'>Like {creature.name}!</button>
                                :
                                <button disabled={true} className='btn btn-success m-2'>You liked {creature.name}!</button>
                            }

                        </div>
                        <h5 className='col-2'>{`${creature.likeCount} like(s)`}</h5>
                    </div>
                </div>
            }
        </div>
    )

}

export default OneCreature