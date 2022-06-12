import React from 'react'
import "../styles/ships.scss"
import {ships} from "../data"
import photo from "../assets/ships/Cruser.jpg"

export default function Ships() {
  console.log(ships);
  return (
    <section>
      <h1>Brouse Featured Ships</h1>

      {/* <img className='' src={require(`${ships[0].images}`)}></img>  */}
      {ships.map((ship, key) => (
        <>
        <h1>{ship.name}</h1>
       <img className='shipPicture' src={require(`../assets/ships/${ship.name}.jpg`)} alt="" />
       </>
      )
      )
}
      

    </section>

  )
}
