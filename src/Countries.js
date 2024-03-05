import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'


const url = "https://restcountries.com/v3.1/all"


function Countries() {
    const [countries, setCountries] = useState([]) 

    const fetchCountryData = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
    }    

    useEffect(() => {
        fetchCountryData()
    },[])

    return (
        <div>
            <Filter 
                setCountries={setCountries} />
            <div className='countryData'>
                <section className="grid">
                    { countries.map((country,index) => {
                        //console.log(country)
                        const { name, population, region, capital, flags }  = country
                        return (
                        <article key={index}>
                            <div>
                                <img src={flags.png} alt={name}/>
                                <div className="country">
                                    <h3>{name.official}</h3>
                                    <h4>Population: <span>{JSON.stringify(population)}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: {capital}</h4>
                                    <Link to={`/countries/${name.official}`} className='btn'>Learn More</Link>
                                </div>
                            </div>
                        </article>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

export default Countries
