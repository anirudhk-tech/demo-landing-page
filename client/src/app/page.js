'use client'

import { MovingRow } from "./components/moving_row.jsx";
import { DialogContext } from "./context/context.jsx";
import { NavBar } from "./components/navbar.jsx";
import { useScroll, useTransform, motion } from "framer-motion";
import '../app/styles/app.css';
import { Review } from "./components/review.jsx";
import { Award } from "./components/award.jsx";
import { Product } from "./components/product.jsx";
import { useState } from "react";
import { Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { Connect } from './web3/auth.js';
import { Trusted } from './components/trusted.jsx';
import Nature from '../public/images/Image13.jpg';
import Cute from '../public/images/Image14.png';
import City from '../public/images/Image15.png';
import Abstract from '../public/images/Image16.png';
import Trusted1 from '../public/images/Image18.png';
import Trusted2 from '../public/images/Image17.png';
import Trusted3 from '../public/images/Image20.png';
import Trusted4 from '../public/images/Image19.png';
import Insta from '../public/images/insta.jpg';
import X from '../public/images/x.png';
import Tiktok from '../public/images/tiktok.png';
import Image from "next/image.js";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(null);
  const xImageRowProgress = useTransform(scrollYProgress, [0.1, 0.2], ['0%', '-55%']);
  const xImageRowProgressReverse = useTransform(scrollYProgress, [0.1, 0.2], ['0%', '55%']);
  const imagesOpacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);
  const praiseOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.55, 0.60], [0, 1, 1, 0]);
  const review = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const reviewRotate = useTransform(scrollYProgress, [0.4, 0.5], [0, 360]);
  const xAward1Progress = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.80], ['0vw', '40vw', '40vw', '0vw']);
  const xAward1SentenceProgress = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.80], ['0', '-80vw', '-80vw', '0vw']);
  const xAward2Progress = useTransform(scrollYProgress, [0.60, 0.65, 0.75, 0.80], ['0vw', '40vw', '40vw', '0vw']);
  const xAward2SentenceProgress = useTransform(scrollYProgress, [0.60, 0.65, 0.75, 0.80], ['0vw', '-80vw', '-80vw', '0vw']);
  const xAward3Progress = useTransform(scrollYProgress, [0.64, 0.67, 0.75, 0.80], ['0vw', '40vw', '40vw', '0vw']);
  const xAward3SentenceProgress = useTransform(scrollYProgress, [0.64, 0.67, 0.75, 0.80], ['0vw', '-80vw', '-80vw', '0vw']);
  const xCircle1Progress = useTransform(scrollYProgress, [0.85, 0.90], ['0vw', '40vw']);
  const xCircle2Progress = useTransform(scrollYProgress, [0.85, 0.90], ['0vw', '15vw']);
  const xCircle3Progress = useTransform(scrollYProgress, [0.85, 0.90], ['0vw', '-10vw']);
  const xCircle4Progress = useTransform(scrollYProgress, [0.85, 0.90], ['0vw', '-35vw']);
  const widthFooterLineProgress = useTransform(scrollYProgress, [0.97, 1.00], ['0vw', '100vw']);

  return (
    <div className="fullview">
      <Dialog open={dialogOpen} className="dialog">
        <DialogTitle className="dialog-title">Pick a method</DialogTitle>
        <Button variant="contained" className="dialog-option" onClick={async () => {
          const balance = await Connect();
          setBalance(balance);
          setConnected(true);
          setDialogOpen(false);
        }}>MetaMask</Button>
        <Button variant="contained" className="dialog-option" onClick={() => setDialogOpen(false)}>Close</Button>
      </Dialog>
      <DialogContext.Provider value={{ setDialogOpen: setDialogOpen, connected: connected, setConnected: setConnected, balance: balance, setBalance: setBalance }}>
        <NavBar/>
      </DialogContext.Provider>
      <div className="main-title-and-subtitle">
        <Typography className="main-title">Meta Market</Typography>
        <Typography className="sub-title">Find quality AI art in our vast collection (or submit your own!)</Typography>
      </div>
      <motion.div className="image-row-container">
        <MovingRow x={xImageRowProgress} opacity={imagesOpacity} number={1}/>
        <MovingRow x={xImageRowProgressReverse} opacity={imagesOpacity} number={2}/>
      </motion.div>
      <motion.div className="praise-container" style={{ opacity: praiseOpacity }}>
        <motion.text className="praise-title">Praise for Meta Market</motion.text>
        <Review 
        review={review}
        rotateY={reviewRotate}
        />
      </motion.div>
      <div className="awards-container">
        <Award trophyX={xAward1Progress} awardX={xAward1SentenceProgress} award={'"Most Visually Pleasing"'}/>
        <Award trophyX={xAward2Progress} awardX={xAward2SentenceProgress} award={"#1 AI Image Gallery in the world"}/>
        <Award trophyX={xAward3Progress} awardX={xAward3SentenceProgress} award={"Highest Customer Satisfaction"} />
      </div>
      <div className="trusted-by-container">
        <Typography className="trusted-by-title">Trusted By</Typography>
        <div className="trusted-by-circle-container">
          <Trusted x={xCircle1Progress} bgImage={Trusted1}/>
          <Trusted x={xCircle2Progress} bgImage={Trusted2}/>
          <Trusted x={xCircle3Progress} bgImage={Trusted3}/>
          <Trusted x={xCircle4Progress} bgImage={Trusted4}/>
        </div>
      </div>
      <Typography className="product-title">Maybe You'll Find Something You Like</Typography>
      <div className="products-container">
        <Product title="Nature Scenery" bgImage={Nature}/>
        <Product title="Cute Pictures" bgImage={Cute}/>
        <Product title="Cityscapes" bgImage={City}/>
        <Product title="Abstract Art" bgImage={Abstract}/>
      </div>
      <div className="footer">
        <motion.div
        className="footer-line"
        style={{
          width: widthFooterLineProgress
        }}
        ></motion.div>
        <Typography className="footer-text">Contact: +1 000.000.000 | MetaMarket@somemail.com</Typography>
        <Typography className="footer-text" style={{marginTop: '5vh'}}>
          Mission: Our mission is to empower creativity by providing a seamless marketplace for AI-generated images. 
          We connect creators to a customer base with innovative AI tools, enabling artists, designers, and businesses to explore limitless possibilities. 
          Customers can shop a diverse collection of AI-generated artwork, bringing their visions to life.
        </Typography>
        <div className="bottom-footer">
          <div className="links-container">
            <motion.text className="footer-text">About</motion.text>
            <motion.div className="link-line" animate={{ x: '3vw' }} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse'}}></motion.div>
            <motion.text className="footer-text">Marketplace</motion.text>
            <motion.div className="link-line" animate={{ x: '7vw' }} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse'}}></motion.div>        
            <motion.text className="footer-text">Creator's Studio</motion.text>
            <motion.div className="link-line" animate={{ x: '12vw' }} transition={{duration: 2, repeat: Infinity, repeatType: 'reverse'}}></motion.div>
          </div>
          <div className="socials-container">
            <motion.div
            whileHover={{ scale: 1.3 }}
            >
              <Image 
              src={Insta}
              className="socials-image"/>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.3 }}
            >
              <Image 
              src={X}
              className="socials-image"/>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.3 }}
            >
              <Image 
              src={Tiktok}
              className="socials-image"/>
            </motion.div>
          </div>
        </div>
      </div>
  </div>  
  );
}
