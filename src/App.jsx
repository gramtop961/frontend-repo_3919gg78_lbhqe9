import Header from './components/Header'
import Hero from './components/Hero'
import StoreSearch from './components/StoreSearch'
import LocalFavorites from './components/LocalFavorites'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <StoreSearch />
        <LocalFavorites />
      </main>
      <Footer />
    </div>
  )
}

export default App
