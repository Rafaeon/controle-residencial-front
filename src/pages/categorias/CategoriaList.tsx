import { useEffect, useState } from "react"
import { listarCategorias } from "../../services/categoriaService"
import { Link } from "react-router-dom"

// página para listar as categorias, com tabela mostrando descrição e finalidade, e link para criar nova categoria
function CategoriaList() {

    const [categorias, setCategorias] = useState<any[]>([])

    useEffect(() => {
        carregar()
    }, [])

    async function carregar() {

        const data = await listarCategorias()

        setCategorias(data)

    }

    return (

        <div>
            <div className="page-header">
                <h2>Categorias</h2>
                <Link to="/categorias/create"><button className="btn-primary">Nova Categoria</button></Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Finalidade</th>
                    </tr>
                </thead>

                <tbody>

                    {categorias.map((c:any) => (

                        <tr key={c.id}>

                            <td>{c.descricao}</td>
                            <td>{c.finalidade}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}

export default CategoriaList
