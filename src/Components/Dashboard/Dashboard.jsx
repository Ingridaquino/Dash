import { Icon } from '@iconify/react';

export default function Dashboard() {
  const dashboard = [
    {
      id: 1,
      icone: '',
      porcentagem: "+30%",
      number: "26",
      tipo: "Pacientes Ativos"
    },
    {
      id: 2,
      icone: '',
      porcentagem: "-10%",
      number: "306",
      tipo: "Testes Realizados"
    },
    {
      id: 3,
      icone: '',
      porcentagem: "+30%",
      number: "139",
      tipo: "Testes concluídos"
    },
    {
      id: 4,
      icone: '',
      porcentagem: "-3%",
      number: "11",
      tipo: "Testes Cancelados"
    },
  ];
  return (
    <div className="container">
      <p>informações gerais</p>
      <div>
        {dashboard.map((dash) => (
          <div key={dash.id} className="dash">
            <div>
              <div>{dash.icone}</div>
              <div>{dash.porcentagem}</div>
            </div>
            <div>
              <p>{dash.number}</p>
              <p>{dash.tipo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
