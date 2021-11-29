import { Controller, Get, Param, Query } from '@nestjs/common';
import { articles } from 'src/data/articles';
import { Page, Preview } from './article.model';

@Controller('articles')
export class ArticleController {
  @Get()
  getArticleById(@Query('id') id: number): Page | null {
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

  @Get('preview')
  getPreviews(): Preview[] {
    const previews = articles.map((value): Preview => {
      const preview: Preview = {
        title: value.headline,
        description: value.blocks[0].title,
        preview: value.blocks[0].elements[0].content,
      };

      return preview;
    });
    return previews;
  }

  @Get('count')
  getCount(): string {
    return articles.length.toString();
  }
}
