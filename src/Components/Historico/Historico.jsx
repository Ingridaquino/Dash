import Dashboard from "../Dashboard/Dashboard";
import "./Historico.css";

export default function Historico() {
  const historico = [
    {
      id: 1,
      imagem: <img src=".//src/assets/Rectangle105.png" />,
      nome: "Renata Augusto Ferreira",
      teste: "TDAH CAB ADHD",
      data: "20/10/2023",
    },
    {
      id: 2,
      imagem: <img src=".//src/assets/Rectangle105.png" />,
      nome: "Renata Augusto Ferreira",
      teste: "Autismo",
      data: "20/09/2023",
    },
    {
      id: 3,
      imagem: <img src=".//src/assets/Rectangle105.png" />,
      nome: "Renata Augusto Ferreira",
      teste: "TDAH CAB ADHD",
      data: "20/10/2023",
    },
    {
      id: 4,
      imagem: <img src=".//src/assets/Rectangle105.png" />,
      nome: "Renata Augusto Ferreira",
      teste: "Autismo",
      data: "20/09/2023",
    },
  ];

  return (
    <>
      <div className="container-historico">
        <div>
          <div className="rosa">
            <p>Historico de Atendimentos</p>
            <button className="botao">VER TODOS</button>
          </div>
          <div className="lista-hist">
           <div className="hist-div">
              {historico.map((hist) => (
                <div className="hist">
                  <div key={hist.id}>
                    <div className="img-hist">{hist.imagem}</div>
                    <div className="center">
                      <div className="font">
                        <b>{hist.nome}</b>
                      </div>
                      <div>
                        <p>TESTE REALIZADO</p>
                      </div>
                      <div className="font-test">{hist.teste}</div>
                      <div>
                        <p>REALIZADO EM: </p>
                      </div>
                      <div className="font-test">{hist.data}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="center-realizado">
          <div className="titulo-realizado">
            <p>Teste Mais Realizado</p>
          </div>
          <div className="box-branco">
            <div className="container-realizado">
              <div className="center-img">
                <img src="./src/assets/Vector.png" alt="" />
              </div>
              <div className="text">
                <p>Autismo</p>
                <p>LICENÇAS DISPONÍVEIS</p>
                </div>
              <div className="format-test">
                <div>
                  <p>13</p>
                </div>
                <div>
                  <button className="botao">COMPRAR MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
