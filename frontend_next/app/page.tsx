import Image from 'next/image'
import { global } from 'styled-jsx/css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* NAVBAR */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icon-logo.Bi0O_rGO_Z1iLfJp.svg"
              width={40}
              height={40}
              alt="Logo StarFlowers"
            />
            <h1 className="text-2xl font-bold text-gray-800">StarFlowers</h1>
          </div>

          {/* Links de navegación */}
          <div className="flex items-center gap-6">
            <a
              href="components/auth/login"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Iniciar Sesión
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Acerca de
            </a>
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <header className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start md:justify-between">
          {/* Texto principal */}
          <div className="gap-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 pt-20 w-130">
              Centro de Control de Power BI para los usuarios dentro de la empresa
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed w-130">
              Nuestro sistema tiene el objetivo de controlar la información que se maneja 
              en la plataforma Power BI. Etiam porta sem malesuada magna mollis euismod. 
              Curabitur blandit tempus porttitor.
            </p>
          </div>

          {/* Imagen de ejemplo */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
            <Image
              src="/assets/KanbanBOX_ekanban_Business_Intelligence_Con_Power_BI_2.png"
              width={600}
              height={400}
              alt="Ejemplo de Dashboard"
              className="rounded-2xl shadow"
            />
          </div>
        </div>
      </header>

      {/* SECCIÓN DE TARJETAS O BLOQUES DE INFORMACIÓN */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 bg-yellow-300 w-120 rounded-xl p-2 justify-center text-center">
            Información sobre Costos y Ventas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Tarjeta 1 */}
            <a href='' className="p-6 bg-gray-100 rounded-2xl shadow h-50 border">
              <h4 className="text-xl font-semibold mb-2">
                Información sobre Costos y Ventas
              </h4>
              <p className="text-gray-700">
                Aquí puedes describir detalles sobre costos y ventas, informes, etc.
              </p>
            </a>

            {/* Tarjeta 2 */}
            <a href='' className="bg-[var(--accent-color-2)] p-6 rounded-2xl shadow h-50 border">
              <h4 className="text-xl font-semibold mb-2">
                Información sobre Costos y Ventas
              </h4>
              <p className="text-gray-700">
                Aquí puedes describir detalles sobre costos y ventas, informes, etc.
              </p>
            </a >

            {/* Tarjeta 3 */}
            <a href='' className="p-6 bg-black text-white rounded-2xl shadow h-50 border">
              <h4 className="text-xl font-semibold mb-2">
                Información sobre Costos y Ventas
              </h4>
              <p>
                Aquí puedes describir detalles sobre costos y ventas, informes, etc.
              </p>
            </a >

            {/* Tarjeta 4 */}
            <a href='' className="p-6 bg-green-50 rounded-2xl shadow h-50 border">
              <h4 className="text-xl font-semibold mb-2">
                Información sobre Costos y Ventas
              </h4>
              <p className="text-gray-800">
                Aquí puedes describir detalles sobre costos y ventas, informes, etc.
              </p>
            </a >
          </div>
        </div>
      </main>

      <footer>
        <div className="max-w-7xl mx-auto px-6 py-10 text-gray-600">
          Todos los derechos reservados © 2019. StarFlowers
        </div>
      </footer>
    </div>
  )
}
