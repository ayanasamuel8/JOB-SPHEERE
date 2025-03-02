import { useState } from 'react';
import { motion } from 'framer-motion';
import Authentication from './authorization.jsx';
import { work_person } from './assets.js';

export default function Login() {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="h-screen flex">
            <div className="flex-1 flex items-center justify-start bg-gray-200">
                <img src={work_person} alt="Login" className="max-w-md" />
            </div>
            <div className="relative flex-1 flex justify-start items-center">
                <motion.div
                    key={isSignup ? "signup" : "login"}
                    initial={{ x: isSignup ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: isSignup ? 100 : -100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full max-w-md"
                >
                    <Authentication action={isSignup ? 'Signup' : 'Login'} />
                    
                </motion.div>
            </div>
        </div>
    );
}
