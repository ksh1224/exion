import React, { useState, createContext } from 'react';

export const VisibleContext = createContext<[{ logIn: boolean, signOn: boolean },(changeVisible:object)=>void]>(null);

export function VisibleContextProvider({ children }: { children :JSX.Element[] | JSX.Element }) {
  const [visible, setVisible] = useState({ logIn: false, signOn: false });
  function setChangeVisible(changeVisible:object) {
    // if (typeof changeVisible !== 'object') return;
    const visibleKeys = Object.keys(visible);
    const changeVisibleKey = Object.keys(changeVisible)[0];
    if (visibleKeys.includes(changeVisibleKey) && typeof changeVisible[changeVisibleKey] === 'boolean') {
      setVisible({ ...visible, [changeVisibleKey]: changeVisible[changeVisibleKey] });
    }
  }
  return (
    <VisibleContext.Provider value={[visible, setChangeVisible]}>
      {children}
    </VisibleContext.Provider>
  );
}
