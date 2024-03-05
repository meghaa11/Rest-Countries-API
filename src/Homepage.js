import React from 'react'
import Countries from './Countries'
import Filter from './Filter'

function Homepage(){
    return (
        <> 
          <Filter />
          <Countries />
        </>
      );
}

export default Homepage