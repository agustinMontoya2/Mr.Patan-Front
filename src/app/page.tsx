"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/inicio");
  }, [])
  return (
<div className="flex flex-col items-center justify-between h-screen w-screen">

</div>
  );
}
