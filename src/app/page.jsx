"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // console.log(router);
  const handlebtn = () => {
    const password = prompt("Enter your password");
    if(password === "1234"){
      router.push("/dashboard");
    }else{
      alert("Wrong password");
    }
  }

  return (
    <div className="text-center space-y-2 bg-linear-to-bl from-sky-300 to-sky-600 p-4 rounded-lg">
      <h2 className="text-3xl font-bold">Welcome to Dev-Story</h2>
      <button onClick={handlebtn} className="px-4 py-2 rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-all duration-1000 hover:scale-110">Share Story</button>
    </div>
  );
}
