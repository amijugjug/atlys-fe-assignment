// import Image from 'next/image';
// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { ITextArea } from './TextArea';
// import s from './TextArea.module.scss';
// import ThinkingEmoji from '@/../public/static/More.svg';

// const TextArea = ({
//   disabled,
//   readOnly,
//   placeHolder,
//   value,
//   handleInputChange,
// }: ITextArea) => {
//   const [emoji, setEmoji] = useState(ThinkingEmoji);
//   const textAreaRef = useRef(null);

//   useEffect(() => {
//     if (disabled && textAreaRef.current) {
//       textAreaRef.current.style.height = 'auto';
//       textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
//     }
//   }, [disabled, value]);

//   return (
//     <div className={s.textAreaContainer}>
//       <button className={s.emojiActionButton}>
//         <Image src={emoji} alt="Emoji" className={s.emoji} />
//       </button>
//       <textarea
//         ref={textAreaRef}
//         placeholder={placeHolder}
//         disabled={disabled}
//         readOnly={readOnly}
//         value={value}
//         onChange={handleInputChange}
//         className={s.textArea}
//       />
//     </div>
//   );
// };

// export default TextArea;

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ITextArea } from './TextArea';
import s from './TextArea.module.scss';
import ThinkingEmoji from '@/../public/static/More.svg';

const TextArea = ({
  disabled,
  readOnly,
  placeHolder,
  value,
  handleInputChange = () => {},
}: ITextArea) => {
  const [emoji, setEmoji] = useState(ThinkingEmoji);
  const textAreaRef = useRef(null);

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleInput = (e) => {
    handleInputChange(e);
    adjustHeight();
  };

  return (
    <div className={s.textAreaContainer}>
      <button className={s.emojiActionButton}>
        <Image src={emoji} alt="Emoji" className={s.emoji} />
      </button>
      <textarea
        ref={textAreaRef}
        placeholder={placeHolder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        onInput={handleInput}
        className={s.textArea}
      />
    </div>
  );
};

export default TextArea;
