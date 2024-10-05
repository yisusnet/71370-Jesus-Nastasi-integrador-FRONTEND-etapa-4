import useTitulo from '../hooks/useTitulo';
import './Nosotros.scss';

const Nosotros = () => {
  useTitulo('Nosotros')
  return (


<div className="contenedor-main">
    <main className="main-contenido" >
      <header className="nosotros__header">
        <h1 className="nosotros__h1">Sobre nosotros &#128590; &#128588;</h1>
      </header>

      <div className="nosotros__sobre-nosotros">
        <div className="nosotros__h2-p">
          <h2 className="nosotros__h2">Nuestra Historia</h2>

          <p className="nosotros__parrafo">
            La Pizzería Nico fue fundada en 1995 por Juan y María Pérez,
            inspirados por su amor por la auténtica pizza italiana. Desde
            entonces, hemos crecido de un pequeño local familiar a una de las
            pizzerías más queridas de la ciudad.
          </p>
        </div>

        <div className="nosotros__h2-p">
          <h2 className="nosotros__h2">Nuestra Misión y Valores</h2>

          <p className="nosotros__parrafo">
            En Pizzeria nico, nuestra misión es ofrecer pizzas deliciosas
            elaboradas con los ingredientes más frescos y de la más alta
            calidad. Nos enorgullecemos de nuestros valores de calidad, servicio
            al cliente y sostenibilidad.
          </p>
        </div>

        <div className="nosotros__h2-image">
          <h2 className="nosotros__h2">Conoce a Nuestro Equipo</h2>

          <div className="nosotros__team-member">
            <img
              src="/img/juan.webp"
              alt="Juan Pérez, fundador y chef principal"
              className="nosotros__image"
              title="Juan Pérez, fundador y chef principal"
            />

            <p className="nosotros__p-pie-de-foto">
              <strong>Juan Pérez</strong> - Fundador y Chef Principal
            </p>
          </div>

          <div className="nosotros__team-member">
            <img
              src="/img/maria.webp"
              alt="María Pérez, Co-fundadora"
              className="nosotros__image"
              title="maria, Co-fundadora y Gerente "
            />
            <p className="nosotros__p-pie-de-foto">
              <strong>María Pérez</strong> - Co-fundadora y Gerente
            </p>
          </div>
        </div>

        <div className="nosotros__h2-p">
          <h2 className="nosotros__h2">Ingredientes y Proceso</h2>
          <p className="nosotros__parrafo">
            Utilizamos ingredientes frescos y locales para crear nuestras
            pizzas. Nuestro proceso de preparación sigue técnicas tradicionales
            italianas, garantizando una experiencia auténtica en cada bocado.
          </p>
        </div>

        <div className="nosotros__h2-p">
          <h2 className="nosotros__h2">Compromiso con la Comunidad</h2>
          <p className="nosotros__parrafo">
            Nos dedicamos a apoyar a nuestra comunidad local participando en
            eventos y colaborando con organizaciones benéficas. También nos
            esforzamos por ser sostenibles, utilizando empaques reciclables y
            promoviendo prácticas eco-amigables.
          </p>
        </div>

        <div className="nosotros__h2-p">
          <h2 className="nosotros__h2">Testimonios</h2>
          <p className="nosotros__parrafo">
            <span className="nosotros__span">
              &#10025; &#10025; &#10025; &#10025; &#10025;
            </span>
            "La mejor pizza que he probado en mi vida! El servicio es excelente
            y el ambiente es muy acogedor." - Ana G.
          </p>
          <p className="nosotros__parrafo">
            <span className="nosotros__span">
              &#10025; &#10025; &#10025; &#10025; &#10025;
            </span>
            "¡Amo esta pizzería! Siempre usan ingredientes frescos y el sabor es
            increíble." - Carlos M.
          </p>
        </div>

        <div className="nosotros__h2-image">
          <h2 className="nosotros__h2">Galería</h2>

          <div className="nosotros__team-member">
            <img
              src="/img/foto-local-1.webp"
              alt="Pizzero haciendo pizza"
              className="nosotros__image"
              title="Pizzero haciendo pizza"
            />
          </div>

          <div className="nosotros__team-member">
            <img
              src="/img/foto-local-2.webp"
              alt="Comensal comiendo"
              className="nosotros__image"
              title="Comensal comiendo"
            />
          </div>

          <div className="nosotros__team-member">
            <img
              src="/img/foto-local-3.webp"
              alt="Area de nuestro restaurante"
              className="nosotros__image"
              title="Area de nuestro restaurante"
            />
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Nosotros;
