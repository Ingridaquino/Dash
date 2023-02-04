import { Icon } from "@iconify/react";
import "./busca.css";

export default function Busca() {
  return (
    <div>
      <header>
        <nav>
          <div className="navbar">
            <div className="busca">
              <Icon
                icon="ic:twotone-search"
                width="30px"
                height="30px"
                className="icon"
              />
              <input placeholder="Buscar..." type="search" />
            </div>
            <div className="container-main">
              <Icon
                icon="material-symbols:settings"
                width="35"
                height="35"
                className="icones"
              />
              <Icon
                icon="mdi:bell-badge"
                width="35"
                height="35"
                className="icones"
              />
              <div className="perfil">
                <p>
                  Olá, <b>Felipe</b>
                </p>
                <Icon
                  icon="material-symbols:account-circle"
                  width="35"
                  height="35"
                  className="icones"
                />
              </div>
              <Icon
                icon="gg:menu-grid-r"
                width="35"
                height="35"
                className="icones"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
