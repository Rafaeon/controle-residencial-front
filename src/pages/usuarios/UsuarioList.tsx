import { useEffect, useState } from "react"
import { listarUsuarios, deletarUsuario } from "../../services/usuarioService"
import { Usuario } from "../../models/usuario"
import { Link } from "react-router-dom"
// página para listar os usuários, com opções para editar e excluir cada um, e link para criar novo usuário
function UsuarioList() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    useEffect(() => {
        carregarUsuarios()
    }, [])

    async function carregarUsuarios() {
        const data = await listarUsuarios()
        setUsuarios(data)
    }

    async function handleDeletar(id: string) {
        const confirmar = window.confirm("Deseja excluir este usuário?")
        if (!confirmar) return

        const data = await deletarUsuario(id)

        if (!data.identityResult?.succeeded) {
            const erros = data.identityResult?.errors
            const mensagem = erros?.map((e: any) => e.description).join("\n")
            alert("Erro: " + mensagem)
            return
        }

        alert("Usuário removido!")
        carregarUsuarios()
    }

    return (
        <div>
            <div className="page-header">
              <h2>Usuários</h2>
              <Link to="/usuarios/novo"><button className="btn-primary">Novo Usuário</button></Link>
              </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Ativo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.id}>
                            <td>{u.nome}</td>
                            <td>{u.idade}</td>
                            <td>{u.isAtivo ? "Sim" : "Não"}</td>
                            <td>
                                <Link to={`/usuarios/editar/${u.id}`}>
                                    <button>Editar</button>
                                </Link>
                                <button onClick={() => handleDeletar(u.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsuarioList