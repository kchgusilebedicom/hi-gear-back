export interface IArticle {
  id: number;
  blocks: [{ elements: [{ imageUrl: string; text: string }] }];
}
