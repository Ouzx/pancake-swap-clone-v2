export interface iFooter {
  footer: Footer[];
}

interface Footer {
  links: string[];
  title: string;
}

export interface iUsedByMillions {
  cards: Card[];
  description: string;
  question: string;
  title: string;
}

export interface Card {
  adj: string;
  description: string;
  number: string;
}
