import { AppBar, Chip } from "@mui/material";
import { Login } from '../components/login.jsx';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import '../styles/app.css';
import { DialogContext } from "../context/context.jsx";

export const NavBar = () => {
    const { balance } = useContext(DialogContext);

    return (
        <AppBar className="navbar" color="black">
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
            <div style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '1vw',
                marginRight: 'auto',
                display: 'flex',
                border: '1px solid white',
                height: '15vh',
            }}>
                <Login/>
            </div>
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