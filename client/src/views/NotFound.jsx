import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="fluid bg-secondary p-4" style={{ minHeight: '85vh' }}>
            <h2 className='m-2 mt-5 text-center'>The page you are seeking does not exist. Return <Link to={"/"}>home</Link>?</h2>
        </div>
    )
}

export default NotFound