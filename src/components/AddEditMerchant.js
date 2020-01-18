import React from 'react';
import Modal from 'react-responsive-modal';

function AddEditMerchant({ type, isOpen, onClose, ...rest}) {
  console.log(type, 'type');
  console.log(isOpen, 'isOpen')
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={{
        modal: { minWidth: '860px', minHeight: '90%'}
      }}
    >
      test
    </Modal>
  )
}

export default AddEditMerchant;