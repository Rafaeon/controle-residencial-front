import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { criarUsuario } from "../../services/usuarioService"
// página para criar um novo usuário, com formulário e chamada para a api de criação
function UsuarioCreate() {
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [isAtivo, setIsAtivo] = useState(true)

    async function salvarUsuario(e: any) {
        e.preventDefault()
        const usuario = {
            nome: nome,
            idade: Number(idade),
            isAtivo: isAtivo
        }

        const data = await criarUsuario(usuario)

        if (!data.identityResult?.succeeded) {
            const erros = data.identityResult?.errors
            const mensagem = erros?.map((e: any) => e.description).join("\n")
            alert("Erro: " + mensagem)
            return
        }

        navigate("/usuarios")
    }

    return (
        <div>
            <h2>Novo Usuário</h2>
            <form onSubmit={salvarUsuario}>
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

export default UsuarioCreate