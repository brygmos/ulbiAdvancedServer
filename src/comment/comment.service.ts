import { Inject, Injectable, Param } from '@nestjs/common';
import { PrismaClient, Comment } from '@prisma/client';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @Inject('PrismaService')
    private prisma: PrismaClient,
  ) {}

  async getCommentById(@Param() id: number) {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  async getAllComments() {
    return this.prisma.comment.findMany();
  }
  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.prisma.comment.create({ data: createCommentDto });
  }

  async updateComment(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    return this.prisma.comment.update({
      where: {
        id,
      },
      data: updateCommentDto,
    });
  }

  async removeComment(id: number): Promise<Comment> {
    return this.prisma.comment.delete({ where: { id: id } });
  }
}
