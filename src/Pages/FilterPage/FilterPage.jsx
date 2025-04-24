import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'

import CustomCard from '../../Components/CustomCard/CustomCard'

const FilterPage = () => {

  let {gender} = useParams()

  const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async() => {
        await fetch('https://dragonball-api.com/api/characters?limit=100')
        .then(response => response.json())
        .then(json => setData(json.items.filter((items) => items.gender === gender)))        
        .catch(error => console.error('Error fetching data:', error));        
      }
      fetchData();
    }, [gender]);

    
  return (
    <>      
      <main>
        {
          data.map((item) => (
            <Link to={`/details/${item.id}`} key={item.id}>
              <CustomCard
                key={item.id}
                user={item}              
              />            
            </Link>

          ))
        }
      </main>
    </>
  )
}

export default FilterPage