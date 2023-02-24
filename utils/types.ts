export interface Error {
    status: number
    error_code: string
    message: string
}

export interface Success {
    statusCode: number
    body: string
    headers: object
}