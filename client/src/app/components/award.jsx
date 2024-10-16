import { motion } from 'framer-motion';
import '../styles/app.css';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export const Award = ({ trophyX, awardX, award }) => {
    return (
        <motion.div className='award-bar'>
            <motion.div className='trophy-container' style={{ x: trophyX }}>
                <MilitaryTechIcon sx={{scale: 3}}/>
            </motion.div>
            <motion.text className='trophy-text' style={{x: awardX }}>{award}</motion.text>
        </motion.div>
    );
};