"use client"
// @ts-ignore
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import { motion } from "framer-motion"
import { container, children } from "./animations";

const images = [
  { url:"https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441557/img25_hhl5jb.jpg"},
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441554/img23_vrlxmg.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441553/img21_xic2dp.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441555/img24_va4n43.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441551/img12_a8x6fc.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441547/img10_reln3n.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441547/img14_wvop96.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441547/img15_farioo.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441546/img17_xupurj.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441546/img16_f2pdyl.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441537/img13_bbgezk.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441537/img11_osozgm.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441536/img9_vwgfju.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441532/img6_ueeaba.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441530/img8_e6iees.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441530/img3_ydq0xs.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441546/img17_xupurj.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441537/img13_bbgezk.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441530/img3_ydq0xs.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441525/img2_yfhkz5.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441518/img1_cnzcpb.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441523/img7_yib3gk.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441525/img2_yfhkz5.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441524/img5_uw1hcz.jpg" },
  { url: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1739441525/img4_b2cs8l.jpg" },
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
