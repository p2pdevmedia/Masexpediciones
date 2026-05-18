import Link from "next/link";

const navItems = [
  { href: "/salidas", label: "Salidas" },
  { href: "/guias", label: "Guías" },
  { href: "/documentos", label: "Documentos" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Más Expediciones" prefetch={true}>
        Más Expediciones
      </Link>
      <nav className="nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} prefetch={true}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
