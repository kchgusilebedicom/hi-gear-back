import { title } from 'process';

interface PageElement {
  title?: string;
  type: 'img' | 'text' | 'bold-text' | 'video';
  content: string; //src для картинок, текст для текста наверно в виде html
}

interface PageBlock {
  bgColor?: string;
  title?: string;
  elements: PageElement[];
}

export interface Page {
  id: number;
  headline: string;
  blocks: PageBlock[];
}
export interface Preview {
  title: string;
  description: string;
  preview: string; //src
}
