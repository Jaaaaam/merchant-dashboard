import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import '../../assets/scss/list.scss';

function List() {
  return (
    <div className="list">
      <div className="list-item">
        <div className="list-item-name">Robinson's Applicances</div>
        <div className="list-item-actions">
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faEdit} className="list-icon" />
            Edit
          </div>
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faTrashAlt} className="list-icon" />
            Delete
          </div>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-name">Robinson's Applicances</div>
        <div className="list-item-actions">
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faEdit} className="list-icon" />
            Edit
          </div>
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faTrashAlt} className="list-icon" />
            Delete
          </div>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-name">Robinson's Applicances</div>
        <div className="list-item-actions">
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faEdit} className="list-icon" />
            Edit
          </div>
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faTrashAlt} className="list-icon" />
            Delete
          </div>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-name">Robinson's Applicances</div>
        <div className="list-item-actions">
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faEdit} className="list-icon" />
            Edit
          </div>
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faTrashAlt} className="list-icon" />
            Delete
          </div>
        </div>
      </div>
      <div className="list-item">
        <div className="list-item-name">Robinson's Applicances</div>
        <div className="list-item-actions">
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faEdit} className="list-icon" />
            Edit
          </div>
          <div className="list-item-action-item">
            <FontAwesomeIcon icon={faTrashAlt} className="list-icon" />
            Delete
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;