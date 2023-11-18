import Content from "./Content";
import DesktopNavbar from "./DesktopNavbar";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import { V0 } from "./V0";

export default function Home() {
  return (
    <main className="flex bg-white dark:bg-black flex-col ">
      {/* <MobileNavbar />
      <div className="flex flex-row">
        <DesktopNavbar />
        <div className="flex absolute top-0 right-0 w-full md:w-2/3 flex-col">
          <div className="w-full relative h-96 bg-accent text-center flex justify-evenly text-4xl text-white font-bold flex-col">
            <p>Történelem</p>
            <div className="h-10 absolute z-10 bottom-0 left-0 rounded-t-2xl bg-whitee w-full"></div>
          </div>

          <Content tantargy={"tortenelem"} />
        </div>
      </div> */}
      <V0 tantargy="tortenelem" name="Történelem" />
      <Footer />
    </main>
  );
}
