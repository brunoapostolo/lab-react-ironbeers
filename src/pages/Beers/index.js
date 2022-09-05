import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Beers (){
    const [cervejas, setCervejas] = useState([]);

    useEffect(()=>{
        async function fetchComAxios (){
            try {
                const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers") 
                setCervejas(response.data)
            } catch (error){
                console.log(error);
            } finally {
                console.log("vai rodar todas as vezes")
            }
        }
        fetchComAxios()
    },[])
console.log (cervejas)
    return(
        <>
            {cervejas.map((cerveja)=>{
                return(
                    <div style={{display:"flex", flexDirection:"row"}} className="cervejinha">
                        <img style={{height: "200px", margin: "20px"}} src={cerveja.image_url}/>
                        <div style={{display:"flex", flexDirection:"column"}} className="infobeer">
                            <Link to={`/beers/${cerveja._id}`}>
                                <h3>{cerveja.name}</h3>
                                <h3>{cerveja.tagline}</h3>
                                <h4>Contributed by: {cerveja.contributed_by}</h4>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Beers