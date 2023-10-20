import { Inject, Injectable, Param } from '@nestjs/common';
import { PrismaClient, ArticleBlock } from '@prisma/client';
import { CreateArticleBlockDto } from './dto/create-articleBlock.dto';
import { UpdateArticleBlockDto } from './dto/update-articleBlock.dto';

@Injectable()
export class ArticleBlockService {
  constructor(
    @Inject('PrismaService')
    private prisma: PrismaClient,
  ) {}

  async getArticleBlockById(@Param() id: number) {
    return this.prisma.articleBlock.findUnique({ where: { id } });
  }

  async getAllArticleBlocks() {
    return this.prisma.articleBlock.findMany();
  }
  async createArticleBlock(
    createArticleBlockDto: CreateArticleBlockDto,
  ): Promise<ArticleBlock> {
    return this.prisma.articleBlock.create({ data: createArticleBlockDto });
  }

  async updateArticleBlock(
    id: number,
    updateArticleBlockDto: UpdateArticleBlockDto,
  ): Promise<ArticleBlock> {
    return this.prisma.articleBlock.update({
      where: {
        id,
      },
      data: updateArticleBlockDto,
    });
  }

  async removeArticleBlock(id: number): Promise<ArticleBlock> {
    return this.prisma.articleBlock.delete({ where: { id: id } });
  }
}
