import { motion } from "framer-motion";

export const Trusted = ({ x }) => {
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
            x
        }}
        className="trusted-by-circle">

        </motion.div>
    )
};