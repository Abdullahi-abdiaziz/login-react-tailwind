import React from "react";
import { MdLockOutline } from "react-icons/md";
import {

    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaRegEnvelope
    
} from "react-icons/fa";

export default function Signin() {
    return (
        <div className="w-3/5 p-5">
            <div className="text-left font-bold"><span className="text-green-500">Comapany</span>Name</div>
            <div className="py-10">
                <h2 className="text-2xl font-bold text-green-500">Sign in to Account</h2>
                <div className="border-2 border-green-500 w-10 inline-block mb-2 rounded-full"></div>
                <div className="flex justify-center my-2">
                    <a href="#" className="border-2 border-gray-200 p-2 mx-1 rounded-full hover:text-green-500">
                        <FaTwitter />
                    </a>
                    <a href="#" className="border-2 border-gray-200 p-2 mx-1 rounded-full hover:text-green-500">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="border-2 border-gray-200 p-2 mx-1 rounded-full hover:text-green-500">
                        <FaLinkedinIn />
                    </a>
                </div>
                <p className="text-gray-400 my-3">or use your email account</p>
                <form>
                    <div className="flex flex-col items-center mb-3">
                        <div className="bg-gray-100 w-64 p-2 flex items-center">
                            <FaRegEnvelope className="text-gray-400 mr-2" />
                            <input type="email" name="email" placeholder="email" className="bg-transparent outline-none flex-1" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-3">
                        <div className="bg-gray-100 w-64 p-2 flex items-center">
                            <MdLockOutline className="text-gray-400 mr-2" />
                            <input type="password" name="password" placeholder="password" className="bg-transparent outline-none flex-1" />
                        </div>
                    </div>
                </form>
                <div className="flex w-64 mb-5 mx-auto items-center justify-between">
                    <label htmlFor="remember" className="flex items-center text-xs">
                        <input type="checkbox" name="remember" id="remember" className="mr-1"/> Remember me
                    </label>
                    <a href="#" className="text-xs hover:underline hover:text-green-500">Forgot Password</a>
                </div>
                <a href="#" className="border-2 border-green-500 rounded-full px-12 py-3 mt-4 inline-block font-semiboldbold
                                    bg-green-500 hover:bg-white hover:text-green-500">Sign In</a>
            </div>
        </div>
    )
}