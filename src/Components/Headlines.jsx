import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Headlines = () => {
    return (
        <>
            <div className="flex bg-gray-100 p-3">
                <button className="btn btn-sm mr-3 btn-error text-white rounded-none">Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link>Latest Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link>Latest Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link>Latest Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                </Marquee>
            </div>
        </>
    );
};

export default Headlines;