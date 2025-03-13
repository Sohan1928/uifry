import IphoneFrontSvg from "../banner/svg/IphoneFrontSvg";
import StarSvg from "../navbar/svg/StarSvg";
import BgSvg from "./svg/BgSvg";
import EllipseSvg from "./svg/EllipseSvg";
import EllipseSvg2 from "./svg/EllipseSvg2";
import IconSvg1 from "./svg/icon/IconSvg1";
import IconSvg2 from "./svg/icon/IconSvg2";
import IconSvg3 from "./svg/icon/IconSvg3";

const Features = () => {
  return (
    <div className="md:flex items-start overflow-y-hidden overflow-x-hidden">
      {/* left side content */}
      <div className="relative">
        <div>
          <div className="z-50 h-[300px] w-[300px] md:h-[726px] md:w-[606px]">
            <BgSvg></BgSvg>
          </div>
          <div className="absolute left-0 top-0 md:-left-10 z-0 h-[250px] w-[250px] md:h-[492px] md:w-[601px]">
            <EllipseSvg></EllipseSvg>
          </div>
          <div className="absolute rotate-15 left-20 bottom-20 md:bottom-[220px] md:left-32 h-[200px] w-[200px] md:h-[450px] md:w-[450px] z-50">
            <IphoneFrontSvg></IphoneFrontSvg>
          </div>
          <div className="absolute size-6 md:size-10 top-16 left-4 md:top-36 md:-left-2 rotate-24">
            <StarSvg></StarSvg>
          </div>
        </div>
      </div>
      {/* right side content */}
      <div className="md:mt-24 relative">
        <div>
          <h3 className="text-[#FF5555] uppercase font-semibold">Features</h3>
          <h1 className="text-2xl md:text-5xl font-extrabold mt-2">
            Uifry Premium
          </h1>
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span>
                <IconSvg1></IconSvg1>
              </span>
              <h5 className="font-bold">Budgeting Intervals</h5>
            </div>
            <p className="mt-3 opacity-60 capitalize">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span>
                <IconSvg2></IconSvg2>
              </span>
              <h5 className="font-bold">Budgeting Intervals</h5>
            </div>
            <p className="mt-3 opacity-60 capitalize">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span>
                <IconSvg3></IconSvg3>
              </span>
              <h5 className="font-bold">Budgeting Intervals</h5>
            </div>
            <p className="mt-3 opacity-60 capitalize">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
        <div className="absolute -right-16 -top-4">
          <EllipseSvg2></EllipseSvg2>
        </div>
      </div>
    </div>
  );
};

export default Features;
