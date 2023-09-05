import Content from "../Content";
import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobileNavbar";

export default function Home() {
  return (
    <main className="flex bg-whitee flex-col ">
      <MobileNavbar />
      <div className="flex flex-row">
        <DesktopNavbar />
        <div className="flex absolute top-0 right-0 w-full md:w-2/3 flex-col">
          <div className="w-full relative h-96 bg-accent text-center flex justify-evenly text-4xl text-white font-bold flex-col">
            <p>Hittan</p>
            <div className="h-10 absolute z-10 bottom-0 left-0 rounded-t-2xl bg-whitee w-full" />
          </div>
          <Content tantargy={"hittan"} />
        </div>
      </div>
    </main>
  );
}
