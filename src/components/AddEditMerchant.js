import React from 'react';
import Modal from 'react-responsive-modal';

function AddEditMerchant({ type, isOpen, onClose, ...rest}) {
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