import { useEffect, useState } from "react";
import NewsItem from "../../Components/NewsItem";


const NewsHome = () => {
    const [news, setNews] = useState([]);
    useEffect(()=> {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data));
    },[]);

    return (
        <>
            <h2 className="text-xl font-semibold mb-3">Dragon News Home</h2>
            <div>
                {
                    news.map(item => <NewsItem key={item._id}
                        item = {item}
                        />)
                }
            </div>

        </>
    );
};

export default NewsHome;