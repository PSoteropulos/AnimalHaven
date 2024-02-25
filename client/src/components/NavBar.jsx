import { NavLink } from 'react-router-dom'

const NavBar = () => {

    let activeStyle = {
        color: "#ffc107"
    }
    let inActiveStyle = {
        color: "white"
    }

    return (
        <div className='bg-success p-3 fluid' style={{ minHeight: '15vh', width: '100%' }}>
            <div className='row g-0 justify-content-center align-items-center'>
                <div className='row g-0 col-6 mt-3 align-items-center justify-content-center'>
                    <img src="/unicorn.jpg" alt="unicorn logo" className='col-1' />
                    <h1 className="col-6 text-white">Creature Sanctuary</h1>
                </div>
                <div className='col-6 mt-3'>
                    <NavLink to="/" className='h5 m-2' style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>Home</NavLink>
                    <NavLink to="/new" className='h5 m-2' style={({ isActive }) => isActive ? activeStyle : inActiveStyle} end>Add Creature to Sanctuary</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar