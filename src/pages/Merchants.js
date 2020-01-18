import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import List from '../components/List/List';
import AddEditMerchant from '../components/Merchant/AddEditMerchant';
import ShowMerchantModal from '../components/Merchant/ShowMerchantModal';

function Merchants(props) {
  const [merchants, setMerchants] = useState([]);
  const [activeMerchant, setActiveMerchant] = useState({});
  const [addEditModalIsOpen, setAddEditModalIsOpen] = useState(false);
  const [showModalIsOpen, setShowModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  
  const addMerchant = () => {
    setModalType('add');
    setAddEditModalIsOpen(true);
  }

  const closeAddEditModal = () => {
    setAddEditModalIsOpen(false);
    setActiveMerchant({});
  }

  const closeShowModal = () => {
    setShowModalIsOpen(false);
    setActiveMerchant({});
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
      <List 
        data={merchants}
        setMerchants={setMerchants}
        setActiveMerchant={setActiveMerchant}
        setShowModalIsOpen={setShowModalIsOpen}
        setAddEditModalIsOpen={setAddEditModalIsOpen} />
      <ShowMerchantModal
        merchant={activeMerchant}
        isOpen={showModalIsOpen}
        onClose={closeShowModal}/>
      <AddEditMerchant
        merchant={activeMerchant}
        isOpen={addEditModalIsOpen}
        type={modalType}
        onClose={closeAddEditModal}
      />
    </Fragment>
  )
}

export default Merchants;