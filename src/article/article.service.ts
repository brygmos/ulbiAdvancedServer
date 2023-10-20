import { Inject, Injectable, Param } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article, PrismaClient } from '@prisma/client';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('PrismaService')
    private prisma: PrismaClient,
  ) {}
  async getArticleById(@Param() id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  async getAllArticles() {
    return this.prisma.article.findMany();
  }
  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    // return this.prisma.article.create({ data: createArticleDto });
    return this.prisma.article.create({
      data: {
        title: createArticleDto.title,
        subtitle: createArticleDto.subtitle,
        views: 7,
        img: createArticleDto.img,
        userId: createArticleDto.userId,
        types: {
          create: [
            {
              type: {
                connectOrCreate: {
                  where: {
                    id: createArticleDto.types[0].id,
                  },
                  create: {
                    id: createArticleDto.types[0].id,
                    name: createArticleDto.types[0].name || 'new type',
                  },
                },
              },
            },
          ],
        },
        // blocks: {
        //   create: [
        //     {
        //
        //     }
        //   ]
        // }
      },
    });
  }

  async updateArticle(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.prisma.article.update({
      where: {
        id,
      },
      include: {
        types: true,
      },
      data: updateArticleDto,
    });
  }

  async removeArticle(id: number): Promise<Article> {
    return this.prisma.article.delete({ where: { id: id } });
  }
}
