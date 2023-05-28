/* eslint-disable react/prop-types */
import ButtonPrimary from "./ButtonPrimary";

const MenuCard = ({img, title, description}) => {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 shadow-md rounded-md mb-5 md:mb-0">
            <img className="w-full h-[13rem] object-cover rounded-t-md" src={img} alt="" />
            <div className="bg-[#F3F3F3] rounded-b-md">
                <div className="text-center pt-7">
                    <h3 className="text-xl font-bold hover:cursor-pointer hover:text-primary">{title}</h3>
                    <p className="px-5 pt-2">{description.slice(0,55)}...</p>
                </div>
                <div className="w-full flex justify-center py-7">
                    <ButtonPrimary bgColor={"bg-black/10"}>
                        ADD TO CART
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
