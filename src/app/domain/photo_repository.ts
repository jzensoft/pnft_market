import DataState from "../core/resource/data_state";
import { Photo } from "../data/model/photo";

export interface PhotoRepsitory {
    getPhotos(): Promise<DataState<Photo[] | null>>
}