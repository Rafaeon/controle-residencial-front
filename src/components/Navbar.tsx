import { Link } from "react-router-dom"
// componente de navegação com links para as principais seções da aplicação
function Navbar() {

    return (

        <nav>

            <span className="nav-brand">Controle</span>
            <Link to="/"><button>Home</button></Link>
            <Link to="/usuarios"><button>Usuários</button></Link>
            <Link to="/categorias"><button>Categorias</button></Link>
            <Link to="/transacoes"><button>Transações</button></Link>
            <Link to="/usuarios/totais"><button>Totais</button></Link>


        </nav>

    )

}

export default Navbar
