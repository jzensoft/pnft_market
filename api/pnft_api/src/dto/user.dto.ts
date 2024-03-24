export class CreateUserDto {
    id: number;
    name: string;
    last_name: string;
    age: number;
    email: string;
    telephone: string;
    password: string;
}

export class LoginUserDto {
    email: string;
    password: string;
}

export class FindUderDto {
    email: string;
}