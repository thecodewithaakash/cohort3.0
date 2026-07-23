import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "../componetns/Icon";
import { nanoid } from "nanoid";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [users,setUsers] = useState([])
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("sm_users") || []),
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  console.log(errors);
  

  const formSubmit = (data) => {
    // console.log(data);
    let user = {
      id: nanoid(),
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: data.name[0],
      joinedAt: new Date().toISOString(),
    };

    const isAlreadyRegistered = users.some((user) => user.email === data.email);
    // console.log(isAlreadyRegistered);

    if (isAlreadyRegistered) {
      alert("User already exists!");
      return;
    }

    let arr = [...users, { ...user }]; // sync code
    setUsers(arr); // aysnc code
    localStorage.setItem("sm_users", JSON.stringify(arr)); // sync code
  };

  return (
    <div>
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-6">
        <div className="w-full max-w-md animate-scale-in">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <div className="w-9 h-9 bg-volt rounded-xl flex items-center justify-center">
              <Icon
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="lucide lucide-zap text-ink fill-black"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </Icon>
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Sky<span className="text-volt">Mart</span>
            </span>
          </div>
          <div className="auth-card">
            <h2 className="font-heading font-bold text-2xl mb-1 text-white">
              Create account
            </h2>
            <p className="text-white/40 text-sm font-body mb-8">
              Join SkyMart and start shopping
            </p>
            <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
              <div className="relative">
                {errors.name && (
                  <div className="bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm px-4 py-3 rounded-xl mb-8 font-body">
                    {errors.name.message}
                  </div>
                )}
                <Icon
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  className="lucide lucide-user absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </Icon>
                <input
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-z-A-Z\s]{3,50}$/,
                      message:'Invalid name!'
                    },
                  })}
                  type="text"
                  placeholder="Full name"
                  className="field pl-10"
                />
              </div>
              <div className="relative">
                {errors.email && (
                  <div className="bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm px-4 py-3 rounded-xl mb-8 font-body">
                    {errors.email.message}
                  </div>
                )}
                <Icon
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  className="lucide lucide-mail absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </Icon>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
                      message:'Invalid Email!'
                    },
                  })}
                  type="email"
                  placeholder="Email address"
                  className="field pl-10"
                />
              </div>
              <div>
                <div className="relative">
                  {errors.password && (
                  <div className="bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm px-4 py-3 rounded-xl mb-8 font-body">
                    {errors.password.message}
                  </div>
                )}
                  <Icon
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    className="lucide lucide-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
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
                  </Icon>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                          message:'Invalid password'
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password (min 6 chars)"
                    className="field pl-10 pr-10"
                  />
                  <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    type="button"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                    fdprocessedid="vr1yz8"
                  >
                    <Icon
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className="lucide lucide-eye"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </Icon>
                  </button>
                </div>
              </div>
              <div className="relative">
                {errors.confirm && (
                  <div className="bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm px-4 py-3 rounded-xl mb-8 font-body">
                    {errors.confirm.message}
                  </div>
                )}
                <Icon
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  className="lucide lucide-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
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
                </Icon>
                <input
                  {...register("confirm", {
                    required: "Confirm password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                        message:"invalid confirm password"
                    },
                  })}
                  type="password"
                  placeholder="Confirm password"
                  className="field pl-10"
                  fdprocessedid="ref6b"
                />
              </div>
              <button
                type="submit"
                className="bg-volt w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-heading font-bold rounded-xl"
                fdprocessedid="nvp9no"
              >
                Create Account
                <Icon
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </Icon>
              </button>
            </form>
            <p className="text-center text-white/30 text-sm font-body mt-6">
              Already have an account?{" "}
              <a
                className="text-volt hover:text-volt-light font-semibold transition-colors"
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

export default Register;
