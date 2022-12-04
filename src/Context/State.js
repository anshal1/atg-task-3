import React from 'react'
import { useState } from 'react'
import Context from './Context'
const State = (props) => {
    const [Userdetails, setUserDetails] = useState({});
  return (
    <Context.Provider value={{Userdetails, setUserDetails}}>
        {props.children}
    </Context.Provider>
  )
}

export default State