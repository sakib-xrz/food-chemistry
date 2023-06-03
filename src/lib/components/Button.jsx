/* eslint-disable react/prop-types */
const Button = ({children, className}) => {
    return (
        <button
            className={`bg-primary ${className} text-white font-medium py-2 px-6 rounded-md hover:bg-dark 
    duration-500`}
        >
            {children}
        </button>
    );
};

export default Button;
