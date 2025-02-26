import React from "react";

import { Services } from "@/components/services/services";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Login } from "@/components/login/login";


const Inicio: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-between h-screen w-screen">
            <Navbar />
            <div className="flex flex-row items-center justify-center sm:justify-between md:w-[80%] w-[90%] h-full">
            <Services />
            <Login />
            </div>
            <Footer />
        </div>
    );
}

export default Inicio