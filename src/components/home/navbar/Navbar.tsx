import IconSvg from "./svg/IconSvg";
import StarSvg from "./svg/StarSvg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#uifryIcon", { y: -20, duration: 1.2, opacity: 0, delay: 0.5 });
    tl.from("#navDownloadBtn", { y: -20, duration: 0.6, opacity: 0 });
    tl.from("#navSpan h6", {
      y: -10,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    });
  });

  return (
    <div className="mt-10 flex items-center justify-between relative">
      <div id="leftSide" className="flex items-center gap-2 md:gap-11">
        <h4 id="uifryIcon" className="flex items-center gap-2">
          <IconSvg></IconSvg>
          {/* white spot */}
          <span className="size-2 bg-white absolute top-[19px] md:top-[24px] left-[9px] md:left-[10px] rounded-full"></span>
          <p className="text-4xl font-bold text-[#000000]">
            uifry<span className="font-normal text-base align-super">™</span>
          </p>
        </h4>
        <span
          id="navSpan"
          className="invisible md:visible md:flex items-center gap-6 text-[#000000] text-lg font-medium"
        >
          <h6 className="hover:text-[#FF5555] cursor-pointer">Home</h6>
          <h6 className="hover:text-[#FF5555] cursor-pointer">About Us</h6>
          <h6 className="hover:text-[#FF5555] cursor-pointer">Pricing</h6>
          <h6 className="hover:text-[#FF5555] cursor-pointer">Features</h6>
        </span>
      </div>
      {/* download button */}
      <div>
        <button
          id="navDownloadBtn"
          className="bg-[#000000] px-3 md:px-8 py-2 md:py-3 rounded-sm text-white cursor-pointer font-medium"
        >
          Download
        </button>
      </div>
      {/* right star */}
      <div className="absolute -right-5 md:-right-16 size-9 md:size-14 -bottom-6 md:-bottom-10">
        <StarSvg></StarSvg>
      </div>
      {/* left start */}
      <div className="absolute -left-6 md:-left-16 size-7 md:size-10 rotate-32 -bottom-8 md:-bottom-16">
        <StarSvg></StarSvg>
      </div>
    </div>
  );
};

export default Navbar;
