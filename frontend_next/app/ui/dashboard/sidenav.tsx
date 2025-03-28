import NavLinks from "./nav-links";
import Image from "next/image";

export default function SideNav() {
  return (
    <aside className="w-64 bg-white shadow p-4 flex flex-col h-full">
      {/* Encabezado (Logo y Nombre) */}
      <div className="flex items-center mb-4">
        <Image
            src="/assets/icon-logo.Bi0O_rGO_Z1iLfJp.svg"
            width={40}
            height={40}
            alt="Logo StarFlowers"
        />
        <h2 className="text-xl font-bold ml-2">StarFlowers</h2>
      </div>

      {/* Buscador */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full px-3 py-2 border border-gray-300 rounded 
                     focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Sección de Menú Principal */}
      <nav className="flex-grow">
        <h3 className="text-gray-500 text-sm mb-2">MENÚ PRINCIPAL</h3>
        <NavLinks />
      </nav>

      {/* Botón Sign Out al final */}
      <div>
        <button
          className="w-full flex items-center justify-center gap-2 rounded-md bg-gray-700 p-3 text-sm font-medium text-white
                     hover:bg-gray-500 transition-all duration-200 ease-in-out"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
