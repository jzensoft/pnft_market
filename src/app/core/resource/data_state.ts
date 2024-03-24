class DataState<T>{
    data?: T | null
    isSuccess?: boolean
    error?: string | null

    constructor(data: T | null, isSuccess: boolean, error: string | null) {
        this.data = data
        this.isSuccess = isSuccess
        this.error = error
    }
}

export default DataState