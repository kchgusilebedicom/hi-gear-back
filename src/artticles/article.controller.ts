import { Controller, Get, Param } from '@nestjs/common';
import { articles } from 'src/data/articles';


@Controller('articles')
export class ArticleController {
  @Get(':id')
  getArticleById(@Param() param): Page | null {
    const founedArticles = articles.filter((f) => f.id == param.id);
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
}
