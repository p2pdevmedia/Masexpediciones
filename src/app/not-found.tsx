import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>La salida no está cargada</h1>
      <p>Podés volver al listado de salidas disponibles.</p>
      <Link className="button button--primary" href="/salidas" prefetch={true}>
        Ver salidas
      </Link>
    </main>
  );
}
