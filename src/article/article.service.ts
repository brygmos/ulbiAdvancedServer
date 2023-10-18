import { Inject, Injectable, Param } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('PrismaService')
    private prisma: PrismaClient,
  ) {}
  async getArticles() {
    return this.prisma.article.findMany() || null;
  }

  async getArticleById(@Param() id: number) {
    return this.prisma.article.findUnique({ where: { id: id } });
  }

  async createArticle(createArticleDto: CreateArticleDto) {
    return 'createArticle ' + createArticleDto.title;
  }
}
