"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaHome } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const NotFound404 = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Lottie Animation */}
            <div className="w-full max-w-4xl mx-auto h-50vh">
                <DotLottieReact src="/Page Not Found 404.lottie" loop autoplay className="w-full h-full" />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
                <button onClick={() => router.push("/")} className="px-4 py-2 bg-[#fc8e53] rounded-lg hover:bg-accent transition flex items-center gap-2 cursor-pointer">
                    <FaHome />
                    Go Home
                </button>
                <button onClick={() => router.back()} className="px-6 py-2 bg-[#8550fc] text-white rounded-lg hover:bg-[#8550fc]/80 transition flex items-center gap-2 cursor-pointer">
                    <IoMdArrowRoundBack /> Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound404;
