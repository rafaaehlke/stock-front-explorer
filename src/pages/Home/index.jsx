import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import { Container } from "./styles";
import { USER_ROLE } from '../../utils/role'

export function Home() {
  const { user } = useAuth()

  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />
        
         {/* Exibe a seção de Fornecedores apenas para administradores */}
        {[USER_ROLE.ADMIN].includes(user.role) && < Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />} 
        
        {/*  Exibe o relatório de vendas para administradores e clientes */}
        {[USER_ROLE.ADMIN, USER_ROLE.SALE].includes(user.role) && <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />}

      </main>
    </Container >
  )
}