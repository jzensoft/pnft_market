export class CreateUserDto {
    id: number;
    name: string;
    last_name: string;
    age: number;
    email: string;
    telephone: string;
    password: string;
}

export class UserDto {
    id: number;
    name: string;
    last_name: string;
    age: number;
    email: string;
    telephone: string;
}


export class LoginUserDto {
    email: string;
    password: string;
}