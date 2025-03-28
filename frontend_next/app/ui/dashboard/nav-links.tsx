// NavLinks.js
import Link from "next/link";

const links = [
  { name: 'Power BI', href: '/components/pages/work-space/power-bi' },
  { name: 'Unosof', href: '/components/pages/work-space/unosof' },
  { name: 'Fresh Portal', href: '/components/pages/work-space/freshportal' },
];

export default function NavLinks() {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
