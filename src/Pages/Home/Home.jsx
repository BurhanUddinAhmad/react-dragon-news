import Header from "../../Components/Header";
import Headlines from "../../Components/Headlines";
import Navbar from "../../Components/Navbar";
import LeftSideBar from "./LeftSideBar";
import NewsHome from "./NewsHome";
import RightSideBar from "./RightSideBar";


const Home = () => {
    return (
        <>
            <Header />
            <Headlines />
            <Navbar />
            <main className="grid grid-cols-1 md:grid-cols-4 mt-12 gap-4">
                <div>
                    <LeftSideBar />
                </div>
                <div className="col-span-2">
                    <NewsHome />
                </div>
                <div>
                    <RightSideBar />
                </div>
            </main>
        </>
    );
};

export default Home;