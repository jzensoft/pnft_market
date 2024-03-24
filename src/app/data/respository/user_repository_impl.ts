import DataState from "@/app/core/resource/data_state";
import { inject, injectable } from "inversify"
import ApiService from "../api_service";
import { IntjectionKey } from "@/app/di/injection_key";
import { UserRepsitory } from "@/app/domain/user_repositort";
import { User } from "../model/user";
import { FindUserDto, LoginUserDto } from '../../core/dto/user_dto';


@injectable()
class UserRepsitoryImpl implements UserRepsitory {

    @inject(IntjectionKey.API_SERVICE)
    _remote!: ApiService;

    async login(data: LoginUserDto): Promise<DataState<User | null>> {
        try {
            const res = await this._remote.getInstance().post<DataState<User | null>>("/users/login", data);
            return res.data
        } catch (e) {
            return new DataState(null, false, (e as Error).message);
        }
    }

    async getUserInfo(data: FindUserDto): Promise<DataState<User | null>> {
        try {
            const res = await this._remote.getInstance().post<DataState<User | null>>("/users/find", data);
            return res.data
        } catch (e) {
            return new DataState(null, false, (e as Error).message);
        }
    }
}

export default UserRepsitoryImpl