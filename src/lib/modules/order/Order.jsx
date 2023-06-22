import { BASE_URL } from "../../helpers/global";
import { useAuth } from "../../context/AuthProvider";
import Wrapper from "../../components/Wrapper";
import Loader from "../../components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Order = () => {
    const { currentUser, isLoading } = useAuth();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/order/${currentUser?.email}`)
            .then(function (response) {
                setData(response?.data?.data);
                setLoading(false);
            });
    }, [currentUser?.email]);

    return (
        <Wrapper className={"my-28"}>
            {loading ? (
                <Loader />
            ) : isLoading || !data || data?.length === 0 ? (
                <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black text-center leading-10 uppercase">
                            No item available
                        </h1>
                        <Link
                            to={"/shop"}
                            className="flex items-center justify-center gap-2 mt-5 lg:mt-10 cursor-pointer"
                        >
                            <Button
                                className={
                                    "rounded-sm bg-neutral md:text-xl uppercase"
                                }
                            >
                                Order some food
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <p className="text-3xl md:text-4xl mb-5 font-black leading-10 text-center">
                        My Order
                    </p>
                    <div className="overflow-x-auto border rounded-lg">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <th>Food Image</th>
                                    <th>Ordered Food</th>
                                    <th>Customer Info</th>
                                    <th>Shipping Address</th>
                                    <th>Transaction Id</th>
                                    <th>Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr key={item?._id} className="text-center">
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item?.data?.image}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center justify-center space-x-3">
                                                <div>
                                                    <div className="font-bold">
                                                        {item?.data?.name}
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        {item?.data?.category}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.name}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                {item?.phone}
                                            </span>
                                        </td>
                                        <td>{item?.address}</td>
                                        <td>
                                            {" "}
                                            {item?.paymentStatus
                                                ? item?.tranId
                                                : "N/A"}
                                        </td>
                                        <th>
                                            {item?.paymentStatus ? (
                                                <button className="bg-green-500 text-white rounded-md btn-xs cursor-default">
                                                    Paid
                                                </button>
                                            ) : (
                                                <button className="bg-red-500 text-white rounded-md btn-xs cursor-default">
                                                    Unpaid
                                                </button>
                                            )}
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default Order;
