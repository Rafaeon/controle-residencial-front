export interface ApiResponse {
    identityResult: {
        succeeded: boolean
        errors: { code: string, description: string }[]
    }
    data?: any
}