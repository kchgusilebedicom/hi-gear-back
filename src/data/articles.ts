import { IArticle } from 'src/artticles/article.model';

const article1: IArticle = {
  id: 1,
  blocks: [{ elements: [{ text: 'text1', imageUrl: 'imageUrlPath' }] }],
};

const articles = [article1];
export { articles };
