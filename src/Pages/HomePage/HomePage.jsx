import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import CustomCard from '../../Components/CustomCard/CustomCard';

const HomePage = ({ data }) => {
  return (
    <main className="card-container">
      {
        data.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <CustomCard user={item} />
          </Link>
        ))
      }
    </main>
  );
};


export default HomePage