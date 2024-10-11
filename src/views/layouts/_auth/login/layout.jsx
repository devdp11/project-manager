import { useState } from 'react';
import { Link } from "react-router-dom";

import { FaAddressBook, FaEye, FaEyeSlash } from "react-icons/fa";

import { UseAuthContext } from '../../../../utils/hooks/UseAuthContext';

import auth from "/auth.svg";
import logo from "/logo.svg";

function LoginLayout() {

  const { login } = UseAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = async (e) => {
      e.preventDefault();
      await login(email, password);
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-2 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form onSubmit={HandleLogin} className="space-y-4">
                <div className="mb-8">
                    <div className="flex text-center justify-between items-center">
                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                    <a href="/">
                        <img src={logo} className="w-12" alt="logo" />
                    </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey continues here.</p>
                </div>

                <div>
                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                    <div className="relative flex items-center">
                      <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter email" />
                      <FaAddressBook className="w-[18px] h-[18px] absolute right-4" />
                    </div>
                </div>
                <div>
                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                    <div className="relative flex items-center">
                      <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter password" />
                      <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center">
                    <input id="remember" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label className="ml-3 block text-sm text-gray-800">
                        Remember me
                    </label>
                    </div>

                    <div className="text-sm">
                    <a href="/" className="text-blue-600 hover:underline font-semibold">
                        Forgot your password?
                    </a>
                    </div>
                </div>

                <div className="mt-4">
                    <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    Log in
                    </button>
                </div>

                <p className="text-sm mt-4 text-center text-gray-800">Don't have an account?
                    <Link to="/auth/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                        Register here
                    </Link>
                </p>
              
            </form>
          </div>
          <div className="hidden md:block">
            <img src={auth} className="w-full h-full max-md:w-4/5 mx-auto block object-contain" alt="Dining Experience" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout