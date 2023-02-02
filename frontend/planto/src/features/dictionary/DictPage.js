import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BottomNav from '../nav/BottomNav';
// import PlantData from '../../data/PlantData'



const DictPage = ({plants, test}) => {

  console.log(plants)
  console.log(test)

return (
  <div>
    <h1>여기는 dict page</h1>

    {/* {plants.map(plant=>{
      return(<div key={plant.id}>{plant.name}</div>)
    })} */}
    <BottomNav/>
    </div>
)
}


export default DictPage