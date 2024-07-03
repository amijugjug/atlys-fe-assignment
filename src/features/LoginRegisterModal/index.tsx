import React, { useEffect, useState } from 'react';
import Input from '@/components/atomic/InputBox';
import { INPUT_TYPE, LOGIN_MODAL_TEXT, REGISTER_MODAL_TEXT } from '@/constants';
import Button from '@/components/atomic/Button';
import Modal from '@/components/Modal';

export const LoginComponent = () => {
  return (
    <>
      <Input
        title={LOGIN_MODAL_TEXT.email.title}
        placeHolder={LOGIN_MODAL_TEXT.email.placeholder}
        type={INPUT_TYPE.TEXT}
      />
      <Input
        title={LOGIN_MODAL_TEXT.password.title}
        placeHolder={LOGIN_MODAL_TEXT.password.placeholder}
        type={INPUT_TYPE.PASSWORD}
        showEyeIcon={true}
      />
      <Button text={LOGIN_MODAL_TEXT.buttonText} />
    </>
  );
};

export const RegisterComponent = () => {
  return (
    <>
      <Input
        title={REGISTER_MODAL_TEXT.email.title}
        placeHolder={REGISTER_MODAL_TEXT.email.placeholder}
        type={INPUT_TYPE.TEXT}
      />
      <Input
        title={REGISTER_MODAL_TEXT.username.title}
        placeHolder={REGISTER_MODAL_TEXT.username.placeholder}
        type={INPUT_TYPE.TEXT}
      />
      <Input
        title={REGISTER_MODAL_TEXT.password.title}
        placeHolder={REGISTER_MODAL_TEXT.password.placeholder}
        type={INPUT_TYPE.PASSWORD}
        showEyeIcon={true}
      />

      <Button text={REGISTER_MODAL_TEXT.buttonText} />
    </>
  );
};

const LoginRegisterModal = ({ closeModal }: { closeModal: () => void }) => {
  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const [showRegisterModal, setShowRegisterModal] = useState(true);
  const [modalProps, setModalProps] = useState({
    closeButtonOnClick: () => {},
    headerText: LOGIN_MODAL_TEXT.headerText,
    descriptionText: LOGIN_MODAL_TEXT.descriptionText,
    footerStatementText: LOGIN_MODAL_TEXT.footerStatementText,
    redirectionText: LOGIN_MODAL_TEXT.redirectionText,
    showCloseButton: false,
    onRedirectionTextClick: toggleRegisterModal,
  });

  useEffect(() => {
    if (showRegisterModal) {
      setModalProps({
        closeButtonOnClick: closeModal,
        headerText: LOGIN_MODAL_TEXT.headerText,
        descriptionText: LOGIN_MODAL_TEXT.descriptionText,
        footerStatementText: LOGIN_MODAL_TEXT.footerStatementText,
        redirectionText: LOGIN_MODAL_TEXT.redirectionText,
        showCloseButton: true,
        onRedirectionTextClick: toggleRegisterModal,
      });
    } else {
      setModalProps({
        closeButtonOnClick: closeModal,
        headerText: REGISTER_MODAL_TEXT.headerText,
        descriptionText: REGISTER_MODAL_TEXT.descriptionText,
        footerStatementText: REGISTER_MODAL_TEXT.footerStatementText,
        redirectionText: REGISTER_MODAL_TEXT.redirectionText,
        showCloseButton: false,
        onRedirectionTextClick: toggleRegisterModal,
      });
    }
  }, [showRegisterModal]);

  return (
    <Modal props={modalProps}>
      {showRegisterModal ? <RegisterComponent /> : <LoginComponent />}
    </Modal>
  );
};

export default LoginRegisterModal;
