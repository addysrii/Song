"use client"
// @ts-ignore
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import { motion } from "framer-motion"
import { container, children } from "./animations";
const images = [
  { url: "/assets/images/img1.JPG" },
  { url: "/assets/images/img2.JPG" },
  { url: "/assets/images/img3.JPG" },
  { url: "/assets/images/img4.JPG" },
  { url: "/assets/images/img5.JPG" },
  { url: "/assets/images/img6.JPG" },
  { url: "/assets/images/img7.JPG" },
  { url: "/assets/images/img8.JPG" },
  { url: "/assets/images/img9.JPG" },
  { url: "/assets/images/img10.JPG" },
  { url: "/assets/images/img11.JPG" },
  { url: "/assets/images/img12.JPG" },
  { url: "/assets/images/img13.JPG" },
  { url: "/assets/images/img14.JPG" },
  { url: "/assets/images/img15.JPG" },
  { url: "/assets/images/img16.JPG" },
  { url: "/assets/images/img17.JPG" },
  { url: "/assets/images/img18.JPG" },
  { url: "/assets/images/img19.JPG" },
  { url: "/assets/images/img20.JPG" },
  { url: "/assets/images/img21.JPG" },
  { url: "/assets/images/img22.JPG" },
  { url: "/assets/images/img23.JPG" },
  { url: "/assets/images/img24.JPG" },
  { url: "/assets/images/img25.JPG" },
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
