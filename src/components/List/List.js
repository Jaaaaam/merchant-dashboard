import React from 'react';
import ListItem from './ListItem';
import '../../assets/scss/list.scss';

function List({ data, setMerchants, ...rest }) {
  const renderListItems = () => {
    console.log(data, !data.length, 'data')
    if (!data.length) return 'no data';
    
    return data.map(({ id, name }) => (
      <ListItem 
        key={id}
        id={id}
        name={name}
        data={data}
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