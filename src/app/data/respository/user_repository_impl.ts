import DataState from "@/app/core/resource/data_state";
import { inject, injectable } from "inversify"
import ApiService from "../api_service";
import { IntjectionKey } from "@/app/di/injection_key";
import { UserRepsitory } from "@/app/domain/user_repositort";
import { User } from "../../../../api/pnft_api/src/entity/user.entity";
import { LoginUserDto } from "../../../../api/pnft_api/src/dto/user.dto";


@injectable()
class UserRepsitoryImpl implements UserRepsitory {

    @inject(IntjectionKey.API_SERVICE)
    _remote!: ApiService;

    async login(data: LoginUserDto): Promise<DataState<User | null>> {
        try {
            const res = await this._remote.getInstance().post<User>("/users/login", data);
            return new DataState(res.data, res.status == 200, res.statusText)
        } catch (e) {
            return new DataState(null, false, (e as Error).message);
        }
    }
}

export default UserRepsitoryImpl