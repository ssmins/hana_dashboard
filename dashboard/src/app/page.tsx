'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push("/home") // home
  })

  return (
    <div className="splash">
      
    </div>
  );
}
