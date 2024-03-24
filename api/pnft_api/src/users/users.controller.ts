import { BadRequestException, Body, Controller, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Post, Scope } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto, UserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createAlbum(@Body() user: CreateUserDto): Promise<CreateUserDto> {
        const data = new User();
        data.name = user.name;
        data.last_name = user.last_name;
        data.age = user.age;
        data.email = user.email;
        data.telephone = user.telephone;
        data.password = user.password;
        return await this.usersService.createUser(user);
    }

    @Get()
    async findUsers(): Promise<User[]> {
        return await this.usersService.findAllUser();
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() data: LoginUserDto): Promise<User | null> {
        const res = await this.usersService.login(data);
        if (res != null) {
            return res;
        }
        throw new HttpException("Invalid email or password", HttpStatus.BAD_REQUEST);
    }
}
