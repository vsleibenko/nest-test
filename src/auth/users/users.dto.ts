export class CreateUserDto {
  email: string;
  password: string;
}

export class UserDto {
  id: number;
  email: string;
  password: string;
}

export class LoginUserDto {
  email: string;
  password: string;
  fingerprint: string;
}

export class LoginSuccessDto {
  accessToken: string;
}