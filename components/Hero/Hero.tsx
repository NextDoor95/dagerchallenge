"use client"

import { motion } from "framer-motion";
import Image from 'next/image'
import bubble from "../../public/bubble.png"
import { useTranslation } from 'react-i18next';
import Dropdown from "../ui/Dropdown/Dropdown";

function Hero() {

  const { t } = useTranslation()

  return (
    <section className='hero'>
      
        <motion.div
          className="bubble"
                initial={{ scale: 0.9, opacity: 0}}
                animate={{ 
                  scale: [0.6, 0.7, 0.9, 0.7, 0.6],
                  rotate: [0, 180, 0, -180., 0],
                  opacity: [0, 0.6, 1, 0.7, 0],
                }}
                transition={{ duration: 35, repeat: Infinity,}}
            >
                <Image src={bubble} alt="Bubble" />
      </motion.div>
      <div className="content">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.8  }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='title'>{t('hero.heroTitle')}</motion.h2>

<motion.h3 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="subtitle">
  {t("hero.heroDescription")} 
  <span>{t("hero.herospan")}</span> 
  {t("hero.heroDescription2")}
</motion.h3>
                    <motion.p
                        initial={{ opacity: 0  }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >{t('hero.heroText')}</motion.p>
                    <Dropdown/>
                </div>
                
      <motion.div
                initial={{ opacity: 0, scale: 0.4, x: 100  }}
                animate={{ opacity: 1, scale: 1, x: -100, rotate: [0, 180, 0, -180., 0]}}
                transition={{ duration: 35 }}
                className="bubble"
            >
                <Image src={bubble} alt="Bubble" />
      </motion.div>
    </section>
  )
}

export default Hero