import React from 'react';
import ListItem from './ListItem';
import '../../assets/scss/list.scss';

function List({ data, setMerchants, setActiveMerchant, setAddEditModalIsOpen, setShowModalIsOpen, ...rest }) {
  const renderListItems = () => {
    console.log(data, !data.length, 'data')
    if (!data.length) return 'no data';
    
    return data.map(({ id, name, shippingFee }) => (
      <ListItem 
        key={id}
        id={id}
        name={name}
        shippingFee={shippingFee}
        data={data}
        setActiveMerchant={setActiveMerchant}
        setShowModalIsOpen={setShowModalIsOpen}
        setAddEditModalIsOpen={setAddEditModalIsOpen}
        setMerchants={setMerchants} />
    ))
  }
  return (
    <div className="list">
      { renderListItems() }
    </div>
  )
}

export default List;