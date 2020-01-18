import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/scss/dropdown.scss';

const Dropdown = ({label, icon, children, ...rest}) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const node = useRef();

  const handleClickEvent = useCallback((e) => {
    if (node.current.contains(e.target)) {
      if (isDropdownShown) {
        setIsDropdownShown(false);
        return
      }
      setIsDropdownShown(true);
      return
    }
    if (isDropdownShown) {
      setIsDropdownShown(false);
    }
    return
  }, [isDropdownShown])

  useEffect(() => {
    document.addEventListener('click', handleClickEvent);

    return () => {
      document.removeEventListener('click', handleClickEvent);
    }
  }, [handleClickEvent])

  const renderDropdown = () => {
    if (isDropdownShown) {
      return (
        <div className="dropdown-items-container">
          <div className="dropdown-items">
            { children }
          </div>
        </div>
      )
    }
  }

  return (
    <div className="dropdown">
      <div className="dropdown-header" ref={ node }>
        { label }
        <FontAwesomeIcon icon={icon}className="margin-left"/>
      </div>
      { renderDropdown() }
    </div>
  )
}

export default Dropdown;