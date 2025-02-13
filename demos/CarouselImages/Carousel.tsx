"use client"
// @ts-ignore
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import { motion } from "framer-motion"
import { container, children } from "./animations";
import img1 from "../../public/assets/images/img1.jpg"
import img2 from "../../public/assets/images/img2.jpg"
import img3 from "../../public/assets/images/img3.jpg"
import img4 from "../../public/assets/images/img4.jpg"
import img5 from "../../public/assets/images/img5.jpg"
import img6 from "../../public/assets/images/img6.jpg"
import img7 from "../../public/assets/images/img7.jpg"
import img8 from "../../public/assets/images/img8.jpg"
import img9 from "../../public/assets/images/img9.jpg"
import img10 from "../../public/assets/images/img10.jpg"
import img11 from "../../public/assets/images/img11.jpg"
import img12 from "../../public/assets/images/img12.jpg"
import img13 from "../../public/assets/images/img13.jpg"
import img14 from "../../public/assets/images/img14.jpg"
import img15 from "../../public/assets/images/img15.jpg"
import img16 from "../../public/assets/images/img16.jpg"
import img17 from "../../public/assets/images/img17.jpg"
import img18 from "../../public/assets/images/img18.jpg"
import img19 from "../../public/assets/images/img19.jpg"
import img20 from "../../public/assets/images/img20.jpg"
import img21 from "../../public/assets/images/img21.jpg"
import img22 from "../../public/assets/images/img22.jpg"
import img23 from "../../public/assets/images/img23.jpg"
import img24 from "../../public/assets/images/img24.jpg"
import img25 from "../../public/assets/images/img25.jpg"

const images = [
  { url:`${img1}`},
  { url: "/assets/images/img2.jpg" },
  { url: "/assets/images/img3.jpg" },
  { url: "/assets/images/img4.jpg" },
  { url: "/assets/images/img5.jpg" },
  { url: "/assets/images/img6.jpg" },
  { url: "/assets/images/img7.jpg" },
  { url: "/assets/images/img8.jpg" },
  { url: "/assets/images/img9.jpg" },
  { url: "/assets/images/img10.jpg" },
  { url: "/assets/images/img11.jpg" },
  { url: "/assets/images/img12.jpg" },
  { url: "/assets/images/img13.jpg" },
  { url: "/assets/images/img14.jpg" },
  { url: "/assets/images/img15.jpg" },
  { url: "/assets/images/img16.jpg" },
  { url: "/assets/images/img17.jpg" },
  { url: "/assets/images/img18.jpg" },
  { url: "/assets/images/img19.jpg" },
  { url: "/assets/images/img20.jpg" },
  { url: "/assets/images/img21.jpg" },
  { url: "/assets/images/img22.jpg" },
  { url: "/assets/images/img23.jpg" },
  { url: "/assets/images/img24.jpg" },
  { url: "/assets/images/img25.jpg" },
];

const Carousel = () => {
  return (
    <>
    <Slider 
    className="sm:object-cover sm:h-1/2 w-full rounded-lg"
    imageList={images} width={1000} height={1200} />
     <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-center truncate gap-1 font-semibold text-2xl text-black *:opacity-0 *"
        >
            <motion.span variants={children}>Binge watch my favourite photos while listening your favourite music 😊 </motion.span>
           
        
        </motion.div>
    </>
    
)
} 

export default Carousel