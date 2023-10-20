import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleBlockService } from './articleBlock.service';
import { CreateArticleBlockDto } from './dto/create-articleBlock.dto';
import { UpdateArticleBlockDto } from './dto/update-articleBlock.dto';
import { ArticleBlock } from '@prisma/client';

@Controller('articleBlocks')
export class ArticleBlockController {
  constructor(private readonly articleBlockService: ArticleBlockService) {}

  @Get(':id')
  async getArticleBlock(@Param('id') id: string) {
    return this.articleBlockService.getArticleBlockById(parseInt(id));
  }

  @Get()
  async getAllArticleBlocks() {
    return this.articleBlockService.getAllArticleBlocks();
  }

  @Post()
  async createArticleBlock(
    @Body() createArticleBlockDto: CreateArticleBlockDto,
  ) {
    return this.articleBlockService.createArticleBlock(createArticleBlockDto);
  }

  @Put(':id')
  async updateArticleBlock(
    @Param('id') id: string,
    @Body() updateArticleBlockDto: UpdateArticleBlockDto,
  ) {
    return this.articleBlockService.updateArticleBlock(
      parseInt(id),
      updateArticleBlockDto,
    );
  }

  @Delete(':id')
  async removeArticleBlock(@Param('id') id: string): Promise<ArticleBlock> {
    return this.articleBlockService.removeArticleBlock(parseInt(id));
  }
}
