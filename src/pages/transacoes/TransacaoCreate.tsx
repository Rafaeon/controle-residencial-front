import { useEffect, useState } from "react"
import { listarUsuarios } from "../../services/usuarioService"
import { listarCategorias } from "../../services/categoriaService"
import { criarTransacao } from "../../services/transacaoService"
import { useNavigate } from "react-router-dom"

// página para criar uma nova transação, com formulário para descrição, valor, usuário, categoria e tipo, e chamada para a api de criação
function TransacaoCreate() {
    const navigate = useNavigate()
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [usuarioId, setUsuarioId] = useState("")
    const [categoriaId, setCategoriaId] = useState("")
    const [tipo, setTipo] = useState("1")
    const [usuarios, setUsuarios] = useState<any[]>([])
    const [categorias, setCategorias] = useState<any[]>([])

    useEffect(() => {
        carregarDados()
    }, [])

    async function carregarDados() {
        const usuariosData = await listarUsuarios()
        const categoriasData = await listarCategorias()
        setUsuarios(usuariosData || [])
        setCategorias(categoriasData || [])
    }

    async function salvarTransacao(e: any) {
        e.preventDefault()
        const transacao = {
            descricao: descricao,
            valor: valor,
            usuarioId: usuarioId,
            tipo: tipo,
            categoriaId: categoriaId
        }

        const data = await criarTransacao(transacao)

        if (!data.identityResult?.succeeded) {
            const erros = data.identityResult?.errors
            const mensagem = erros?.map((e: any) => e.description).join("\n")
            alert("Erro: " + mensagem)
            return
        }

        navigate("/transacoes")
    }

    return (
        <div>
            <h2>Nova Transação</h2>
            <form onSubmit={salvarTransacao}>
                <div>
                    <label>Descrição</label>
                    <input
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <div>
                    <label>Valor</label>
                    <input
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Usuário</label>
                    <select
                        value={usuarioId}
                        onChange={(e) => setUsuarioId(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        {usuarios.map((u: any) => (
                            <option key={u.id} value={u.id}>
                                {u.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        {categorias.map((c: any) => (
                            <option key={c.id} value={c.id}>
                                {c.descricao}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Tipo</label>
                    <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <option value="1">Despesa</option>
                        <option value="2">Receita</option>
                    </select>
                </div>
                <button type="submit">
                    Salvar
                </button>
            </form>
        </div>
    )
}

export default TransacaoCreate