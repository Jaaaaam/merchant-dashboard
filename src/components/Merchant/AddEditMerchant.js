import React from 'react';
import Modal from 'react-responsive-modal';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import uuid from 'uuid/v4';
import { camelCaseToNormalString } from '../../helpers/utilities';
import '../../assets/scss/accordion.scss';
import '../../assets/scss/merchant-modal.scss';

function AddEditMerchant({ merchant, type, isOpen, onClose, ...rest}) {
  console.log(merchant, 'merchant')
  console.log(Object.entries(merchant), 'Object.entries(merchant)')
  const renderShippingFee = () => {
    if (!Object.entries(merchant).length) return '';
    const { id, name, shippingFee } = merchant;
    console.log(shippingFee, 'test')
    console.log(Object.entries(shippingFee), 'Object.entries(shippingFee)')

    return Object.entries(shippingFee).map((shipping) => (
      <AccordionItem key={uuid()}>
        <AccordionItemHeading>
          <AccordionItemButton>
              {camelCaseToNormalString(shipping[0])}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="flex">
            <div className="full-width">
              <span className="input-label">Box</span>
              <input />
            </div>
            <div className="full-width">
              <span className="input-label">Oversized</span>
              <input />
            </div>
          </div>
          <div className="flex">
            <div className="full-width">
              <span className="input-label">Small Pouch</span>
              <input />
            </div>
            <div className="full-width">
              <span className="input-label">Large Pouch</span>
              <input />
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    ))
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={{
        modal: {
          // minWidth: '860px',
          // minHeight: '90%'
          color: '#5C5C5C'
        }
      }}
    >
      <div className="modal-content">
        <h2> { Object.entries(merchant).length ? 'Edit' : 'Add'} Merchant</h2>

        <form className="modal-form">
          <div>
            <span className="input-label">Name</span>
            <input />
          </div>
          <Accordion>
            { renderShippingFee() }
          </Accordion>
        </form>
      </div>
    </Modal>
  )
}

export default AddEditMerchant;