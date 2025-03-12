import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";

function App() {
  return (
    <div className="bg-[#fff]">
      <div className="md:w-[1230px] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </div>
  );
}

export default App;
