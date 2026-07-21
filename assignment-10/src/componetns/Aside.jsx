import React from "react";

const Aside = () => {
  return (
    <div>
      <aside
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#111] border-l border-white/10
   z-50 flex flex-col transition-transform duration-300 ease-out
   translate-x-0 animate-slide-in"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shopping-bag text-volt"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h2 className="font-heading font-bold text-lg  text-white">Cart</h2>
            <span className="badge bg-volt/15 text-volt text-xs rounded-xl p-2">2 items</span>
          </div>
          <button
            className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white"
            fdprocessedid="05c9u8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          <div className="flex gap-4 p-3 bg-white/4 border border-white rounded-2xl animate-fade-in">
            <div className="w-18 h-18 w-[72px] h-[72px] bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
                alt="Comfortable Cotton T-Shirt"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/80 font-body clamp-2 leading-snug">
                Comfortable Cotton T-Shirt
              </p>
              <p className="text-volt font-heading font-bold text-base mt-1">
                $24.99
              </p>
              <p className="text-white/30 text-xs">$24.99 each</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                  fdprocessedid="wmt1fn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-minus text-white"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <span className="text-sm font-bold font-body w-5 text-center">
                  1
                </span>
                <button
                  className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                  fdprocessedid="4s5d5t"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-plus text-white"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
                <button
                  className="ml-auto text-red-400/60 hover:text-red-400 transition-colors"
                  fdprocessedid="gw7anph"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash2"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 p-3 bg-white/4 border border-white rounded-2xl animate-fade-in">
            <div className="w-18 h-18 w-[72px] h-[72px] bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
                alt="Ergonomic Office Chair"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/80 font-body clamp-2 leading-snug">
                Ergonomic Office Chair
              </p>
              <p className="text-volt font-heading font-bold text-base mt-1">
                $199.99
              </p>
              <p className="text-white/30 text-xs">$199.99 each</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                  fdprocessedid="2t6c01u"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-minus text-white"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <span className="text-sm font-bold font-body w-5 text-center">
                  1
                </span>
                <button
                  className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                  fdprocessedid="pe7ob"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-plus text-white"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
                <button
                  className="ml-auto text-red-400/60 hover:text-red-400 transition-colors"
                  fdprocessedid="o73j93"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash2"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 border-t border-white/8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm font-body">Total</span>
            <span className="font-heading font-bold text-2xl text-white">
              $224.98
            </span>
          </div>
          <button
            className="w-full btn-volt flex items-center justify-center gap-2 py-3.5 text-base font-heading font-bold"
            fdprocessedid="7jrp3k"
          >
            Checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button
            className="w-full text-center text-xs text-white/25 hover:text-red-400 transition-colors py-1"
            fdprocessedid="a86s7k"
          >
            Clear cart
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
