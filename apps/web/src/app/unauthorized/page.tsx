"use client"
import Link from "next/link";
import { useEffect } from "react";

const UnAuthorizedPage = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/'
        }, 3000)
    })
    return <div>Unauthorized, redirecting....</div>;
  };
  
export default UnAuthorizedPage;