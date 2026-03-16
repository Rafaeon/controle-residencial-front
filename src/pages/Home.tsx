import { Link } from "react-router-dom"
//home da aplicação com links para as principais seções
function Home() {
    return (
        <main>
            <div className="page-header">
                <h2>Controle Residencial</h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                Gerencie usuários, categorias e transações do seu controle financeiro.
            </p>
            <div className="home-grid">
                <Link to="/usuarios" className="home-card">
                    <div className="home-card-icon">👤</div>
                    <h3>Usuários</h3>
                    <p>Gerencie os usuários do sistema</p>
                </Link>
                <Link to="/categorias" className="home-card">
                    <div className="home-card-icon">🏷️</div>
                    <h3>Categorias</h3>
                    <p>Organize por tipo de gasto</p>
                </Link>
                <Link to="/transacoes" className="home-card">
                    <div className="home-card-icon">💰</div>
                    <h3>Transações</h3>
                    <p>Acompanhe receitas e despesas</p>
                </Link>
                <Link to="/usuarios/totais" className="home-card">
                    <div className="home-card-icon">📊</div>
                    <h3>Totais</h3>
                    <p>Veja o resumo financeiro</p>
                </Link>
            </div>
        </main>
    )
}

export default Home