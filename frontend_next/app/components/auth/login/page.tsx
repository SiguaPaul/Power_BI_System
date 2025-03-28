import Image from 'next/image'

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          {/* Logo */}
          <Image
            src="/assets/icon-logo.Bi0O_rGO_Z1iLfJp.svg"
            width={40}
            height={40}
            alt="StarFlowers Logo"
          />
          <h1 className="text-2xl font-bold ml-2"><a href="/">StarFlowers</a></h1>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow flex flex-col md:flex-row h-150">
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
            <p className="text-gray-500 mb-6">
              Por favor ingrese sus credenciales
            </p>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="username"
                >
                  Nombre de Usuario
                </label>
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-yellow-400"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Ingrese su usuario"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-yellow-400"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                />
              </div>

              <a href="">
                <button
                    type="submit"
                    className="bg-yellow-300 text-white w-full py-2 rounded hover:bg-yellow-400 transition-colors cursor-pointer"
                >
                    Ingresar
              </button>
              </a>
            </form>
          </div>

          {/* COLUMNA DERECHA: IMAGEN */}
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <Image
              src="/assets/working.B14Oj-uA_ZzsSsx.webp"
              alt="Imagen de flores"
              fill
              className="object-cover rounded-b-lg md:rounded-r-lg md:rounded-b-none"
              // fill => en Next 13+ (adjust as needed)
            />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 py-6 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-4">StarFlowers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Repite o ajusta según tus necesidades */}
            <div>
              <h3 className="font-semibold mb-2">More Info</h3>
              <ul className="space-y-1">
                <li>More Info</li>
                <li>More Info</li>
                <li>More Info</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">More Info</h3>
              <ul className="space-y-1">
                <li>More Info</li>
                <li>More Info</li>
                <li>More Info</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">More Info</h3>
              <ul className="space-y-1">
                <li>More Info</li>
                <li>More Info</li>
                <li>More Info</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">More Info</h3>
              <ul className="space-y-1">
                <li>More Info</li>
                <li>More Info</li>
                <li>More Info</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
