import '../../app/styles/app.css';
import Image from 'next/image';
import Image1 from '../../public/images/image1.png';
import Image2 from '../../public/images/image2.png';
import Image3 from '../../public/images/image3.png';
import Image4 from '../../public/images/image4.png';
import Image5 from '../../public/images/image5.png';
import Image6 from '../../public/images/image6.png';
import Image7 from '../../public/images/image7.png';
import Image8 from '../../public/images/image8.png';
import Image9 from '../../public/images/image9.png';
import Image10 from '../../public/images/image10.png';
import Image11 from '../../public/images/image11.png';
import Image12 from '../../public/images/image12.png';
import { motion } from 'framer-motion';

export const MovingRow = ({ x, opacity, number }) => {
    
    const images = number === 1 ? [
        Image1, Image3, Image8, 
        Image4, Image5, Image6, 
    ] : [
        Image7, Image2, Image9,
        Image10, Image11, Image12,
    ];

    return (
        <motion.div 
        className="image-row"
        style={{ x, opacity }}
        >
            {
                images.map((image, index) => (
                    <Image 
                    key={index}
                    className="image-in-row"
                    src={image}/>
                ))
            }
        </motion.div>
    )
}