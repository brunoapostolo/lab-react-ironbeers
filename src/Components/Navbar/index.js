import { Link } from "react-router-dom"

function Navbar(){
    return (
        <Link to="/">
            <nav style={{backgroundColor:"blue"}}>
                <img  style={{height:"40px"}} src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695726.jpg"/>
            </nav>
        </Link>
    )
}
export default Navbar