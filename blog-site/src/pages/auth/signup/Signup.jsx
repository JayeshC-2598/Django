import React from "react";

function SignUp() {
    return (
        <div className="w-full h-screen flex bg-gradient-to-r from-[#191919] to-[#461111] ">
            <div className="w-1/3 m-2 rounded-lg justify-self-end bg-white px-20 py-10 m-auto my-10">
                <div className="text-5xl font-bold text-center p-10 mb-4">
                    Iblog
                </div>
                <h1 className="text-2xl font-semibold mb-10">
                    SignUp to Continue
                </h1>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block">
                            Full Name
                        </label>
                        <input
                            type="name"
                            className="w-full p-3 rounded-lg border-2 border-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block">
                            Your Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 rounded-lg border-2 border-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-lg border-2 border-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-lg border-2 border-black"
                            required
                        />
                    </div>
                    <div className="flex items-start justify-between mx-2">
                        <div className="flex gap-4">
                            <input
                                type="checkbox"
                                className="w-4 h-4 self-center cursor-pointer"
                            />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                    </div>
                </form>
                <div className="mx-16 my-12 text-lg text-center rounded-lg p-2 bg-black text-white uppercase font-semibold">
                    Sign Up
                </div>
            </div>
        </div>
    );
}

export default SignUp;
