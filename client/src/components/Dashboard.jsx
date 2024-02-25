import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHandler } from '../hooks/handlers'

const Dashboard = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        getAllHandler(setList)
    }, [])

    return (
        <div className='bg-secondary fluid p-4' style={{ minHeight: '85vh', width: '100%' }}>
            <h3 className=''>These creatures are looking for a good home</h3>
            <div className='row justify-content-center mt-4'>
                <div className='col-8'>
                    <table className='table table-hover table-striped table-dark'>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Type</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((creature, index) => (
                                <tr key={index}>
                                    <th style={{ verticalAlign: "middle" }} className="">
                                        {creature.name}
                                    </th>
                                    <td style={{ verticalAlign: "middle" }}>
                                        {creature.creatureType}
                                    </td>
                                    <td>
                                        <Link to={`/onecreature/${creature._id}`}>details | </Link>
                                        <Link to={`/edit/${creature._id}`}>edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard