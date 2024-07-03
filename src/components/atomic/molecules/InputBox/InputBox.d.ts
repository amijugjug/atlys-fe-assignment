export interface IInputBox {
  title: string;
  placeHolder: string;
  type: string;
  showEyeIcon?: boolean;
  value?: string;
  handleInputChange?: (event: any) => void;
}
