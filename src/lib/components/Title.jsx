/* eslint-disable react/prop-types */
const Title = ({ title, subtitle }) => {
    return (
        <div className="my-10 flex justify-center">
            <div>
                <p className="text-primary text-center text-lg mb-7">
                    --- {subtitle} ---
                </p>
                <span className="text-center border-t-4 border-b-4 border-secondary text-5xl py-2">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default Title;
