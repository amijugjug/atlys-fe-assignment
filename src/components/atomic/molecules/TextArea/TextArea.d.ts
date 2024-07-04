export interface ITextArea {
  disabled?: boolean;
  readOnly?: boolean;
  placeHolder?: string;
  value: string;
  handleInputChange?: (event: any) => void;
}
