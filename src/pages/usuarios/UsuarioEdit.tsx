import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { atualizarUsuario } from "../../services/usuarioService"
// página para editar um usuário existente, com formulário preenchido e chamada para a api de atualização
function UsuarioEdit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [isAtivo, setIsAtivo] = useState(true)

    useEffect(() => {
        if (id) {
            carregarUsuario()
        }
    }, [id])

    async function carregarUsuario() {
        const response = await fetch(`https://localhost:7240/api/usuarios/${id}`)
        if (!response.ok) {
            alert("Erro ao buscar usuário")
            return
        }
        const text = await response.text()
        if (!text) return
        const data = JSON.parse(text)
        setNome(data.nome)
        setIdade(data.idade)
        setIsAtivo(data.isAtivo)
    }

    async function atualizarUsuarioSubmit(e: React.FormEvent) {
        e.preventDefault()
        const usuario = { id, nome, idade: Number(idade), isAtivo }

        const data = await atualizarUsuario(usuario)

        if (!data.identityResult?.succeeded) {
            const erros = data.identityResult?.errors
            const mensagem = erros?.map((e: any) => e.description).join("\n")
            alert("Erro: " + mensagem)
            return
        }

        alert("Usuário atualizado!")
        navigate("/usuarios")
    }

    return (
        <div>
            <h2>Editar Usuário</h2>
            <form onSubmit={atualizarUsuarioSubmit}>
                <div>
                    <label>Nome</label>
                    <input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label>Idade</label>
                    <input
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>
                <div>
                    <label>Ativo</label>
                    <input
                        type="checkbox"
                        checked={isAtivo}
                        onChange={(e) => setIsAtivo(e.target.checked)}
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}

export default UsuarioEdit