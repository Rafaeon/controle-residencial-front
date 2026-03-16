import { useEffect, useState } from "react"
import { listarTransacoes } from "../../services/transacaoService"
import { Link } from "react-router-dom"
// página para listar as transações, com tabela mostrando descrição, valor e usuário, e link para criar nova transação
function TransacaoList() {

    const [transacoes, setTransacoes] = useState<any[]>([])

    useEffect(()=>{

        carregar()

    },[])

    async function carregar(){

        const data = await listarTransacoes()

        setTransacoes(data)

    }

    return(

        <div>

            <div className="page-header">
                <h2>Transações</h2>
                <Link to="/transacoes/create"><button className="btn-primary">Nova Transação</button></Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Usuário</th>
                    </tr>
                </thead>

                <tbody>

                    {transacoes.map((t:any)=>(

                        <tr key={t.id}>

                            <td>{t.descricao}</td>
                            <td>{t.valor}</td>
                            <td>{t.tipo === "1" ? "Despesa" : "Receita"}</td>
                            <td>{t.usuario?.nome}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}

export default TransacaoList
