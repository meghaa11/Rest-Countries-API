import React from 'react'
import DarkMode from './DarkMode'

const Header = () => {
  return (
    <div>
        <section className="header">
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div>
            <DarkMode />
            </div>
        </section>
    </div>
  )
}

export default Header