import { Rocket, MapPin, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-blue-100 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
              <Star className="w-3.5 h-3.5 text-yellow-500" />
              Trusted by 500+ local stores
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Local stores, lightning fast.
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Pick up in minutes or get it at your door. Discover nearby supermarkets, compare prices, and book the fastest pickup slot.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow-400 text-slate-900 px-5 py-3 font-semibold hover:brightness-95">
                <Rocket className="w-4 h-4" />
                Start your order
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">
                Explore nearby stores
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <p className="mt-2 font-semibold text-slate-900">Live location match</p>
                <p className="text-slate-600">Find the closest store with your items</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <Clock className="w-4 h-4 text-green-600" />
                <p className="mt-2 font-semibold text-slate-900">Speedy Slot</p>
                <p className="text-slate-600">Smart time slots based on queue</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <Star className="w-4 h-4 text-yellow-500" />
                <p className="mt-2 font-semibold text-slate-900">Local favorites</p>
                <p className="text-slate-600">Top-rated items near you</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-white shadow-sm p-4">
              <div className="h-full w-full rounded-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-yellow-200 via-white to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl">⚡️</p>
                  <p className="mt-2 text-slate-700 font-medium">Speedy Pick</p>
                  <p className="text-xs text-slate-500">Demo UI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
