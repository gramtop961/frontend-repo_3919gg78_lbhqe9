import { Star } from 'lucide-react'

const favorites = [
  { id: 1, name: 'Farm Fresh Eggs (12)', price: '₹89', store: 'FreshMart', rating: 4.8 },
  { id: 2, name: 'Organic Bananas (1kg)', price: '₹69', store: 'GreenGrocer', rating: 4.7 },
  { id: 3, name: 'Whole Wheat Bread', price: '₹45', store: 'Daily Needs', rating: 4.5 },
  { id: 4, name: 'Amul Cow Milk (1L)', price: '₹64', store: 'Neighborhood Mart', rating: 4.6 },
]

export default function LocalFavorites() {
  return (
    <section className="py-12" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Local favorites near you</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">View all</a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((item) => (
            <div key={item.id} className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="h-28 w-full rounded-md bg-gradient-to-br from-yellow-100 to-blue-100 flex items-center justify-center">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-slate-900 leading-tight">{item.name}</p>
                <p className="text-sm text-slate-500">{item.store}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-slate-900">{item.price}</span>
                  <span className="text-xs text-slate-500 inline-flex items-center gap-1"><Star className="w-3.5 h-3.5 text-yellow-500"/> {item.rating}</span>
                </div>
                <button className="mt-3 w-full rounded-md bg-slate-900 text-white py-2 text-sm font-semibold hover:opacity-90">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
