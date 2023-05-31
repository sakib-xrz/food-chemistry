/* eslint-disable no-unused-vars */
import React from "react";
import Contact from "../../lib/modules/contact/Contact";
import contact from "../../assets/contact/banner.jpg";
import phone from "../../assets/icons/phone.png";
import location from "../../assets/icons/location.png";
import clock from "../../assets/icons/clock.png";
import Title from "../../lib/components/Title";
import Wrapper from "../../lib/components/Wrapper";

const ContactPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
        <div>
            <Contact />
            {/* <div className="">
                <div className="">
                    <img className="w-full h-auto" src={contact} />
                </div>
            </div>

            <Wrapper>
                <div>
                    <Title subtitle={"Visit Us"} title={"OUR LOCATION"} />
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 text-center">
                        <div className="border">
                            <div className=" bg-[#D1A054] py-3">
                                <img className="w-6 h-6 mx-auto" src={phone} />
                            </div>
                            <div className="bg-[#F3F3F3] py-10 mx-5 mb-5">
                                <h3 className="text-lg font-bold mb-2">
                                    PHONE
                                </h3>
                                <p className="text-sm">+38 (012) 34 56 789</p>
                                <p className="text-sm">+38 (012) 34 56 789</p>
                            </div>
                        </div>
                        <div className="border">
                            <div className=" bg-[#D1A054] py-3">
                                <img
                                    className="w-6 h-6 mx-auto"
                                    src={location}
                                />
                            </div>
                            <div className="bg-[#F3F3F3] py-10 mx-5 mb-5">
                                <h3 className="text-lg font-bold mb-2">
                                    ADDRESS
                                </h3>
                                <p className="text-sm">+38 (012) 34 56 789</p>
                                <p className="text-sm">+38 (012) 34 56 789</p>
                            </div>
                        </div>
                        <div className="border">
                            <div className=" bg-[#D1A054] py-3">
                                <img className="w-6 h-6 mx-auto" src={clock} />
                            </div>
                            <div className="bg-[#F3F3F3] py-10 mx-5 mb-5">
                                <h3 className="text-lg font-bold mb-2">
                                    WORKING HOURS
                                </h3>
                                <p className="text-sm">
                                    Mon - Fri: 08:00 - 22:00{" "}
                                </p>
                                <p className="text-sm">
                                    Sat - Sun: 10:00 - 23:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Title subtitle={"Send Us a Message"} title={"CONTACT FORM"} />

                <div className="text-center ">
                    <div className="">
                        <div className="p-4 py-6 rounded-lg bg-[#F3F3F3]  md:p-8">
                            <form>
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm text-start">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Your First Name"
                                            className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <label className="block mb-2 text-sm text-start">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Your First Name"
                                            className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm text-start">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="johndoe@example.com"
                                        className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm text-start">
                                        Message
                                    </label>
                                    <textarea
                                        className="block w-full px-5 py-2.5 mt-2 mb-20 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 ">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper> */}
        </div>
    );
};

export default ContactPage;
