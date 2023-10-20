export class CreateCommentDto {
  readonly articleId: number;
  readonly userId: number;
  readonly content: string;
}
