
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    let activeStyle = {
        color: "#ffc107"
    }
    let inActiveStyle = {
        color: "white"
    }

    return (
        <div className='bg-success p-4 fluid' style={{ minHeight: '15vh', width: '100%' }}>
            <div className='row justify-content-center align-items-center'>
                <h1 className="text-white col mt-3">Creature Sanctuary</h1>
                <div className='col mt-3'>
                    <NavLink to="/" className='h5 m-2' style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>Home</NavLink>
                    <NavLink to="/new" className='h5 m-2' style={({ isActive }) => isActive ? activeStyle : inActiveStyle} end>Add Creature to Sanctuary</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar