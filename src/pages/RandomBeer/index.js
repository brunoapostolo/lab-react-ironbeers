import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

function RandomBeer(){
    const [beer, setBeer]= useState({})
    useEffect(()=>{
        async function fetchCerveja (){
            try {
                const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
                setBeer(response.data)
            } catch (error){
                console.log(error)
            }
        }
        fetchCerveja()
    },[])
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
export default RandomBeer