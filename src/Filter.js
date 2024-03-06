import React from 'react'

function Filter(props) {
    
    const setCountries = props.setCountries
    const inputValue = props.searchInput
    const searchCountry = props.searchCountry
    /*const region = [
        {name: "Africa"}, 
        {name: "America"},
        {name: "Asia"},
        {name: "Europe"},
        {name: "Oceania"}]*/

    const fetchCountryByRegion = async (region) => {
        const res = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        )
        const data = await res.json()
        setCountries(data)
        console.log(data)
      }

  return (
    <div>
      <section className="filter">
        <div className="search-country">
          <form className="form-control">
            <input type="search" className="search" id='search' placeholder='Search for a country...'  onChange={(e) => searchCountry(e.target.value)}/>
          </form>
        </div>

        <div className="region-filter">
            <select name="select" id='select' className="select" value={inputValue} onChange={(e) => fetchCountryByRegion(e.target.value)}>  
                <option value="Filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
          </section>
    </div>
  )
}

export default Filter