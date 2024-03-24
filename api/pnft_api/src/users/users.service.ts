import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    createUser = async (user: User): Promise<User> => {
        return await this.userRepository.save(user);
    }

    findUser = async (email: string): Promise<User | null> => {
        return await this.userRepository.findOne({
            where: {
                email: email
            }
        });
    }

    login = async (data: LoginUserDto): Promise<User | null> => {
        return await this.userRepository.findOne({
            where: {
                email: data.email,
                password: data.password
            }
        })
    }
}
