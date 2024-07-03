export interface IFooterText {
  statement: string;
  redirectionText?: string;
  onRedirectionTextClick?: () => void;
}

export interface IModalProps {
  showCloseButton?: boolean;
  closeButtonOnClick?: () => void;
  headerText?: string;
  descriptionText?: string;
  footerStatementText?: string;
  redirectionText?: string;
  onRedirectionTextClick?: () => void;
}

export interface IModal {
  children: any;
  props?: IModalProps;
}
