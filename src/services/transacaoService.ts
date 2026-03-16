import { ApiResponse } from "../models/apiResponse"
// url base da api de transacoes
//const API_URL = "https://localhost:7240/api/transacoes"
const API_URL = `${process.env.REACT_APP_API_URL}/api/transacoes`
// busca a lista de transacoes com paginação
export async function listarTransacoes() {
    const response = await fetch(`${API_URL}/filter?page=1&regs=100`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
    })
    const data = await response.json()
        // retorna a lista ou array vazio se não tiver nada
    return data.lista ?? []
}
// cria uma nova transacao e retorna o resultado da api
export async function criarTransacao(transacao: any): Promise<ApiResponse> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transacao)
    })
    return response.json()
}
// atualiza os dados datransacao existente
export async function atualizarTransacao(transacao: any): Promise<ApiResponse> {
    const response = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transacao)
    })
    return response.json()
}
// remove uma transacao pelo id
export async function deletarTransacao(id: string): Promise<ApiResponse> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    return response.json()
}