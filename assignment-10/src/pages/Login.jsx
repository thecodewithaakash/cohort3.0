import React, { useState } from "react";
import { ArrowRight, Lock, Mail, Zap, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

/* 
you usually keep **static arrays/objects** (like mock data, constants, config) **above/outside the component** so they don’t get recreated on every render.  
👉 Example:  
```js
// static data kept outside
const roles = ["admin", "user", "guest"];

const Login = () => {
  const storedUsers = JSON.parse(localStorage.getItem("sm_users")) || [];
  // use roles + storedUsers here
};
```
✅ Rule of thumb:  
- **Static constants/data** → outside component.  
- **Dynamic values (like localStorage reads, state, props)** → inside component.
*/

// If you put localStorage.getItem(...) above, it runs on every page load (even if Login isn’t used).
// Inside Login component, Because localStorage is dynamic (runtime data), keeping it inside the component ensures
//  it’s read only when the component mounts/renders, avoiding unnecessary global reads and keeping scope clean.

// const storedUsers = JSON.parse(localStorage.getItem("sm_users"));

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();

  // initialize localStorage
  const storedUsers = JSON.parse(localStorage.getItem("sm_users")) || [];

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // console.log(errors);
  const formSubmit = (data) => {
    const isRegisteredUser = storedUsers.some(
      (user) => user.email === data.email,
    );

    // console.log(isRegisteredUser);
    if (!isRegisteredUser) return;
    const loggedInUser = {
      email: data.email,
      password: data.password,
    };
    sessionStorage.setItem("sm_user", JSON.stringify(loggedInUser));
    alert("logged In Successfully");
    navigate('/')
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex">
      <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-[rgba(255,255,255,0.08)] p-12 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[rgba(200,244,0,0.1)] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[rgba(200,244,0,0.05)] rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-volt rounded-2xl flex items-center justify-center">
            <Zap size={18} className="bg-volt fill-black" />
          </div>
          <span className="font-heading font-bold text-2xl text-white">
            Sky<span className="text-volt">Mart</span>
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center relative z-10">
          <p className="text-volt text-sm font-body font-medium mb-4 tracking-widest uppercase">
            Welcome back
          </p>
          <h1 className="font-heading font-bold text-5xl leading-tight mb-6 text-white">
            Shop the future.
            <br />
            <span className="text-volt">Today.</span>
          </h1>
          <p className="text-[rgba(255,255,255,0.4)] text-base font-body max-w-sm leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { n: "20K+", l: "Products" },
              { n: "50K+", l: "Users" },
              { n: "4.9★", l: "Rating" },
            ].map(({ n, l }) => (
              <div
                key={l}
                className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 text-center"
              >
                <p className="font-heading font-bold text-xl text-volt">{n}</p>
                <p className="text-[rgba(255,255,255,0.4)] text-xs font-body mt-1">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="line bg-white p-[0.3px]"></div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md animate-scale-in">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-9 h-9 bg-volt rounded-xl flex items-center justify-center">
              <Zap size={16} className="text-ink fill-ink" />
            </div>
            <span className="font-heading font-bold text-xl">
              Sky<span className="text-volt">Mart</span>
            </span>
          </div>

          <div className="auth-card">
            <h2 className="font-heading font-bold text-2xl mb-1 text-white">
              Sign in
            </h2>
            <p className="text-[rgba(255,255,255,0.4)] text-sm font-body mb-8">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
              {/* Email */}
              <div className="relative">
                {errors.email && (
                  <div className="bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm px-4 py-3 rounded-xl mb-8 font-body">
                    {errors.email.message}
                  </div>
                )}
                <Mail
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.25)]"
                />
                <input
                  {...register("email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
                      message: "Invalid Email!",
                    },
                  })}
                  type="email"
                  placeholder="Email address"
                  className="field pl-10"
                  autoComplete="email"
                />
              </div>

              {/* Password */}
              <div className="relative">
                {errors.password && (
                  <div className="bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm px-4 py-3 rounded-xl mb-8 font-body">
                    {errors.password.message}
                  </div>
                )}
                <Lock
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.25)]"
                />
                <input
                  {...register("password", {
                    required: "Password is required!",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message: "Invalid Password!",
                    },
                  })}
                  type={showPw ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="field pl-10 pr-10"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.6)] transition-colors"
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-volt w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-heading font-bold rounded-xl cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center gap-2 text-white">
                    {/* <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg> */}
                    <Icon viewBox="0 0 24 24" className="animate-spin w-4 h-4">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </Icon>
                    Signing in...
                  </span>
                ) : (
                  <>
                    Sign in <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-[rgba(255,255,255,0.3)] text-sm font-body mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-volt hover:text-volt-light font-semibold transition-colors"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
