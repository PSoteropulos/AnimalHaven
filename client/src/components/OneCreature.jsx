import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneHandler, deleteHandler, likeHandler } from '../hooks/handlers'

const OneCreature = () => {

    const { id } = useParams()

    const [creature, setCreature] = useState({})
    const [like, setLike] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getOneHandler(id, setCreature, navigate)
    }, [])

    return (
        <div className='fluid bg-secondary p-4' style={{ minHeight: '85vh' }}>
                <div>
                    <div className='row justify-content-center align-items-center m-2'>
                        <h2 className='col-5'>Details about {creature.name}</h2>
                        <div className='col-5'>
                            <button onClick={() => deleteHandler(creature._id, navigate)} className='btn btn-danger m-2'>Adopt {creature.name}!</button>
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

                            {like === false ?
                                <button onClick={() => likeHandler(creature._id, creature.likeCount+1, setLike)} className='btn btn-success m-2'>Like {creature.name}!</button>
                                :
                                <button disabled={true} className='btn btn-success m-2'>You liked {creature.name}!</button>
                            }

                        </div>
                        <h5 className='col-2'>{like?`${creature.likeCount+1} like(s)`:`${creature.likeCount} like(s)`}</h5>
                    </div>
                </div>
        </div>
    )

}

export default OneCreature