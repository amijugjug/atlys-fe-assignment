/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState, useEffect } from 'react';
import { IPortal } from './Portal';

import { createPortal } from 'react-dom';

import s from './Portal.module.scss';

export default function Portal({
  children,
  className = 'root-portal',
  el = 'div',
  toggleModal = function () {},
}: IPortal) {
  const [container] = useState(document?.createElement(el));
  const node = useRef<any>();
  container.classList.add(className);

  const escButtonClick = (event: KeyboardEvent) => {
    if (event.code === (27).toString()) {
      toggleModal();
    }
  };

  const handleClickOutside = (event: any) => {
    if (node && toggleModal && node.current == event.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', escButtonClick);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', escButtonClick);
    };
  }, []);

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(
    <div className={s.portal} ref={node}>
      {children}
    </div>,
    container
  );
}
