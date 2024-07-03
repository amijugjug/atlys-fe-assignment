import React, { useEffect, useState } from 'react';
import Input from '@/components/atomic/InputBox';
import { INPUT_TYPE, LOGIN_MODAL_TEXT, REGISTER_MODAL_TEXT } from '@/constants';
import Button from '@/components/atomic/Button';
import Modal from '@/components/Modal';
import { getItemFromLocalStorage } from '@/services/localStorage.service';
import { AESEncryptionService } from '@/services/encryption.service';

export const LoginComponent = ({
  onLogin = () => {},
}: {
  onLogin: () => void;
}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const isButtonDisabled = () => state.email === '' || state.password === '';
  const handleEmailInputChange = (event: any) => {
    setState({ ...state, email: event.target.value });
  };

  const handlePasswordInputChange = (event: any) => {
    setState({ ...state, password: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    try {
      if (localStorage.getItem('DB')) {
        const k = localStorage.getItem('DB');

        const aes = new AESEncryptionService();
        const key = aes.encrypt(`${state.email}${state.password}`);

        if (k && k.includes(key)) {
          console.log('login successful');
        }
        onLogin();
      } else {
        throw new Error('User is not registered yet.');
      }
    } catch (error: any) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <>
      <Input
        title={LOGIN_MODAL_TEXT.email.title}
        placeHolder={LOGIN_MODAL_TEXT.email.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.email}
        handleInputChange={handleEmailInputChange}
      />
      <Input
        title={LOGIN_MODAL_TEXT.password.title}
        placeHolder={LOGIN_MODAL_TEXT.password.placeholder}
        type={INPUT_TYPE.PASSWORD}
        showEyeIcon={true}
        value={state.password}
        handleInputChange={handlePasswordInputChange}
      />
      <Button
        text={LOGIN_MODAL_TEXT.buttonText}
        onClick={handleSubmit}
        disabled={isButtonDisabled()}
      />
    </>
  );
};

export const RegisterComponent = ({
  onRegister = () => {},
}: {
  onRegister: () => void;
}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    username: '',
  });

  const isButtonDisabled = () =>
    state.email === '' || state.password === '' || state.username === '';

  const handleEmailInputChange = (event: any) => {
    setState({ ...state, email: event.target.value });
  };

  const handlePasswordInputChange = (event: any) => {
    setState({ ...state, password: event.target.value });
  };
  const handleUsernameInputChange = (event: any) => {
    setState({ ...state, username: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    try {
      let items = {} as { [key: string]: string };
      if (localStorage.getItem('DB')) {
        const k = localStorage.getItem('DB');
        items = JSON.parse(k ? k : '{}');
        const aes = new AESEncryptionService();
        const key = aes.encrypt(`${state.email}${state.password}`);
        const value = aes.encrypt(`${state.username}${state.password}`);
        items[key] = value;

        localStorage.setItem('DB', JSON.stringify(items));
        onRegister();
      } else {
        throw new Error('Problem while registering the user');
      }
    } catch (err: any) {
      console.log('Error :', err);
    }
  };

  return (
    <>
      <Input
        title={REGISTER_MODAL_TEXT.email.title}
        placeHolder={REGISTER_MODAL_TEXT.email.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.email}
        handleInputChange={handleEmailInputChange}
      />
      <Input
        title={REGISTER_MODAL_TEXT.username.title}
        placeHolder={REGISTER_MODAL_TEXT.username.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.username}
        handleInputChange={handleUsernameInputChange}
      />
      <Input
        title={REGISTER_MODAL_TEXT.password.title}
        placeHolder={REGISTER_MODAL_TEXT.password.placeholder}
        type={INPUT_TYPE.PASSWORD}
        showEyeIcon={true}
        value={state.password}
        handleInputChange={handlePasswordInputChange}
      />

      <Button
        text={REGISTER_MODAL_TEXT.buttonText}
        onClick={handleSubmit}
        disabled={isButtonDisabled()}
      />
    </>
  );
};

const LoginRegisterModal = ({ closeModal }: { closeModal: () => void }) => {
  const [modalType, setModalType] = useState('Login');

  const toggleRegisterModal = () => {
    setModalType((prev) => (prev === 'Login' ? 'Register' : 'Login'));
  };

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
    if (modalType === 'Login') {
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
  }, [modalType]);

  return (
    <Modal props={modalProps}>
      {modalType === 'Register' ? (
        <RegisterComponent onRegister={() => closeModal()} />
      ) : (
        <LoginComponent onLogin={() => closeModal()} />
      )}
    </Modal>
  );
};

export default LoginRegisterModal;
