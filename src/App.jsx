import { useState } from 'react'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El conteo es de: {count}
        </button>
        <p>
          Editar el archivo <code>src/App.jsx</code> y guardar para probar HMR
        </p>
      </div>
      <p className="read-the-docs">
        Aplicación creada con Vite y React. Edita el código para ver los cambios reflejados en tiempo real gracias a HMR (Hot Module Replacement). Vite es una herramienta de construcción rápida que optimiza el desarrollo de aplicaciones web modernas. React es una biblioteca de JavaScript para construir interfaces de usuario interactivas. Juntos, ofrecen una experiencia de desarrollo fluida y eficiente.
      </p>

    </>
  )
}
