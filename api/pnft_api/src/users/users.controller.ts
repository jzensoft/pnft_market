import { BadRequestException, Body, Controller, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Post, Scope } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, FindUderDto, LoginUserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import DataState from '../core/data_state';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createAlbum(@Body() user: CreateUserDto): Promise<DataState<CreateUserDto>> {
        const data = new User();
        data.name = user.name;
        data.last_name = user.last_name;
        data.age = user.age;
        data.email = user.email;
        data.telephone = user.telephone;
        data.password = user.password;
        const res = await this.usersService.createUser(user);
        if (res != null) {
            return new DataState(res, true, "");
        }
        return new DataState(null, false, "Create user failed, please try again.");
    }

    @Post('find')
    @HttpCode(HttpStatus.OK)
    async findUser(@Body() data: FindUderDto): Promise<DataState<User | null>> {
        const res = await this.usersService.findUser(data.email);
        if (res != null) {
            return new DataState(res, true, "");
        }
        return new DataState(null, false, "Not found user.");
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() data: LoginUserDto): Promise<DataState<User | null>> {
        const res = await this.usersService.login(data);
        if (res != null) {
            return new DataState(res, true, "");;
        }
        return new DataState(null, false, "Invalid email or password");
    }
}
