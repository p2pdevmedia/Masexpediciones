export const metadata = {
  title: "Guías | Más Expediciones",
};

export default function GuiasPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Equipo de montaña</p>
        <h1>Guías</h1>
        <p>
          Más Expediciones está conformada por dos guías de San Martín de los Andes y uno de Buenos
          Aires. Los perfiles se pueden ampliar cuando estén las fotos y biografías restantes.
        </p>
      </section>

      <section className="guides">
        <article className="guide-profile guide-profile--featured">
          <img src="/images/ezequiel.jpeg" alt="Ezequiel Caporaletti" />
          <div>
            <p className="eyebrow">Guía de cabecera</p>
            <h2>Ezequiel Caporaletti</h2>
            <p>
              Perfil inicial creado con la imagen entregada. Se puede completar con matrícula,
              experiencia, especialidades y datos de contacto cuando estén disponibles.
            </p>
          </div>
        </article>
        <article className="guide-profile">
          <div className="guide-placeholder">RC</div>
          <div>
            <p className="eyebrow">Guía de cabecera</p>
            <h2>Ricardo Calderón</h2>
            <p>
              Perfil reservado para completar con foto, biografía y credenciales cuando se cargue
              el material.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
