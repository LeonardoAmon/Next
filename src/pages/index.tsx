import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"

export default function Home() {

  const { 
    cliente,
    clientes,
    novoCliente,
    selecionarCliente,
    salvarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Novo Cliente">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
