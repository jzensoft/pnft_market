import "reflect-metadata";
import { Container } from "inversify";
import { IntjectionKey } from "./injection_key";
import ApiService from "../data/api_service";
import { PhotoRepsitory } from "../domain/photo_repository";
import PhotoRepsitoryImpl from "../data/respository/photo_repository_impl";
 
const container = new Container()
container.bind<ApiService>(IntjectionKey.API_SERVICE).to(ApiService).inSingletonScope()
container.bind<PhotoRepsitory>(IntjectionKey.PHOTOREPOSITORY).to(PhotoRepsitoryImpl).inSingletonScope()


export { container }