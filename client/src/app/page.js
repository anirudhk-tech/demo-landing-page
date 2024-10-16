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
import { Button, Dialog, DialogTitle } from "@mui/material";
import { Connect } from '../../../server/web3/auth.js';
import { Trusted } from './components/trusted.jsx';

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
  const xAward1Progress = useTransform(scrollYProgress, [0.50, 0.55, 0.70, 0.75], ['0vw', '40vw', '40vw', '0vw']);
  const xAward1SentenceProgress = useTransform(scrollYProgress, [0.50, 0.55, 0.70, 0.75], ['0', '-80vw', '-80vw', '0vw']);
  const xAward2Progress = useTransform(scrollYProgress, [0.55, 0.60, 0.70, 0.75], ['0vw', '40vw', '40vw', '0vw']);
  const xAward2SentenceProgress = useTransform(scrollYProgress, [0.55, 0.60, 0.70, 0.75], ['0vw', '-80vw', '-80vw', '0vw']);
  const xAward3Progress = useTransform(scrollYProgress, [0.60, 0.65, 0.70, 0.75], ['0vw', '40vw', '40vw', '0vw']);
  const xAward3SentenceProgress = useTransform(scrollYProgress, [0.60, 0.65, 0.70, 0.75], ['0vw', '-80vw', '-80vw', '0vw']);
  const xCircle1Progress = useTransform(scrollYProgress, [0.76, 0.80], ['0vw', '35vw']);
  const xCircle2Progress = useTransform(scrollYProgress, [0.76, 0.80], ['0vw', '10vw']);
  const xCircle3Progress = useTransform(scrollYProgress, [0.76, 0.80], ['0vw', '-15vw']);
  const xCircle4Progress = useTransform(scrollYProgress, [0.76, 0.80], ['0vw', '-40vw']);

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
        <text className="main-title">Meta Market</text>
        <text className="sub-title">Find quality AI art in our vast collection (or submit your own!)</text>
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
        <text className="trusted-by-title">Trusted By</text>
        <div className="trusted-by-circle-container">
          <Trusted x={xCircle1Progress}/>
          <Trusted x={xCircle2Progress}/>
          <Trusted x={xCircle3Progress}/>
          <Trusted x={xCircle4Progress}/>
        </div>
      </div>
      <text className="product-title">Maybe You'll Find Something You Like</text>
      <div className="products-container">
        <Product title="Futuristic Art"/>
        <Product title="Classics"/>
        <Product title="Night City"/>
        <Product title="Nature"/>
      </div>
    </div>  
  );
}
