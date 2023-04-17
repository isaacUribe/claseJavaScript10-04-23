
import React from 'react'
import Header from './Header'

const Formulario = () => {
  return (
    <div>
        <Header/>
        <form>
            <section>
                <label htmlFor='nombre'>Nombre</label>
                <input itemID='nombre' type='text' id='nombre'/>
            </section>
            <section>
                <label htmlFor='apellido'>Apellido</label>
                <input itemID='apellido' type='text' id='apellido'/>
            </section>
            <section>
                <label htmlFor='documento'>Documento</label>
                <input itemID='apellido' type='text' id='documento'/>
            </section>
        </form>
    </div>

  )
}

export default Formulario