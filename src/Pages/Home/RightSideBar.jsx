import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import qzon1 from '../../assets/images/qZone1.png';
import qzon2 from '../../assets/images/qZone2.png';
import qzon3 from '../../assets/images/qZone3.png';

const RightSideBar = () => {
    return (
        <>
            <div>
                <div className="p-2 mb-3">
                    <h2 className="text-xl font-semibold mb-3">Login with </h2>
                    <button className="btn btn-sm btn-outline w-full mb-1">
                        <FaGoogle />
                        Login with Google
                    </button>
                    <button className="btn btn-sm btn-outline w-full">
                        <FaGithub />
                        Login with Github
                    </button>
                </div>

                {/* Find on us  */}
                <div className="p-2 mb-2">
                    <h2 className="text-xl font-semibold mb-3">Find Us On </h2>
                    <button className="btn btn-outline rounded-none rounded-t-lg w-full border-gray-300">
                        <FaFacebook />
                        Facebook
                    </button>
                    <button className="btn btn-outline rounded-none  w-full border-gray-300">
                        <AiFillTwitterCircle />
                        Twitter
                    </button>
                    <button className="btn btn-outline rounded-none rounded-b-lg w-full border-gray-300">
                        <FaInstagramSquare />
                        Instagram
                    </button>
                </div>

                {/* Q zone  */}
                <div className="bg-gray-200 p-2">
                <h2 className="text-xl font-semibold mb-3">Find Us On </h2>
                    <div><img src={qzon1} alt="" /></div>
                    <div><img src={qzon2} alt="" /></div>
                    <div><img src={qzon3} alt="" /></div>
                </div>
            </div>
        </>
    );
};

export default RightSideBar;