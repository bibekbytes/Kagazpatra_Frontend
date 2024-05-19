import React from "react";

const ErrorComponent = () => {
    return (
        <>
            <div className='flex flex-col gap-7 items-center justify-center font-poppins font-bold text-tBlue bg-cWhite text-5xl max-h-svh max-w-svw'><p><span className=' text-orange-500'>404</span> Page Not Found</p><p>or</p> <p>Page Under <span className=' text-orange-500'>Construction</span></p></div>
        </>
    );
}

export default ErrorComponent;