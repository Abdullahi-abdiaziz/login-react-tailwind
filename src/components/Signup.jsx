import React from "react"

export default function Signup() {
    return(
        <div className="w-2/5 bg-green-500 text-white rounded-r-2xl py-36 px-8">
            <h2 className="text-2xl font-semiboldbold">Hello, Friend</h2>
            <div className="border-2 w-10 border-white inline-block -mt-4"></div>
            <p className="mb-2 mt-2">Fill up personal information and start journey with us</p>
            <a href="#" className="border-2 rounded-full px-12 py-3 mt-4 inline-block font-semiboldbold
                                    hover:bg-white hover:text-green-500">Sign Up</a>
        </div>
    )
};