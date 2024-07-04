export interface ILabel {
  title: string;
  onClick?: () => void;
  size: string;
  weight?: number;
  color?: string;
  lineHeight?: string;
  textAlign?: 'center' | 'left' | 'right';
  cursor?: 'pointer' | 'default';
  alignSelf?: 'flex-start' | 'flex-end' | 'center';
}
