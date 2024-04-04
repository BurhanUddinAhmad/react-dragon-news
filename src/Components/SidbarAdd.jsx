import bg from '../assets/images/bg1.png'

const SidbarAdd = () => {
    return (
        <>
            <div className="card relative ">
                <figure><img src={bg} alt="bg1" /></figure>
                <div className="card-body absolute text-white text-center">
                    <h2 className="text-3xl font-semibold text-center mx-auto leading-snug my-3">Create an <br /> Amazing <br /> Newspaper</h2>
                    <p className='leading-loose'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-error text-white mt-8">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidbarAdd;