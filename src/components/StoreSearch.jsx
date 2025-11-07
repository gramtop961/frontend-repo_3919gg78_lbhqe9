import { useState } from 'react'
import { Search, MapPin, ShoppingCart } from 'lucide-react'

const mockStores = [
  { id: 1, name: 'FreshMart', distance: '0.8 km', rating: 4.6, items: ['Milk', 'Bread', 'Eggs'] },
  { id: 2, name: 'GreenGrocer', distance: '1.2 km', rating: 4.4, items: ['Apples', 'Spinach', 'Bananas'] },
  { id: 3, name: 'Daily Needs', distance: '1.9 km', rating: 4.2, items: ['Rice', 'Oil', 'Sugar'] },
]

export default function StoreSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(mockStores)

  const onSearch = (e) => {
    e.preventDefault()
    const q = query.toLowerCase()
    setResults(
      mockStores.filter(
        (s) => s.name.toLowerCase().includes(q) || s.items.some((i) => i.toLowerCase().includes(q))
      )
    )
  }

  return (
    <section id="stores" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="md:w-2/5">
            <h2 className="text-2xl font-bold text-slate-900">Find nearby stores</h2>
            <p className="mt-2 text-slate-600">
              Search products and we’ll match you with the closest stores. Pickup in minutes or choose delivery.
            </p>

            <form onSubmit={onSearch} className="mt-6 relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-28 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Search milk, bread, fruits..."
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:brightness-95">
                Search
              </button>
            </form>
          </div>

          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {results.map((store) => (
              <div key={store.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{store.name}</h3>
                  <span className="text-xs text-slate-500">⭐ {store.rating}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" /> {store.distance} away
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {store.items.map((item) => (
                    <span key={item} className="text-xs rounded-full bg-slate-100 text-slate-700 px-2 py-1">{item}</span>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center gap-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
                  <ShoppingCart className="w-4 h-4" /> Start order
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
