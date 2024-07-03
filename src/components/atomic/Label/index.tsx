import React from 'react';

const Label = ({
  className,
  title,
  onClick,
}: {
  className: any;
  title: string;
  onClick?: () => void;
}) => {
  return (
    <label className={className} onClick={onClick}>
      {title}
    </label>
  );
};

export default Label;
