import React, { useState, useEffect } from 'react';

const usePersistStorage = (key) => {
  const val = JSON.parse(localStorage.getItem(key)) || '';
  const [value, setValue] = useState(val);

  useEffect(() => {
    localStorage.setItem(key,value)
  }, [key, value]);

  return [value, setValue]
}

export default usePersistStorage;