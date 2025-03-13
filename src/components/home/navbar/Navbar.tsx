import IconSvg from "./svg/IconSvg";
import StarSvg from "./svg/StarSvg";

const Navbar = () => {
  return (
    <div className="mt-10 flex items-center justify-between relative">
      <div className="flex items-center gap-2 md:gap-11">
        <h4 className="flex items-center gap-2">
          <IconSvg></IconSvg>
          {/* white spot */}
          <span className="size-2 bg-white absolute top-[19px] md:top-[24px] left-[9px] md:left-[10px] rounded-full"></span>
          <p className="text-4xl font-bold text-[#000000]">
            uifry<span className="font-normal text-base align-super">™</span>
          </p>
        </h4>
        <span className="hidden md:flex items-center gap-6 text-[#000000] text-lg font-medium">
          <a className="hover:text-[#FF5555] transition-all duration-300 cursor-pointer">
            Home
          </a>
          <a className="hover:text-[#FF5555] transition-all duration-300 cursor-pointer">
            About Us
          </a>
          <a className="hover:text-[#FF5555] transition-all duration-300 cursor-pointer">
            Pricing
          </a>
          <a className="hover:text-[#FF5555] transition-all duration-300 cursor-pointer">
            Features
          </a>
        </span>
      </div>
      {/* download button */}
      <div>
        <button className="bg-[#000000] px-3 md:px-8 py-2 md:py-3 rounded-sm text-white cursor-pointer font-medium">
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
