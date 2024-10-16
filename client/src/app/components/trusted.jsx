import { motion } from "framer-motion";

export const Trusted = ({ x, bgImage }) => {
    return (
        <motion.div 
        animate={{
            boxShadow: ['0px 0px 10px 0px', '0px 0px 10px 2px']
        }}
        transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
        }}
        style={{
            x,
            backgroundImage: `url(${bgImage?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        className="trusted-by-circle">

        </motion.div>
    )
};