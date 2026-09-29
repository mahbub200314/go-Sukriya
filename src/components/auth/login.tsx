
'use client'

import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-card rounded-2xl overflow-hidden shadow-xl border border-border">

        {/* Left Side */}
        <section className="hidden md:flex bg-primary items-center justify-center p-10">

          <div className="text-center text-white max-w-sm">

            <Image
              src="/logo.png"
              width={120}
              height={70}
              alt="Sukriya logo"
              className="mx-auto mb-8 object-contain"
            />

            <h1 className="text-4xl font-bold mb-4">
              Welcome Back!
            </h1>

            <p className="text-white/80 leading-relaxed">
              Login to your account and continue
              shopping with us.
            </p>

          </div>

        </section>


        {/* Right Side */}
        <section className="p-6 sm:p-10 lg:p-14">

          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-8">
            <Image
              src="/logo.png"
              width={100}
              height={60}
              alt="Sukriya logo"
              className="object-contain"
            />
          </div>


          {/* Heading */}
          <div className="mb-8">

            <h2 className="text-3xl sm:text-4xl font-bold">
              Login
            </h2>

            <p className="mt-2 text-muted-foreground text-sm">
              Enter your details to access your account.
            </p>

          </div>


          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>

              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email Address
              </label>

              <div className="relative">

                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 pl-11 pr-4 rounded-lg border border-border bg-background outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />

              </div>

            </div>


            {/* Password */}
            <div>

              <div className="flex justify-between items-center mb-2">

                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative">

                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-12 pl-11 pr-4 rounded-lg border border-border bg-background outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />

              </div>

            </div>


            {/* Remember */}
            <div className="flex items-center gap-2">

              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 accent-primary"
              />

              <label
                htmlFor="remember"
                className="text-sm text-muted-foreground"
              >
                Remember me
              </label>

            </div>


            {/* Login */}
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition"
            >
              Login
            </button>


            {/* Divider */}
            <div className="flex items-center gap-4 py-2">

              <div className="flex-1 h-px bg-border" />

              <span className="text-sm text-muted-foreground">
                OR
              </span>

              <div className="flex-1 h-px bg-border" />

            </div>


            {/* Google */}
            <button
              type="button"
              className="w-full h-12 flex items-center justify-center gap-3 rounded-lg border border-border hover:bg-muted transition font-medium"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

          </form>


          {/* Sign Up */}
          <p className="text-center text-sm text-muted-foreground mt-8">

            Don't have an account?{" "}

            <Link
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign Up
            </Link>

          </p>

        </section>

      </div>

    </main>
  )
}

export default Login

