import { Link } from "react-router-dom";

import { FaAddressBook, FaEye, FaEyeSlash } from "react-icons/fa";

import auth from "/auth.svg";
import logo from "/logo.svg";

function RegisterLayout() {
  return (
    <div className="font-[sans-serif]">
        <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols-2 items-center gap-2 max-w-6xl w-full">
                <div className="hidden md:block">
                    <img src={auth} className="w-full h-full max-md:w-4/5 mx-auto block object-contain" alt="Dining Experience" />
                </div>
                <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                    <form className="space-y-4">
                        <div className="mb-8">
                            <div className="flex text-center justify-between items-center">
                            <h3 className="text-gray-800 text-3xl font-extrabold">Sign up</h3>
                            <a href="/">
                                <img src={logo} className="w-12" alt="logo" />
                            </a>
                            </div>
                            <p className="text-gray-500 text-sm mt-4 leading-relaxed">Register your account and explore a world of possibilities. Your journey begins here.</p>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter name" />
                                <FaAddressBook className="w-[18px] h-[18px] absolute right-4" />
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter email" />
                                <FaAddressBook className="w-[18px] h-[18px] absolute right-4" />
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter password" />
                                <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Confirm password" />
                                <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            Register
                            </button>
                        </div>
                    
                        <p className="text-sm mt-4 text-center text-gray-800">Already have an account?
                            <Link to="/auth/login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RegisterLayout