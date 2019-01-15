import * as React from 'react';

interface IProps {
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<IProps> = props => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
