import beers from '../../assets/beers.png'
import random from '../../assets/random-beer.png'
import newbeer from "../../assets/new-beer.png"
import { Link } from "react-router-dom"

function HomePage(){
    return (
        <>
            <div className='home-page'>
                <Link to='/beers'>
                    <img src={beers}></img>
                    <h2>All Beers</h2>
                    <p>lorem, ipsum dolor sit amet consectetur adipisicing elit. quam voluptates optio, reiciendis autem, facere amet possimus corrupti iste cumque, culpa numquam facilis quae atque eaque dignissimos aliquid id non qui.</p>
                </Link>
                <Link to="/random-beer" >
                    <img src={random}></img>
                    <h2>Random Beer</h2>
                    <p>lorem, ipsum dolor sit amet consectetur adipisicing elit. quam voluptates optio, reiciendis autem, facere amet possimus corrupti iste cumque, culpa numquam facilis quae atque eaque dignissimos aliquid id non qui.</p>
                </Link>
                <Link to="/new-beer">
                    <img src={newbeer}></img>
                    <h2>New Beer</h2>
                    <p>lorem, ipsum dolor sit amet consectetur adipisicing elit. quam voluptates optio, reiciendis autem, facere amet possimus corrupti iste cumque, culpa numquam facilis quae atque eaque dignissimos aliquid id non qui.</p>
                </Link>
            </div>
        </>
    )
}
export default HomePage;