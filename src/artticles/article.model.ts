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

  videos: string[];
}
export interface Preview {
  id: number;
  title: string;
  description: string;
  preview: string; //src
}
