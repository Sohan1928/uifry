import IconSvg from "./svg/iconSvg";
import StarSvg from "./svg/StarSvg";

const Navbar = () => {
  return (
    <div className="mt-10 flex items-center justify-between px-4 md:px-28 relative">
      <div className="flex items-center gap-2 md:gap-11">
        <h4 className="flex items-center gap-2">
          <IconSvg></IconSvg>
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
      <div>
        <button className="bg-[#000000] px-3 md:px-8 py-2 md:py-4 rounded-sm text-white cursor-pointer font-medium">
          Download
        </button>
      </div>
      <div className="absolute right-0 md:right-6 size-9 md:size-16 -bottom-6 md:-bottom-6">
        <StarSvg></StarSvg>
      </div>
      <div className="absolute left-0 md:left-6 size-7 md:size-10 rotate-32 -bottom-16 md:-bottom-28">
        <StarSvg></StarSvg>
      </div>
    </div>
  );
};

export default Navbar;
