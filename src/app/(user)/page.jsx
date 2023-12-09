import EllipseRight from "@/common/EllipseLeft";
import DescriptionSite from "./DescriptionSite";
import SwiperBanner from "./SwiperBanner";

export default function Home() {
  return (
    <main className="flex flex-col  ">
    <DescriptionSite />
    <div className="w-full flex flex-col   px-5   mt-8 md:mt-9 lg:mt-14 2xl:mt-28">
      <SwiperBanner/>
    </div>
  </main>
  );
}
