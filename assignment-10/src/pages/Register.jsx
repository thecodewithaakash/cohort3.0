import React from "react";

const Register = () => {
  return (
    <div>
      <aside
        class="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#111] border-l border-white/10
      z-50 flex flex-col transition-transform duration-300 ease-out
      translate-x-full"
      >
        <div class="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div class="flex items-center gap-3">
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
              class="lucide lucide-shopping-bag text-volt"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h2 class="font-heading font-bold text-lg">Cart</h2>
          </div>
          <button class="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white">
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
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          <div class="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
            <div class="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-package-open text-white/20"
              >
                <path d="M12 22v-9"></path>
                <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path>
                <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path>
                <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-heading font-semibold text-white/70 text-lg">
                Cart is empty
              </p>
              <p class="text-white/30 text-sm mt-1">Go shop something cool!</p>
            </div>
            <button class="btn-volt mt-2">Browse Products</button>
          </div>
        </div>
      </aside>
      <div class="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-6">
        <div class="w-full max-w-md animate-scale-in">
          <div class="flex items-center gap-2 mb-8 justify-center">
            <div class="w-9 h-9 bg-volt rounded-xl flex items-center justify-center">
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
                class="lucide lucide-zap text-ink fill-ink"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <span class="font-heading font-bold text-xl text-white">
              Sky<span class="text-volt">Mart</span>
            </span>
          </div>
          <div class="auth-card">
            <h2 class="font-heading font-bold text-2xl mb-1 text-white">Create account</h2>
            <p class="text-white/40 text-sm font-body mb-8">
              Join SkyMart and start shopping
            </p>
            <form class="space-y-4">
              <div class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  class="field pl-10"
                  value=""
                  fdprocessedid="1fmddk"
                />
              </div>
              <div class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  class="field pl-10"
                  value=""
                  fdprocessedid="3qldp"
                />
              </div>
              <div>
                <div class="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password (min 6 chars)"
                    class="field pl-10 pr-10"
                    value=""
                    fdprocessedid="aenf8"
                  />
                  <button
                    type="button"
                    class="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                    fdprocessedid="vr1yz8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  class="field pl-10"
                  value=""
                  fdprocessedid="ref6b"
                />
              </div>
              <button
                type="submit"
                class="bg-volt w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-heading font-bold rounded-xl"
                fdprocessedid="nvp9no"
              >
                Create Account
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
                  class="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </form>
            <p class="text-center text-white/30 text-sm font-body mt-6">
              Already have an account?{" "}
              <a
                class="text-volt hover:text-volt-light font-semibold transition-colors"
                href="/login"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        data-rht-toaster=""
        style={{position: 'fixed', zIndex: 9999,inset: '16px', pointerEvents: "none"}}
      ></div>
    </div>
  );
};

export default Register;
