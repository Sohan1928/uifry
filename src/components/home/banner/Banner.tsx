import { CgArrowLongRight } from "react-icons/cg";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import CircleSvg from "../CircleSvg";
import CircleBgSvg from "./svg/CircleBgSvg";
import IphoneFrontSvg from "./svg/IphoneFrontSvg";
import IphoneFrontSvg2 from "./svg/IphoneFrontSvg2";
import AchievementSvg from "./svg/AchievementSvg";
import EllipseSvg from "./svg/EllipseSvg";
import StartSvg2 from "./svg/StartSvg2";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {
  const h4Ref = useRef(null);
  useGSAP(() => {
    gsap.from(h4Ref.current, {
      y: 40,
      opacity: 0,
      duration: 3,
      delay: 1,
      ease: "power2.in",
      scale: 0.6,
    });
  });

  return (
    <div
      id="BannerSection"
      className="md:flex items-center md:items-start mt-16 overflow-x-hidden md:mt-[140px]"
    >
      <div className="text-[#000000] relative z-50">
        <h4
          ref={h4Ref}
          className="text-3xl md:text-6xl font-bold inline-block overflow-hidden"
        >
          Make The Best <br /> Financial Decisions
        </h4>
        <p className="mt-6 opacity-60 capitalize">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          <br />
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="mt-6 flex items-center gap-4 md:gap-10">
          <button className="flex items-center justify-center gap-1 bg-[#000] text-white px-6 py-3 rounded-sm cursor-pointer text-[14px] md:text-base">
            Get Started
            <CgArrowLongRight />
          </button>
          <button className="flex items-center justify-center gap-2 md:gap-3 cursor-pointer">
            <MdOutlinePlayCircleOutline className="size-6 md:size-7" />
            <span className="font-medium text-[14px] md:text-base">
              Watch Video
            </span>
          </button>
        </div>
        <span className="absolute rotate-16 size-10 left-12 top-72 md:left-28 md:top-80">
          <StartSvg2 />
        </span>
        <div className="mt-6 md:-left-8 absolute h-[200px] w-[250px] md:h-[427px] md:w-[569px]">
          <AchievementSvg />
        </div>
      </div>
      <div className="absolute z-0 top-20 left-0 h-[200px] w-[300px] md:h-[430px] md:w-[517px] md:left-40">
        <CircleSvg />
      </div>
      <div className="md:w-1/2 mt-44 md:mt-0">
        <div className="relative h-[400px] md:h-[726px] w-[350px] md:w-[656px]">
          <CircleBgSvg />
        </div>
      </div>
      <div className="absolute top-72 md:top-12 right-0 md:right-0 z-50">
        <span className="absolute top-90 md:top-56 right-0 md:right-10 w-[200px] md:w-[476px] h-[360px] md:h-[752px]">
          <IphoneFrontSvg />
        </span>
        <span className="absolute top-80 md:top-40 right-2 md:right-17 h-[360px] w-[250px] md:h-[753px] md:w-[572px]">
          <IphoneFrontSvg2 />
        </span>
        <span className="absolute top-72 right-26 md:top-16 md:right-72 h-[360px] w-[200px] md:w-[476px] md:h-[752px]">
          <IphoneFrontSvg />
        </span>
      </div>
      <div className="absolute hidden md:block md:right-24 md:top-[490px] z-0">
        <EllipseSvg />
      </div>
      <span className="absolute size-10 hidden md:block md:right-[530px] md:top-[760px]">
        <StartSvg2 />
      </span>
    </div>
  );
};

export default Banner;
