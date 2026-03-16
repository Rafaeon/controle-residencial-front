export interface TransacaoResponse {
    identityResult: {
        succeeded: boolean
        errors: { code: string, description: string }[]
    }
    data?: {
        id: string
        descricao: string
        valor: string
        dataTransacao: string
        usuarioId: string
    }
}