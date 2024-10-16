import { AppBar, Chip } from "@mui/material";
import { Login } from '../components/login.jsx';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import '../styles/app.css';
import { DialogContext } from "../context/context.jsx";

export const NavBar = () => {
    const { balance } = useContext(DialogContext);

    return (
        <AppBar className="navbar">
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
                <Chip label="Create" className="chip"/>
                <Chip label="Shop Now" className="chip"/>
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