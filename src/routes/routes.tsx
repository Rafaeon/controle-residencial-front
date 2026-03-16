import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import UsuarioList from "../pages/usuarios/UsuarioList"
import UsuarioCreate from "../pages/usuarios/UsuarioCreate"
import UsuarioEdit from "../pages/usuarios/UsuarioEdit"
import CategoriaList from "../pages/categorias/CategoriaList"
import CategoriaCreate from "../pages/categorias/CategoriaCreate"
import TransacaoList from "../pages/transacoes/TransacaoList"
import TransacaoCreate from "../pages/transacoes/TransacaoCreate"

// define todas as rotas da aplicação
function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<UsuarioList />} />
            <Route path="/usuarios/novo" element={<UsuarioCreate />} />
            <Route path="/usuarios/editar/:id" element={<UsuarioEdit />} />
            <Route path="/categorias" element={<CategoriaList />} />
            <Route path="/categorias/create" element={<CategoriaCreate />} />
            <Route path="/transacoes" element={<TransacaoList />} />
            <Route path="/transacoes/create" element={<TransacaoCreate />} />
            

        </Routes>

    )

}

export default AppRoutes
