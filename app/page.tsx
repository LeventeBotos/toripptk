import Content from "./Content";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="flex bg-whitee flex-col ">
      <MobileNavbar />
      <div className="flex flex-row">
        <DesktopNavbar />
        <div className="flex absolute top-0 right-0 w-full md:w-2/3 flex-col">
          <div className="w-full h-96 bg-accent text-center flex justify-evenly text-4xl text-white font-bold flex-col">
            <p>Történelem</p>
          </div>
          <Content />
        </div>
      </div>
    </main>
  );
}
