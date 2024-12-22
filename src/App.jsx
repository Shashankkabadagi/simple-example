import React, { useState } from 'react'

const countries = [
  "United States",
  "India",
  "Canada",
  "Australia",
  "Germany",
  "Brazil",
  "Japan",
  "South Africa",
  "Mexico",
  "France"
];

const statesAndCountries = [
  { country: "United States", states: ["California", "Texas", "Florida"] },
  { country: "India", states: ["Maharashtra", "Karnataka", "Gujarat", "Delhi"] },
  { country: "Canada", states: ["Ontario", "Quebec", "British Columbia"] },
  { country: "Australia", states: ["New South Wales", "Victoria", "Queensland"] },
  { country: "Germany", states: ["Bavaria", "Berlin", "Hamburg"] },
  { country: "Brazil", states: ["São Paulo", "Rio de Janeiro", "Bahia"] },
  { country: "Japan", states: ["Tokyo", "Osaka", "Hokkaido"] },
  { country: "South Africa", states: ["Gauteng", "KwaZulu-Natal", "Western Cape"] },
  { country: "Mexico", states: ["Jalisco", "Mexico City", "Nuevo León"] },
  { country: "France", states: ["Île-de-France", "Normandy", "Provence"] }
];

const capitals = [
  { state: "California", capital: "Sacramento" },
  { state: "Texas", capital: "Austin" },
  { state: "Florida", capital: "Tallahassee" },
  { state: "Maharashtra", capital: "Mumbai" },
  { state: "Karnataka", capital: "Bangalore" },
  { state: "Gujarat", capital: "Gandhinagar" },
  { state: "Delhi", capital: "New Delhi" },
  { state: "Ontario", capital: "Toronto" },
  { state: "Quebec", capital: "Quebec City" },
  { state: "British Columbia", capital: "Victoria" },
  { state: "New South Wales", capital: "Sydney" },
  { state: "Victoria", capital: "Melbourne" },
  { state: "Queensland", capital: "Brisbane" },
  { state: "Bavaria", capital: "Munich" },
  { state: "Berlin", capital: "Berlin" },
  { state: "Hamburg", capital: "Hamburg" },
  { state: "São Paulo", capital: "São Paulo" },
  { state: "Rio de Janeiro", capital: "Rio de Janeiro" },
  { state: "Bahia", capital: "Salvador" },
  { state: "Tokyo", capital: "Tokyo" },
  { state: "Osaka", capital: "Osaka" },
  { state: "Hokkaido", capital: "Sapporo" },
  { state: "Gauteng", capital: "Johannesburg" },
  { state: "KwaZulu-Natal", capital: "Durban" },
  { state: "Western Cape", capital: "Cape Town" },
  { state: "Jalisco", capital: "Guadalajara" },
  { state: "Mexico City", capital: "Mexico City" },
  { state: "Nuevo León", capital: "Monterrey" },
  { state: "Île-de-France", capital: "Paris" },
  { state: "Normandy", capital: "Rouen" },
  { state: "Provence", capital: "Marseille" }
];

const App = () => {
 const[activeCountry,setactiveCountry]=useState(countries[0])
 const[activeState,setactiveState]=useState('California')

  const changeCountry = (event) =>{
    setactiveCountry(event.target.value)
    
    const stateObject = statesAndCountries.find((eachelement)=>{
      return(
        eachelement.country===(event.target.value)
      )
    })
    setactiveState(stateObject.states[0])
  }

  const stateObject = statesAndCountries.find((eachelement)=>{
    return(
      eachelement.country===activeCountry
    )
  })

  const changeState = (event) =>{
    setactiveState(event.target.value)
  }

  const capitalObject=capitals.find((eachelement)=>{
    return(
      eachelement.state===activeState
    )
  })

  return (
    <div>
      <div >
      <p className='font-semibold'>Country:</p>
      <select onChange={changeCountry}>
      {
        countries.map((eachelement)=>{
          return(
            <option value={eachelement}>{eachelement}</option>
          )
        })
      }
      </select>
      <p className='font-semibold'>States:</p>      
      <select onChange={changeState}>
      {
        stateObject.states.map((eachelement)=>{
          return(
             <option value={eachelement}>{eachelement}</option> 
          )
        })
      }
      </select>
      <p className='font-semibold'>Capital:{capitalObject.capital} </p>
    </div>
    </div>
  )
}

export default App
