interface IButton {
  text: string;
  onClick: (event: MouseEventHandler<HTMLButtonElement>) => void;
  disabled?: boolean;
}
