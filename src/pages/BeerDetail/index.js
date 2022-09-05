import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

function BeerDetail(){
    const { beerId } = useParams()
    const [beer, setBeer]= useState({})

    useEffect(()=>{
        async function fetchBeer(){
            try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                setBeer(response.data)
            } catch (error){
                console.log(error)
            }           
        }
        fetchBeer()
    },[])
    console.log(beer)
    return (
        <div className="beerdetails">
            <img style={{height: "300px"}} src={beer.image_url}/>
            <div>
                <h1>Name: {beer.name}</h1>
                <h3>{beer.first_brewed}</h3>
            </div>
            <div>
                <h3>{beer.tagline}</h3>
                <h3>{beer.attenuation_level}</h3>
            </div>
            <p>{beer.description}</p>
            <footer>{beer.contributed_by}</footer>
        </div>
    )
}
export default BeerDetail