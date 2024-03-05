import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

const Country = () => {

    const [country, setCountry] = useState([])
    const {name} = useParams()
    

    useEffect(() => {
        const fetchCountry = async () =>{
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const country = await response.json()
            setCountry(country)
            console.log(country)
        }

        fetchCountry()

    }, [])

    return (
        <div>
            <Link to="/" className='btn btn-light'>
                <i className="fas fa-arrow-left">Back Home</i>
            </Link>
            <section className="country">
                {country.map((country) => {
                    const { numericCode, flags, name, population, region, subregion, capital, tld, currencies,
                    languages, borders}  = country
                    
                    return(
                        <article key={numericCode}>
                            <div className="flag">
                                <img src={flags.png} alt={name.official} />
                            </div>
                            <div className="country-details">
                                <div>
                                    <h2>{name.official}</h2>
                                    <h5>Native Name: <span>{name.nativeName.eng.official}</span> </h5>
                                    <h5>Population: <span> {JSON.stringify(population)} </span></h5>
                                    <h5>Region: <span>{region} </span></h5>
                                    <h5>Sub region: <span> {subregion} </span> </h5>
                                    <h5>Capital: <span> {capital} </span> </h5>
                                </div>
                                <div>
                                    <h5>Top Level Domain: <span> {tld} </span></h5>
                                    <h5>Currencies: <span> {JSON.stringify(Object.values(Object.values(currencies)).name)} </span> </h5>
                                    <h5>Languages: </h5>
                                </div>
                            </div>
                            <div className="border-countries">Border Countries: {borders} </div>
                        </article>
                    )
                })}
            </section>
        </div>
        
    )
}

export default Country