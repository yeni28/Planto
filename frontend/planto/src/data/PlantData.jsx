import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DictPage from '../features/dictionary/DictPage';
import { HOST } from '../features/login/OAuth'

function PlantData() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
      axios({
          method: "get",
          url: `${HOST}/api/v1/dict`,
      }).then(function (response) {
        //   console.log(response.data)
          setPlants(response.data)
      });
      
  }, [])



return (
  <div>
      <ul>
        {plants}
          {plants.map((item)=>{return (<DictPage plants={item} test={"test data"}/>)})}
      </ul>

      <h1> This is Plant Data Page.</h1>
    
  </div>
)
}



// const PlantData = ({plants, test}) => {

//   // console.log(plants)
//   console.log(test)
// return (
//   <div>
//     {plants.map(plant=>{
//       return(<div key={plant.id}>{plant.name}</div>)
//     })}
//     <BottomNav/>
//     </div>
// )
// }


export default PlantData