import { useEffect, useState } from "react"
import { buscarTotaisPorUsuario } from "../../services/usuarioService"

function UsuarioTotais() {
    const [dados, setDados] = useState<any>(null)

    useEffect(() => {
        carregar()
    }, [])

    async function carregar() {
        const data = await buscarTotaisPorUsuario()
        setDados(data)
    }

    return (
        <div>
            <h2>Totais por Pessoa</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Receitas</th>
                        <th>Despesas</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    {dados?.lista?.map((u: any) => (
                        <tr key={u.id}>
                            <td>{u.nome}</td>
                            <td>{u.totalReceitas}</td>
                            <td>{u.totalDespesas}</td>
                            <td>{u.saldo}</td>
                        </tr>
                    ))}
                    {dados && (
                        <tr>
                            <td><strong>Total Geral</strong></td>
                            <td><strong>{dados.totalReceitas}</strong></td>
                            <td><strong>{dados.totalDespesas}</strong></td>
                            <td><strong>{dados.saldo}</strong></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UsuarioTotais