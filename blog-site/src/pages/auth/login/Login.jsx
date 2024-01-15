import React from "react";

function Login() {
    return (
        <div className="w-full h-screen flex bg-gradient-to-r from-[#191919] to-[#461111] ">
            <div className="w-1/3 m-2 rounded-lg justify-self-end px-20 py-20 m-auto bg-white">
                <div className="text-6xl font-bold text-center p-10 mb-4">
                    Iblog
                </div>
                <h1 className="text-2xl font-semibold mb-10">
                    Login to Continue
                </h1>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block">
                            Your Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 rounded-lg border-2 border-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-lg border-2 border-black"
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
                        <a href="#" className="text-blue-800">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <div className="mx-16 my-12 text-lg text-center rounded-lg p-2 bg-black text-white cursor-pointer uppercase font-semibold">
                    Login
                </div>
                <p className="text-center">
                    Don't have an account yet?{" "}
                    <a href="#" className="font-semibold">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
