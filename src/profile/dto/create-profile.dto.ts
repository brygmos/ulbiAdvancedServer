import { Country, Currency } from '@prisma/client';

export class CreateProfileDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly avatar: string;
  readonly age: number;
  readonly city: string;
  readonly country: Country;
  readonly currency: Currency;
  readonly user: null;
}
