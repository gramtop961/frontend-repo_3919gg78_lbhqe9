import { ShoppingBag, User, Store, SunMoon } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark')
    }
  }

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-yellow-400 text-slate-900">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">Speedy Pick</span>
            <span className="text-[11px] -mt-1 text-slate-500">Pick it Fast, Live Easy</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#stores" className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">Stores</a>
          <a href="#features" className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">Features</a>
          <a href="#how" className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">How it works</a>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
            <SunMoon className="w-4 h-4" />
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
            <Store className="w-4 h-4" />
            List your store
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 dark:bg-yellow-400 text-white dark:text-slate-900 px-3 py-1.5 text-sm font-semibold hover:opacity-90">
            <User className="w-4 h-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
