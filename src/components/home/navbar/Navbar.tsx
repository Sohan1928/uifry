import IconSvg from "./svg/iconSvg";

const Navbar = () => {
  return (
    <div className="mt-10 flex items-center justify-between">
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
        <button className="bg-[#000000] px-4 md:px-8 py-2 md:py-4 rounded-md text-white cursor-pointer font-medium">
          Download
        </button>
      </div>
    </div>
  );
};

export default Navbar;
