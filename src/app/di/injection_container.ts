import "reflect-metadata";
import { Container } from "inversify";
import { IntjectionKey } from "./injection_key";
import ApiService from "../data/api_service";
import { UserRepsitory } from "../domain/user_repositort";
import UserRepsitoryImpl from "../data/respository/user_repository_impl";
 
const container = new Container()
container.bind<ApiService>(IntjectionKey.API_SERVICE).to(ApiService).inSingletonScope()
container.bind<UserRepsitory>(IntjectionKey.USER_POSITORY).to(UserRepsitoryImpl).inSingletonScope()


export { container }