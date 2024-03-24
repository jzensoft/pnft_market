import DataState from "../core/resource/data_state";
import { User } from "../data/model/user";
import { FindUserDto, LoginUserDto } from '../core/dto/user_dto';

export interface UserRepsitory {
    login(data: LoginUserDto): Promise<DataState<User | null>>
    getUserInfo(data: FindUserDto): Promise<DataState<User | null>>
}