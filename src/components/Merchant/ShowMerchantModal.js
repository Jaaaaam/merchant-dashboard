import React, {Fragment} from 'react';
import Modal from 'react-responsive-modal';

function ShowMerchantModal({ isOpen, onClose, merchant, ...rest}) {
  console.log(merchant, 'merchant')
  const {name, shippingFee} = merchant;
  const renderContent = () => {
    if (!Object.entries(merchant).length) return '';
    return (
      <Fragment>
        <h3>{name}</h3>
        <div className="flat-card">
          <div>Metro Manila</div>
          <div>Box: {shippingFee.metroManila.box}</div>
          <div>OverSized: {shippingFee.metroManila.overSized}</div>
          <div>Big Pouch: {shippingFee.metroManila.bigPouch}</div>
          <div>Box: {shippingFee.metroManila.smallPouch}</div>
        </div>
      </Fragment>
    )
  }
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={{
        modal: { minWidth: '860px', minHeight: '90%'}
      }}
    >
      {renderContent()}
    </Modal>
  )
}

export default ShowMerchantModal;