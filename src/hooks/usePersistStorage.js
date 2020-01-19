import React, { useState, useEffect } from 'react';

const usePersistStorage = (key) => {
  const val = JSON.parse(localStorage.getItem(key)) || '';
  const [value, setValue] = useState(val);

  useEffect(() => {
    if (!value) return;
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue]
}

export default usePersistStorage;