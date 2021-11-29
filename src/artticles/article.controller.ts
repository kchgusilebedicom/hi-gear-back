import { Controller, Get, Param, Query } from '@nestjs/common';
import { articles } from 'src/data/articles';


@Controller('articles')
export class ArticleController {
  @Get()
  getArticleById(@Query('id') id : number): Page | null {
    const founedArticles = articles.filter((f) => f.id == id);
    console.log(founedArticles);
    if (founedArticles.length > 0) return founedArticles[0];
    else {
      return null;
    }
  }

  @Get()
  getArticles(): Page[] {
    return articles;
  }

  @Get("count")
  getCount(): string {
    return articles.length.toString();
  }
}
