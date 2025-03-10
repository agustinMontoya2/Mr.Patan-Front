"use client";
import { InputDate } from "@/components/input/input-date";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const handleGetUser = async () => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
    router.push(user ? "/perfil" : "/inicio");
  }
  
  useEffect(() => {
    handleGetUser()
  }, [handleGetUser])
  return ( 
    <div className="flex flex-col items-center justify-between h-screen w-screen">
    </div> )
  ;
}
