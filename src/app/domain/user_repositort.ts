import { LoginUserDto } from "../../../api/pnft_api/src/dto/user.dto";
import { User } from "../../../api/pnft_api/src/entity/user.entity";
import DataState from "../core/resource/data_state";

export interface UserRepsitory {
    login(data: LoginUserDto): Promise<DataState<User | null>>
}