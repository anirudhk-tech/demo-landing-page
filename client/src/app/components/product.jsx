import { duration } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export const Product = ({ title, bgImage }) => {
    const [hover, setHover] = useState(false);

    return (
        <motion.div className="product-box-caption-container">
            <motion.div 
            className="product-container"
            onHoverStart={() => setHover(true)}
            animate={{
                y: '1px',
            }}
            transition={{
                y: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }
            }}
            >
                <motion.div 
                className="product-line"
                style={{
                    backgroundImage: `url(${bgImage?.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                animate={{
                    height: hover ? '100%' : null,
                    width: hover ? '100%' : null,
                    boxShadow: hover ? 'inset 0px 0px 10px 5px black' : null,
                }}
                transition={{
                    height: {
                        duration: 1
                    },
                    width: {
                        duration: 1.5,
                        delay: 1.1,
                    },
                    boxShadow: {
                        duration: 2,
                        delay: 2.7,
                    }
                }}
                >

                </motion.div>
            </motion.div>
            <motion.text 
            className="product-caption"
            animate={{
                opacity: hover ? 1 : 0
            }}
            transition={{
                duration: 1,
                delay: 2.7,
            }}
            >{hover ? title : '?????'}</motion.text>
        </motion.div>
    );
};