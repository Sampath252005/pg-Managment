import Image from "next/image";

export default function Login() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-8">

      {/* Background Image */}
      <Image
        src="https://www.payingguest.directory/images/payingguest9.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
        unoptimized
      />

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/30 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center  text-black">
          Get Started Now
        </h2>

        <p className=" mb-6 text-center text-sm sm:text-base  text-black">
          Enter your credentials to access your account
        </p>

        {/* Social Login */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button className="flex-1 border rounded-lg py-2 text-sm hover:bg-white/60 transition  text-black">
            Log in with Google
          </button>
          <button className="flex-1 border rounded-lg py-2 text-sm hover:bg-white/60 transition  text-black">
            Log in with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-gray-600 text-sm">or</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Form */}
        <form className="space-y-4">

          <div>
            <label className="text-sm font-medium text-black">Name</label>
            <input
              type="text"
              placeholder="Rafiqur Rahman"
              className="w-full mt-1 p-3 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black">Email address</label>
            <input
              type="email"
              placeholder="rafiqur51@company.com"
              className="w-full mt-1 p-3 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label className="text-sm font-medium text-black">Password</label>
              <button type="button" className="text-sm text-blue-700">
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="min 8 chars"
              className="w-full mt-1 p-3 border rounded-lg bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-sm  text-black">
            <input type="checkbox" />
            <span>I agree to the Terms & Privacy</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6  text-black">
          Have an account? <span className="text-blue-700 cursor-pointer">Sign in</span>
        </p>

      </div>
    </main>
  );
}