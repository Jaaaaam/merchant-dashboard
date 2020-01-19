import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import List from '../components/List/List';
import Pagination from '../components/Pagination';
import AddEditMerchant from '../components/Merchant/AddEditMerchant';
import ShowMerchantModal from '../components/Merchant/ShowMerchantModal';
import uuid from 'uuid/v4';

function Merchants(props) {
  const [merchants, setMerchants] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [activeMerchant, setActiveMerchant] = useState({});
  const [addEditModalIsOpen, setAddEditModalIsOpen] = useState(false);
  const [showModalIsOpen, setShowModalIsOpen] = useState(false);
  
  const addMerchant = () => {
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

  const getMerchants = async(page = 1) => {
    const {data} = await axios.get(`../data/merchants/${page}.json`);

    const { totalPages, prevPage, nextPage,currentPage } = data;
    setMerchants(data.data);
    setPageInfo({totalPages, prevPage, nextPage,currentPage})
  }

  const renderPaginator = () => {
    if (!Object.entries(pageInfo).length) return;

    return (
      <Pagination
        activePage={pageInfo.currentPage}
        totalPageCount={pageInfo.totalPages}
        fn={onPageClick}
      />
    )
  }

  const onPageClick = async({isActive, value}) => {
    await getMerchants(value)
  }

  const submit = (form) => {
    const { id } = activeMerchant;
    const { name, mmBox, mmLargePouch, mmOversized, mmSmallPouch, provBox, provLargePouch, provOversized, provSmallPouch, intraBox, intraLargePouch, intraOversized, intraSmallPouch } = form;

    const newMerchant = {
      name,
      shippingFee: {
        metroManila: {
          box: mmBox,
          oversized: mmOversized,
          smallPouch: mmSmallPouch,
          largePouch: mmLargePouch
        },
        provincial: {
          box: provBox,
          oversized: provOversized,
          smallPouch: provSmallPouch,
          largePouch: provLargePouch
        },
        intraProvincial: {
          box: intraBox,
          oversized: intraOversized,
          smallPouch: intraSmallPouch,
          largePouch: intraLargePouch
        }
      }
    }

    if (id) {
      const merchantsCopy = [...merchants];
      newMerchant.id = id;
      let merchant = merchantsCopy.find((data) => data.id === id);
      const index = merchantsCopy.indexOf(merchant);
      merchantsCopy[index] = newMerchant;
      setMerchants(merchantsCopy)
      setAddEditModalIsOpen(false)
      return
    }

    newMerchant.id = uuid();
    setMerchants([
      newMerchant,
      ...merchants
    ])
    setAddEditModalIsOpen(false)
  }

  useEffect(()=> {
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
      {renderPaginator()}
      <ShowMerchantModal
        merchant={activeMerchant}
        isOpen={showModalIsOpen}
        onClose={closeShowModal}/>
      <AddEditMerchant
        submit={submit}
        merchant={activeMerchant}
        isOpen={addEditModalIsOpen}
        onClose={closeAddEditModal}
      />
    </Fragment>
  )
}

export default Merchants;