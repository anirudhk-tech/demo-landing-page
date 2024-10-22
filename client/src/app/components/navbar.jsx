import { AppBar, Chip } from "@mui/material";
import { Login } from '../components/login.jsx';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import '../styles/app.css';
import { DialogContext } from "../context/context.jsx";

export const NavBar = () => {
    const { balance } = useContext(DialogContext);

    return (
        <AppBar className="navbar" color="transparent">
            <motion.div
            className="line-top"
            animate={{
                x: '100vw'
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'loop',
            }}
            >
            </motion.div>
            <Login/>
            {balance !== null && (
                <motion.text 
                className="balance-text"
                animate={{
                    opacity: [0, 1, 0, 1],
                }}
                transition={{
                    duration: 2,
                }}
                >
                    Balance: {balance} Wei
                </motion.text>
            )}
            <div className="chip-container">
                <Chip label="Create" className="chip" color="white"/>
                <Chip label="Shop Now" className="chip" color="white"/>
            </div>
            <motion.div
            className="line-bottom"
            animate={{
                x: '-100vw'
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'loop',
            }}
            >
            </motion.div>
        </AppBar>
    )
}