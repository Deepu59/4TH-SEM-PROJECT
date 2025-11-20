import React, { useState } from "react";

const Home = () => {
    return (
        // background img
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat font-mono relative 
      bg-[url('https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=2000')]"
        >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <h1 className="text-5xl font-bold text-white drop-shadow-xl">
                    Plan smarter, Work faster.
                </h1>

                <p className="mt-5 text-xl text-white drop-shadow-lg">
                    Your tasks, your time — organized in one place.
                </p>

                {/* getstart button */}
                <div className="mt-10 flex gap-6">
                    <button
                        className="bg-teal-500 px-6 py-3 rounded-md text-white font-semibold shadow
            hover:bg-white hover:text-teal-600 border border-teal-500"
                    >
                        Get started
                    </button>
                    {/* learn more link */}
                    <a
                        href="#"
                        className="text-white font-semibold text-lg hover:underline pt-2"
                    >
                        Learn more →
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Home;