import { useState } from "react"
import { criarCategoria } from "../../services/categoriaService"
import { useNavigate } from "react-router-dom"
// página para criar uma nova categoria, com formulário para descrição e finalidade, e chamada para a api de criação
function CategoriaCreate() {
    const navigate = useNavigate()
    const [descricao, setDescricao] = useState("")
    const [finalidade, setFinalidade] = useState(1)

    async function salvarCategoria(e: any) {
        e.preventDefault()
        const categoria = {
            descricao: descricao,
            finalidade: Number(finalidade)
        }

        const data = await criarCategoria(categoria)

        if (!data.identityResult?.succeeded) {
            const erros = data.identityResult?.errors
            const mensagem = erros?.map((e: any) => e.description).join("\n")
            alert("Erro: " + mensagem)
            return
        }

        navigate("/categorias")
    }

    return (

        <div>

            <h2>Nova Categoria</h2>

            <form onSubmit={salvarCategoria}>

                <div>
                    <label>Descrição</label>
                    <input
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>

                <div>
                    <label>Finalidade</label>

                    <select
                        value={finalidade}
                        onChange={(e) => setFinalidade(Number(e.target.value))}
                    >

                        <option value={1}>Despesa</option>
                        <option value={2}>Receita</option>
                        <option value={3}>Ambas</option>

                    </select>

                </div>

                <button type="submit">
                    Salvar
                </button>

            </form>

        </div>

    )
}

export default CategoriaCreate
