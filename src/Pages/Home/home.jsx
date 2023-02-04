import "./home.css";
import { Icon } from "@iconify/react";
import Historico from "../../Components/Historico/Historico";
import Busca from "./busca/busca";

export default function home() {
  return (
    <div className="container-home">
      <div className="grid">
        <div className="header-logo">
          <header>
            <img src="./src/assets/Group179.svg" alt="" />
          </header>
          <div className="container-menu">
            <div className="options">
              <button className="icones-menu">
                <Icon
                  icon="pepicons-pop:house"
                  width="25"
                  height="25"
                  className="icones"
                />
                Dashboard
              </button>
            </div>
            <div className="options">
              <button className="icones-menu">   
              <Icon
                  icon="mdi:archive-arrow-down-outline"
                  width="25"
                  height="25"
                  className="icones"
                />{" "}
                Pacientes
              </button>
            </div>
            <div className="options">
              <button className="icones-menu">
                <Icon
                  icon="mdi:archive-arrow-down-outline"
                  width="25"
                  height="25"
                  className="icones"
                />
                Testes
              </button>
            </div>
            <div className="options">
              <button className="icones-menu">
                <Icon
                  icon="mdi:archive-arrow-down-outline"
                  width="25"
                  height="25"
                  className="icones"
                />
                Configurações
              </button>
            </div>
          </div>
        </div>
        <div className="container-dash-completo">
          <div>
            <Busca />
            <div className="container-child">
               <Historico />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
