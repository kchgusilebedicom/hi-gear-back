interface PageElement {
  type: 'img' | 'text' | 'bold-text' | 'video';
  content: string; //src для картинок, текст для текста наверно в виде html
}

interface PageBlock {
  bgColor?: string;
  title?: string;
  elements: PageElement[];
}

interface Page {
  id: number;
  headline: string;
  blocks: PageBlock[];
}
