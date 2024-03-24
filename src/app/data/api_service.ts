import type { AxiosInstance } from "axios";
import { injectable } from "inversify";
import axios from "axios";

@injectable()
class ApiService {
    getInstance(): AxiosInstance {
        return axios.create({
            baseURL: "http://localhost:3001"
        })
    }
}

export default ApiService