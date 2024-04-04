import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftSideNews from "../../Components/LeftSideNews";


const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then (data => setCategories(data));
    },[]);

    return (
        <>
            <h2 className="text-xl font-semibold mb-3">All Categories</h2>

            <div className=" mb-3 ml-5">
                {
                    categories.map(category => <div 
                    key={category.id}
                    className="text-gray-600 mb-2"
                    >
                    <NavLink
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>
                    </div>)
                }
            </div>

            <div>
                <LeftSideNews/>
            </div>
        </>
    );
};

export default LeftSideBar;