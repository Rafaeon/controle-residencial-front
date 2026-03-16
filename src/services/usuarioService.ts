import { ApiResponse } from "../models/apiResponse"
// url base da api de usuarios
//const API_URL = "https://localhost:7240/api/usuarios"
const API_URL = `${process.env.REACT_APP_API_URL}/api/usuarios`
// busca a lista de usuarios com paginação
export async function listarUsuarios() {
    const response = await fetch(`${API_URL}/filter?page=1&regs=10`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    })
    const data = await response.json()
        // retorna a lista ou array vazio se não tiver nada
    return data.lista ?? []
}
// cria um novo usuario e retorna o resultado da api
export async function criarUsuario(usuario: any): Promise<ApiResponse> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    })
    return response.json()
}
// atualiza os dados de um usuario existente
export async function atualizarUsuario(usuario: any): Promise<ApiResponse> {
    const response = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    })
    return response.json()
}
// remove um usuario pelo id
export async function deletarUsuario(id: string): Promise<ApiResponse> {
    const response = await fetch(API_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
    return response.json()
}