import axios from "axios"
import { useState } from "react"
import {useMatch, useNavigate} from "react-router-dom"

function NewBeer(){
    const [form, setForm] = useState({
        name: "",
        tagline: "",
        description:"",
        first_brewed:"",
        brewers_tips :"",
        attenuation_level:"",
        contributed_by:"",
    })
    const navigate = useNavigate()
    function handleChange(e){
        setForm({... form, [e.target.name]:e.target.value})
    }
    async function handleSubmit (e){
        e.preventDefault()
        try {
            await axios.get("https://ih-beers-api2.herokuapp.com/beers/new", form)
            navigate("/beers")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <h1>Crie aqui a sua cerveja</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input name="name" value={form.name} onChange={handleChange} />
                <label>Tagline</label>
                <input name="tagline" value={form.tagline} onChange={handleChange}/>
                <label>Description</label>
                <input name="description" value={form.description} onChange={handleChange}/>
                <label>First Brewed</label>
                <input name="first_brewed" value={form.first_brewed} onChange={handleChange}/>
                <label>Brewers tips</label>
                <input name="brewers_tips" value={form.brewers_tips} onChange={handleChange}/>
                <label>Attenuation level</label>
                <input name="attenuation_level" value={form.attenuation_level} onChange={handleChange} />
                <label>Contributed by</label>
                <input name="contributed_by" value={form.contributed_by} onChange={handleChange}/>
                <button type="submit"> Submit beer</button>
            </form>
        </div>
    )
}
export default NewBeer