import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from '@prisma/client';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get(':id')
  async getComment(@Param('id') id: string) {
    return this.commentService.getCommentById(parseInt(id));
  }

  @Get()
  async getAllComments() {
    return this.commentService.getAllComments();
  }

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }

  @Put(':id')
  async updateComment(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.updateComment(parseInt(id), updateCommentDto);
  }

  @Delete(':id')
  async removeComment(@Param('id') id: string): Promise<Comment> {
    return this.commentService.removeComment(parseInt(id));
  }
}
