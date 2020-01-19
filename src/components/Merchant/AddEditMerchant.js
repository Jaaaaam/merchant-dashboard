import React from 'react';
import Modal from 'react-responsive-modal';

function AddEditMerchant({ merchant, type, isOpen, onClose, ...rest}) {
  console.log(merchant, 'merchant')
  console.log(Object.entries(merchant), 'Object.entries(merchant)')

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={{
        modal: { minWidth: '860px', minHeight: '90%'}
      }}
    >
      <h3> { Object.entries(merchant).length ? 'Edit' : 'Add'} Merchant</h3>

      <form>
        <input />
        <input />
        <input />
        <input />
        <input />
        <input />
        <input />
      </form>
    </Modal>
  )
}

export default AddEditMerchant;