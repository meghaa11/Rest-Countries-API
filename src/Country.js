import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import './country.css'

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
        <div className="country">
            <Link to="/" className='btn-light'>
                <FaArrowLeft /> Back Home
            </Link>
            <div>
                {country.map((country) => {
                    const { numericCode, flags, name, population, region, subregion, capital, tld, currencies,
                    languages, borders}  = country
                    const currency = Object.values(Object.keys(currencies))
                    const language = Object.values(languages)
                    return(
                        <article key={numericCode}>
                            <div className="flag">
                                <img src={flags.png} alt={name.official} />
                            </div>
                            <div className="country-details">
                                <div>
                                    <h2>{name.official}</h2>
                                    <h5>Native Name: <span>{name.nativeName?.eng?.official}</span> </h5>
                                    <h5>Population: <span> {JSON.stringify(population)} </span></h5>
                                    <h5>Region: <span>{region} </span></h5>
                                    <h5>Sub region: <span> {subregion} </span> </h5>
                                    <h5>Capital: <span> {capital} </span> </h5>
                                </div>
                                <div>
                                    <h5>Top Level Domain: <span> {tld} </span></h5>  
                                    <h5>Currencies: <span> {currency[0]} </span> </h5>
                                    <h5>Languages: {language.map((l) => <span>{l}  </span>)}</h5>
                                </div>
                            </div>
                            <div className="border-countries">Border Countries: {borders?.map((border) => {
                                <ul key={border}> 
                                    <li>{border}</li>
                                </ul>
                            })} </div>
                        </article>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Country