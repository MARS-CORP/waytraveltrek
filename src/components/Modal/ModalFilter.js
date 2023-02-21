import React from 'react';
import { createPortal } from 'react-dom';

const ModalFilter = ({ children, mounted }) => {
  return mounted
    ? createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen backdrop-blur-sm bg-white/30 px-8 z-40">
          {children}
        </div>,
        document.querySelector('#modalFilterAndSortHotel')
      )
    : null;
};

export { ModalFilter };
