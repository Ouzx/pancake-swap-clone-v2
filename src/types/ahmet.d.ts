export interface iStartInSeconds {
    header: string;
    paragraph: string;
    paragraphBold: string;
    buttonText: string;
    linkText: string;
}

export interface iCake {
  headerFirstWord: string;
  headerText: string;
  paragraphText: string;
  buttonText: string;
  linkText: string;
  blocks: BlockArray[];
}

export interface BlockArray {
  entry: string;
  data: string | number;
}
