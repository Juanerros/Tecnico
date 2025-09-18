import { useState } from 'react'
import { productsData } from './data'

function App() {
  const [products, setProducts] = useState(productsData)

  const handleFilter = (e) => {
    const valueToFind = e.target.value.toLowerCase().trim()
    
    if (!valueToFind) {
      setProducts(productsData)
      return
    }

    const filteredProducts = productsData.filter((product) => product.name.toLowerCase().includes(valueToFind))

    setProducts(filteredProducts)
  }

  return (
    <>
      <div className='products'>
        <h1>Productos:</h1>
        <input className='buscador' type='search' placeholder='Buscar producto...'
         onChange={handleFilter} />
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.name} className='product'>
              <p>{product.name}</p>
              <p>{product.price}$</p>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </>
  )
}

export default App
