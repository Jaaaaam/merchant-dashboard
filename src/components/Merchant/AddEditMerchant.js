import React, {useState, useEffect} from 'react';
import Modal from 'react-responsive-modal';
import {Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import '../../assets/scss/accordion.scss';
import '../../assets/scss/merchant-modal.scss';

function AddEditMerchant({ submit, merchant, type, isOpen, onClose, ...rest}) {
  const [form, setForm] = useState({
    name: '',
    mmBox: 0,
    mmOversized: 0,
    mmSmallPouch: 0,
    mmLargePouch: 0,
    provBox: 0,
    provOversized: 0,
    provSmallPouch: 0,
    provLargePouch: 0,
    intraBox: 0,
    intraOversized: 0,
    intraSmallPouch: 0,
    intraLargePouch: 0,
  });

  const { name, mmBox, mmLargePouch, mmOversized, mmSmallPouch, provBox, provLargePouch, provOversized, provSmallPouch, intraBox, intraLargePouch, intraOversized, intraSmallPouch } = form;

  const handleFormChange = ({ target: { name, value } }) => {
    const newForm = {...form};
    newForm[name] = value;

    setForm(newForm);
  }

  const onSubmit = (e, form) => {
    e.preventDefault();
    submit(form)
  }

  useEffect(() => {
    if (Object.entries(merchant).length) {
      const { name, shippingFee: { metroManila, provincial, intraProvincial } } = merchant;
      setForm({
        name,
        mmBox: metroManila.box,
        mmOversized: metroManila.oversized,
        mmSmallPouch: metroManila.smallPouch,
        mmLargePouch: metroManila.largePouch,
        provBox: provincial.box,
        provOversized: provincial.oversized,
        provSmallPouch: provincial.smallPouch,
        provLargePouch: provincial.largePouch,
        intraBox: intraProvincial.box,
        intraOversized: intraProvincial.oversized,
        intraSmallPouch: intraProvincial.smallPouch,
        intraLargePouch: intraProvincial.largePouch,
      })
      return;
    }
    setForm({
      name: '',
      mmBox: 0,
      mmOversized: 0,
      mmSmallPouch: 0,
      mmLargePouch: 0,
      provBox: 0,
      provOversized: 0,
      provSmallPouch: 0,
      provLargePouch: 0,
      intraBox: 0,
      intraOversized: 0,
      intraSmallPouch: 0,
      intraLargePouch: 0,
    })
  }, [merchant])
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={{
        modal: {color: '#5C5C5C'}
      }}
    >
      <div className="modal-content">
        <h2> { Object.entries(merchant).length ? 'Edit' : 'Add'} Merchant</h2>

        <form className="modal-form">
          <div>
            <span className="input-label">Name</span>
            <input name="name" value={name} onChange={(e) => {handleFormChange(e)}} />
          </div>
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    Metro Manila
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex">
                  <div className="full-width">
                    <span className="input-label">Box</span>
                    <input type="number" name="mmBox" value={mmBox} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                  <div className="full-width">
                    <span className="input-label">Oversized</span>
                    <input type="number" name="mmOversized" value={mmOversized} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                </div>
                <div className="flex">
                  <div className="full-width">
                    <span className="input-label">Small Pouch</span>
                    <input type="number" name="mmSmallPouch" value={mmSmallPouch} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                  <div className="full-width">
                    <span className="input-label">Large Pouch</span>
                    <input type="number" name="mmLargePouch" value={mmLargePouch} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    Provincial
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex">
                  <div className="full-width">
                    <span className="input-label">Box</span>
                    <input type="number" name="provBox" value={provBox} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                  <div className="full-width">
                    <span className="input-label">Oversized</span>
                    <input type="number" name="provOversized" value={provOversized} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                </div>
                <div className="flex">
                  <div className="full-width">
                    <span className="input-label">Small Pouch</span>
                    <input type="number" name="provSmallPouch" value={provSmallPouch} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                  <div className="full-width">
                    <span className="input-label">Large Pouch</span>
                    <input type="number" name="provLargePouch" value={provLargePouch} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    Intra Provincial
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex">
                  <div className="full-width">
                    <span className="input-label">Box</span>
                    <input type="number" name="intraBox" value={intraBox} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                  <div className="full-width">
                    <span className="input-label">Oversized</span>
                    <input type="number" name="intraOversized" value={intraOversized} onChange={(e) => {handleFormChange(e)}}  />
                  </div>
                </div>
                <div className="flex">
                  <div className="full-width">
                    <span className="input-label">Small Pouch</span>
                    <input type="number" name="intraSmallPouch" value={intraSmallPouch} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                  <div className="full-width">
                    <span className="input-label">Large Pouch</span>
                    <input type="number" name="intraLargePouch" value={intraLargePouch} onChange={(e) => {handleFormChange(e)}} />
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="flex">
            <button className="primary-button" onClick={(e) => {onSubmit(e, form)}}>Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default AddEditMerchant;