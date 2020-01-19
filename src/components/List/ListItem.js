import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

function ListItem({id, name, shippingFee, data, setMerchants, setActiveMerchant, setAddEditModalIsOpen, setShowModalIsOpen, ...rest}) {
  const showMerchant = () => {
    setActiveMerchant({id, name, shippingFee});
    setShowModalIsOpen(true);
  }
  const editMerchant = () => {
    setActiveMerchant({id, name, shippingFee});
    setAddEditModalIsOpen(true)
  }
  const deleteMerchant = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        const merchants = [...data]
        merchants.splice(merchants.findIndex(function(i){
          return i.id === id;
      }), 1);
      setMerchants(merchants)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div className="list-item">
      <div className="list-item-name"  onClick={() => {showMerchant()}}>{name}</div>
      <div className="list-item-actions">
        <div className="list-item-action-item" onClick={() => editMerchant()}>
          <FontAwesomeIcon icon={faEdit} className="list-icon" />
          <div className="list-item-action-item-label">
            Edit
          </div>
        </div>
        <div className="list-item-action-item" onClick={() => deleteMerchant()}>
          <FontAwesomeIcon icon={faTrashAlt} className="list-icon"/>
          <div className="list-item-action-item-label">
            Delete
          </div>
        </div>
      </div>
    </div>

  )
}

export default ListItem;