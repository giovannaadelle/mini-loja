import { useState, useEffect } from 'react'
import { Navbar } from './components/NavBar'
import { ProductGrid } from './components/ProductGrid'


function App() {
 const [isLoading, setIsLoading] = useState(true)

 useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  return () => clearTimeout(timer)
 }, [])

  return (
    <>
    
     <Navbar />
     <main>
      <div className="container">
  <ProductGrid isLoading={isLoading}/>
      </div>
     </main>
    
    </>
  )
}

export default App
