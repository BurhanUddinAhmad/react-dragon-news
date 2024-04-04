import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const err = useRouteError();
    const {error, status, statusText} = err;
    // console.log(err)
    return (
        <>
            {/* <h1> {status} {statusText} </h1> */}
            <h2>Ops, {error.message}  </h2>
            {
                status === 404 && <div>
                    <h2>Page not found!</h2>
                    <Link to='/'><button>Go Home</button></Link>
                </div>
            }
        </>
    );
};

export default ErrorPage;