import DataState from "@/app/core/resource/data_state";
import { PhotoRepsitory } from "@/app/domain/photo_repository";
import { inject, injectable } from "inversify"
import { Photo } from "../model/photo";
import ApiService from "../api_service";
import { IntjectionKey } from "@/app/di/injection_key";
 

@injectable()
class PhotoRepsitoryImpl implements PhotoRepsitory {

    @inject(IntjectionKey.API_SERVICE)
    _remote!: ApiService;

    async getPhotos(): Promise<DataState<Photo[] | null>> {
        const res = await this._remote.getInstance().get<Photo[]>("/photos")
        return new DataState(res.data, res.status == 200, res.statusText)
    }
}

export default PhotoRepsitoryImpl