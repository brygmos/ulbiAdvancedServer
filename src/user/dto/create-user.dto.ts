import { Role } from '@prisma/client';

export class CreateUserDto {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly role: Role;
  readonly profile: null;
  readonly articles: null;
  readonly comments: null;
}
