import EllipseRight from "@/common/EllipseLeft";
import DescriptionSite from "./DescriptionSite";
import SwiperBanner from "./SwiperBanner";
import Market from "./Market";

export default function Home() {
  return (
    <main className="flex flex-col  ">
      <DescriptionSite />
      <div className="w-full flex flex-col   px-5   mt-8 gap-y-8 md:mt-9 md:gap-y-9 lg:mt-14  lg:gap-y-14 2xl:mt-20 2xl:gap-y-20">
        <div className="w-full flex flex-col   gap-y-4  md:gap-y-5   lg:gap-y-12  ">
          <h2 className="font-bold text-primary-500 text-[1.2rem] md:text-2xl">بازار و اتفاقات</h2>
          <div className="flex flex-col items-center justify-start md:flex-row md:justify-between md:gap-x-8  md:items-end xl:gap-x-12">
          <SwiperBanner />
          <Market />
          </div>
        </div>
      </div>
    </main>
  );
}
