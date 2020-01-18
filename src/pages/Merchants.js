import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../components/List/List';

function Merchants() {
  const [merchants, setMerchants] = useState([]);

  useEffect(()=> {
    const getMerchants = async() => {
      const res = await axios.get('../data/merchants/1.json');
      console.log(res, 'res')
    }
    
    getMerchants();
  }, [])
  return (
    <div>
      <h2>Merchants</h2>
      <List />
    </div>
  )
}

export default Merchants;