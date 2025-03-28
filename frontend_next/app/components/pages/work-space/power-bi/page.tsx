import Image from 'next/image'

export default function PowerBi() {
  return (
    <div className="flex">
      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col">
        {/* BARRA SUPERIOR */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-end">
          <button className="mr-4 text-gray-700 hover:text-blue-600">Ayuda</button>
          <button className="mr-4 text-gray-700 hover:text-blue-600">Opciones</button>
          <button className="text-gray-700 hover:text-blue-600">Salir</button>
        </header>

        {/* MAIN / GRID DE TARJETAS */}
        <main className="flex-grow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-bold mb-2">Estadística de Costos</h2>
              <div className="flex items-center justify-around mt-4">
                {/* 3 Círculos amarillos */}
                <div className="w-12 h-12 bg-yellow-400 rounded-full" />
                <div className="w-12 h-12 bg-yellow-400 rounded-full" />
                <div className="w-12 h-12 bg-yellow-400 rounded-full" />
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-bold mb-2">Estadística de Peso</h2>
              <div className="w-full h-32 bg-teal-100 flex items-center justify-center">
                {/* Simulación de una línea ascendente */}
                <svg width="80%" height="100%">
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="0"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-bold mb-2">Estadísticas Varios</h2>
              <div className="w-full h-32 bg-black text-white flex items-center justify-center">
                {/* Simulación de barras */}
                <svg width="80%" height="100%">
                  <rect x="10" y="40" width="20" height="60" fill="white" />
                  <rect x="40" y="20" width="20" height="80" fill="white" />
                  <rect x="70" y="60" width="20" height="40" fill="white" />
                  <rect x="100" y="30" width="20" height="70" fill="white" />
                </svg>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-bold mb-2">Estadística de Subastas</h2>
              <div className="w-full h-32 bg-blue-50 flex items-center justify-center">
                {/* Contenido o gráfico de Subastas */}
                <span className="text-gray-600">Gráfico de Subastas</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
