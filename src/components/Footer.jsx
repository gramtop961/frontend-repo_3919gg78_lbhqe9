export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-slate-900">Speedy Pick</h3>
            <p className="mt-2 text-slate-600">Local stores, lightning fast. Pickup or doorstep delivery in minutes.</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Company</h4>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a className="hover:text-slate-900" href="#">About</a></li>
              <li><a className="hover:text-slate-900" href="#">Careers</a></li>
              <li><a className="hover:text-slate-900" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Support</h4>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a className="hover:text-slate-900" href="#">Help center</a></li>
              <li><a className="hover:text-slate-900" href="#">Terms</a></li>
              <li><a className="hover:text-slate-900" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Speedy Pick. All rights reserved.</p>
      </div>
    </footer>
  )
}
