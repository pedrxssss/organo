import Colaborador from "../Colaborador";
import "./Times.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const cssBorda = { borderColor: props.corPrimaria };

  return props.colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={cssBorda}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            imagem={colaborador.imagem}
            cargo={colaborador.cargo}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
