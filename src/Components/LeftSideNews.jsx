import newsCover1 from '../assets/images/1.png';
import newsCover2 from '../assets/images/2.png';
import newsCover3 from '../assets/images/3.png';

const LeftSideNews = () => {
    return (
        <>
            <div className="p-1 mb-3 dark:bg-gray-50 dark:text-gray-900">
                <img src={newsCover1} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <span className="block mt-3 text-xs font-medium uppercase dark:text-violet-600">Sports</span>
                </div>
            </div>
            <div className="p-1 mb-3  dark:bg-gray-50 dark:text-gray-900">
                <img src={newsCover2} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <span className="block mt-3 text-xs font-medium uppercase dark:text-violet-600">Sports</span>
                </div>
            </div>
            <div className="p-1  dark:bg-gray-50 dark:text-gray-900">
                <img src={newsCover3} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <span className="block mt-3 text-xs font-medium uppercase dark:text-violet-600">Sports</span>
                </div>
            </div>
        </>
    );
};

export default LeftSideNews;