import React from "react";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#0d0d0d]">
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/8 p-8 sm:p-12 mb-10">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-16 -right-16 w-80 h-80 bg-volt/8 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-volt/4 rounded-full blur-3xl"></div>
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(200, 244, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(200, 244, 0) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                ></div>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                <div>
                  <p className="text-volt/70 text-sm font-body tracking-widest uppercase mb-3 text-white text-volt">
                    Good evening 👋
                  </p>
                  <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
                    Welcome back,
                    <br />
                    <span className="text-volt">Aakash!</span>
                  </h1>
                  <p className="text-white/40 font-body max-w-md">
                    Discover today's picks — hand-curated products across
                    electronics, fashion, and more.
                  </p>
                  <div className="flex gap-3 mt-6 flex-wrap">
                    <a
                      className="btn-volt flex items-center gap-2"
                      href="/products"
                    >
                      Shop Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                    </a>
                    <a
                      className="btn-ghost flex items-center gap-2"
                      href="/products"
                    >
                      View All Products
                    </a>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col gap-3">
                  <div className="bg-volt/10 border border-volt/20 rounded-2xl px-6 py-4 text-center">
                    <p className="font-heading font-bold text-4xl text-volt">
                      20+
                    </p>
                    <p className="text-white/40 text-xs font-body mt-1">
                      Products Available
                    </p>
                  </div>
                  <div className="bg-white/4 border border-white/8 rounded-2xl px-6 py-4 text-center">
                    <p className="font-heading font-bold text-2xl text-white">
                      Free
                    </p>
                    <p className="text-white/40 text-xs font-body mt-1">
                      Delivery on ₹999+
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">
              <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-volt/10 text-volt">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-package"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                    <path d="M12 22V12"></path>
                    <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                    <path d="m7.5 4.27 9 5.15"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-white">
                    0
                  </p>
                  <p className="text-white/50 text-sm font-body">Cart Items</p>
                  <p className="text-white/25 text-xs font-body mt-0.5">
                    In your bag
                  </p>
                </div>
              </div>
              <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-blue-500/10 text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trending-up"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-white">
                    $0.00
                  </p>
                  <p className="text-white/50 text-sm font-body">Cart Value</p>
                  <p className="text-white/25 text-xs font-body mt-0.5">
                    Ready to checkout
                  </p>
                </div>
              </div>
              <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-star"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-white">
                    5
                  </p>
                  <p className="text-white/50 text-sm font-body">
                    Top Products
                  </p>
                  <p className="text-white/25 text-xs font-body mt-0.5">
                    Highly rated
                  </p>
                </div>
              </div>
              <div className="bg-[#111] border border-white/8 rounded-3xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-purple-500/10 text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle
                      cx="7.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-white">
                    6
                  </p>
                  <p className="text-white/50 text-sm font-body">Categories</p>
                  <p className="text-white/25 text-xs font-body mt-0.5">
                    To explore
                  </p>
                </div>
              </div>
            </div>
            <section className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-heading font-bold text-xl">
                  Shop by Category
                </h2>
                <a
                  className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1"
                  href="/products"
                >
                  View All
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
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                  href="/products?category=electronics"
                >
                  <div className="text-3xl mb-3">💻</div>
                  <p className="font-body font-semibold text-ink/80 text-sm capitalize">
                    electronics
                  </p>
                  <p className="text-ink/50 text-xs mt-1">17 items</p>
                </a>
                <a
                  className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                  href="/products?category=clothing"
                >
                  <div className="text-3xl mb-3">📦</div>
                  <p className="font-body font-semibold text-ink/80 text-sm capitalize">
                    clothing
                  </p>
                  <p className="text-ink/50 text-xs mt-1">2 items</p>
                </a>
                <a
                  className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                  href="/products?category=furniture"
                >
                  <div className="text-3xl mb-3">📦</div>
                  <p className="font-body font-semibold text-ink/80 text-sm capitalize">
                    furniture
                  </p>
                  <p className="text-ink/50 text-xs mt-1">3 items</p>
                </a>
                <a
                  className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                  href="/products?category=home"
                >
                  <div className="text-3xl mb-3">📦</div>
                  <p className="font-body font-semibold text-ink/80 text-sm capitalize">
                    home
                  </p>
                  <p className="text-ink/50 text-xs mt-1">14 items</p>
                </a>
                <a
                  className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                  href="/products?category=sports"
                >
                  <div className="text-3xl mb-3">📦</div>
                  <p className="font-body font-semibold text-ink/80 text-sm capitalize">
                    sports
                  </p>
                  <p className="text-ink/50 text-xs mt-1">8 items</p>
                </a>
                <a
                  className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                  href="/products?category=accessories"
                >
                  <div className="text-3xl mb-3">📦</div>
                  <p className="font-body font-semibold text-ink/80 text-sm capitalize">
                    accessories
                  </p>
                  <p className="text-ink/50 text-xs mt-1">6 items</p>
                </a>
              </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              <div className="bg-white border border-white/20 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
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
                      className="lucide lucide-star text-amber-400 fill-amber-400"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    Top Rated
                  </h2>
                  <a
                    className="text-volt text-xs hover:text-volt-light flex items-center gap-1"
                    href="/products?sort=rating"
                  >
                    See all
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
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
                  </a>
                </div>
                <div className="space-y-2">
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/6"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400"
                        alt="Professional Camera Lens"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Professional Camera Lens
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $599.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="xmk8bd"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/4"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
                        alt="Ergonomic Office Chair"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Ergonomic Office Chair
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $199.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="kj9gf5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/13"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"
                        alt="4K Ultra HD Monitor"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        4K Ultra HD Monitor
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $349.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="pemvbl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/9"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
                        alt="Aromatherapy Essential Oil Diffuser"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Aromatherapy Essential Oil Diffuser
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $49.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="h511l2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/14"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
                        alt="Mechanical Keyboard"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Mechanical Keyboard
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $149.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="7epwy"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
              <div className="bg-white border border-white/20 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-ink">
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
                      className="lucide lucide-zap text-volt fill-volt"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    New Arrivals
                  </h2>
                  <a
                    className="text-volt text-xs hover:text-volt-light flex items-center gap-1"
                    href="/products"
                  >
                    See all
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
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
                  </a>
                </div>
                <div className="space-y-2">
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/1"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                        alt="Wireless Bluetooth Headphones"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Wireless Bluetooth Headphones
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $99.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="aq41qg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/2"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
                        alt="Smart Watch Series 5"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Smart Watch Series 5
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $299.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="b7msh8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/3"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
                        alt="Comfortable Cotton T-Shirt"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Comfortable Cotton T-Shirt
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $24.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="sbmw6x"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/4"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
                        alt="Ergonomic Office Chair"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Ergonomic Office Chair
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $199.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="1slddj"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                  <a
                    className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-volt/30 rounded-2xl transition-all duration-200"
                    href="/products/5"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"
                        alt="Stainless Steel Water Bottle"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/80 text-xs font-body clamp-1">
                        Stainless Steel Water Bottle
                      </p>
                      <p className="text-volt font-heading font-bold text-sm mt-0.5">
                        $34.99
                      </p>
                    </div>
                    <button
                      className="shrink-0 w-7 h-7 bg-volt/10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all"
                      fdprocessedid="fm6rn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-zap text-volt"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                <div>
                  <p className="font-body font-semibold text-white/80 text-sm">
                    Fast Delivery
                  </p>
                  <p className="text-white/30 text-xs">
                    Same-day on select items
                  </p>
                </div>
              </div>
              <div className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-shield text-blue-400"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <div>
                  <p className="font-body font-semibold text-white/80 text-sm">
                    Secure Payments
                  </p>
                  <p className="text-white/30 text-xs">
                    100% encrypted checkout
                  </p>
                </div>
              </div>
              <div className="bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-tag text-green-400"
                >
                  <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </svg>
                <div>
                  <p className="font-body font-semibold text-white/80 text-sm">
                    Best Prices
                  </p>
                  <p className="text-white/30 text-xs">Price-match guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t border-white/8 py-8 text-center mt-20">
          <p className="font-heading text-volt text-xl mb-1">SkyMart</p>
          <p className="text-white/30 text-xs">
            © 2025 SkyMart • Built with React + Redux + TanStack Query
          </p>
        </footer>
      </div>
      <div
        data-rht-toaster=""
        style={{
          position: "fixed",
          zIndex: 9999,
          inset: "16px",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};

export default Home;
