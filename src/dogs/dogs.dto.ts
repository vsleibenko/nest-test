export class CreateDogDto {
  name: string;
  age: number;
  breed?: string;
}

export class DogDto {
  id: number;
  name: string;
  age: number;
  breed: string;
}