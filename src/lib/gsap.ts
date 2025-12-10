import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapConfig = {
    defaults: {
        ease: "power2.out",
        duration: 0.6,
    },
};

export default gsap;
