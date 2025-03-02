import { useState } from 'react';
import { motion } from 'framer-motion';
import Authentication from "./authorization";
import { pic } from './assets';

export default function Signup() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="h-screen flex">
            <div className="relative flex-1 flex justify-end items-center">
                <motion.div
                    key={isLogin ? "login" : "signup"}
                    initial={{ x: isLogin ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: isLogin ? -100 : 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full max-w-md"
                >
                    <Authentication action={isLogin ? 'Login' : 'Signup'} />
                </motion.div>
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-200">
                <img src={pic} alt="Signup Illustration" className="max-w-md" />
            </div>

        </div>
    );
}
