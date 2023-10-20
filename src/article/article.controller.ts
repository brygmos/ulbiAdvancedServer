import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from '@prisma/client';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get(':id')
  async getArticle(@Param('id') id: string) {
    return this.articleService.getArticleById(parseInt(id));
  }

  @Get()
  async getAllArticles() {
    return this.articleService.getAllArticles();
  }

  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.createArticle(createArticleDto);
  }

  @Put(':id')
  async updateArticle(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.updateArticle(parseInt(id), updateArticleDto);
  }

  @Delete(':id')
  async removeArticle(@Param('id') id: string): Promise<Article> {
    return this.articleService.removeArticle(parseInt(id));
  }
}
