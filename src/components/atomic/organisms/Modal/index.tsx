import Image from 'next/image';
import React from 'react';

import CloseButton from '@/../public/static/CloseButton.svg';

import s from './Modal.module.scss';
import { IFooterText, IModal } from './Modal';
import Label from '../../atoms/Label';

const FooterText = ({
  statement,
  redirectionText = '',
  onRedirectionTextClick = () => {},
}: IFooterText) => {
  return (
    <span className={s.modalFooter}>
      <Label title={statement} size={'14px'} color={'#7F8084'} />
      {redirectionText ? (
        <Label
          color={'#ffffff'}
          title={` ${redirectionText} →`}
          onClick={onRedirectionTextClick}
          size={'14px'}
          cursor="pointer"
        />
      ) : null}
    </span>
  );
};

const Modal = ({ children, props }: IModal) => {
  const {
    showCloseButton = false,
    closeButtonOnClick = () => {},
    headerText = '',
    descriptionText = '',
    footerStatementText = '',
    redirectionText = '',
    onRedirectionTextClick = () => {},
  } = props || {};

  return (
    <div className={s.modal}>
      <div className={s.modalHeader}>
        {showCloseButton ? (
          <Image
            src={CloseButton}
            alt="Close"
            className={s.closeButton}
            onClick={closeButtonOnClick}
            style={{ cursor: 'pointer' }}
            role="button"
          />
        ) : null}
        <p className={s.headerText}>{headerText}</p>
        <h3>{descriptionText}</h3>
      </div>

      <div className={s.modalBody}>{children}</div>

      <FooterText
        statement={footerStatementText}
        redirectionText={redirectionText}
        onRedirectionTextClick={onRedirectionTextClick}
      />
    </div>
  );
};

export default Modal;
