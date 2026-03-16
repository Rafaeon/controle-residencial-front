import { ApiResponse } from "../models/apiResponse"
// url base da api de categorias
//const API_URL = "https://localhost:7240/api/categorias"
const API_URL = `${process.env.REACT_APP_API_URL}/api/categorias`

export async function listarCategorias() {
    const response = await fetch(`${API_URL}/filter?page=1&regs=100`, {
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
// cria uma nova categoria e retorna o resultado da api
export async function criarCategoria(categoria: any): Promise<ApiResponse> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoria)
    })
    return response.json()
}