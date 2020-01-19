import React from 'react';
import Modal from 'react-responsive-modal';
import {Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import uuid from 'uuid/v4';
import { camelCaseToNormalString } from '../../helpers/utilities';
import '../../assets/scss/accordion.scss';
import '../../assets/scss/merchant-modal.scss';


function ShowMerchantModal({ isOpen, onClose, merchant, ...rest}) {

  const {name, shippingFee} = merchant;
  const renderShippingFee = () => {
    if (!Object.entries(merchant).length) return '';

    return Object.entries(shippingFee).map((item) => (
      <AccordionItem key={uuid()}>
        <AccordionItemHeading>
          <AccordionItemButton>
            { camelCaseToNormalString(item[0]) }
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="flex">
            <div className="full-width">
              <span className="input-label">Box</span>
                <p>{item[1].box}</p>
            </div>
            <div className="full-width">
              <span className="input-label">Oversized</span>
              <p>{item[1].oversized}</p>
            </div>
          </div>
          <div className="flex">
            <div className="full-width">
              <span className="input-label">Small Pouch</span>
              <p>{item[1].smallPouch}</p>
            </div>
            <div className="full-width">
              <span className="input-label">Large Pouch</span>
              <p>{item[1].largePouch}</p>
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
        modal: {color: '#5C5C5C'}
      }}
    >
      <div className="modal-content">
        <h2>Merchant</h2>

        <form className="modal-form">
          <div>
            <span className="input-label">Name</span>
            <p>{name}</p>
          </div>
          <Accordion>
            { renderShippingFee() }
          </Accordion>
        </form>
      </div>

    </Modal>
  )
}

export default ShowMerchantModal;