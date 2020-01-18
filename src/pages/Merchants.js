import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import List from '../components/List/List';
import AddEditMerchant from '../components/AddEditMerchant';

function Merchants(props) {
  const [merchants, setMerchants] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  
  const addMerchant = () => {
    setModalType('add');
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  useEffect(()=> {
    const getMerchants = async() => {
      const { data: {data} } = await axios.get('../data/merchants/1.json');
      setMerchants(data);
    }
    
    getMerchants();
  }, [])
  return (
    <Fragment>
      <div className="page-header">
        <div className="page-header-title">
          <h2>Merchants</h2>
        </div>
        <div className="page-header-actions">
          <button className="primary-button" onClick={()=>{addMerchant()}}>Add Merchant</button>
        </div>
      </div>
      <List data={merchants} setMerchants={setMerchants} />
      <AddEditMerchant
        isOpen={modalIsOpen}
        type={modalType}
        onClose={closeModal}
      />
    </Fragment>
  )
}

export default Merchants;