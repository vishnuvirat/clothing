import Image from "next/image";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
export default function People() {
    return (
        <div className="flex justify-center p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <div className="justify-center my-4">
                <div className="text-2xl font-bold sm:text-3xl md:text-3xl p-4">
                    People Behind the Brands
                </div>
                <div className="flex items-center flex-col md:flex md:flex-row shadow-md justify-center gap-x-6 p-6 rounded-md border border-gray-200 hover:shadow-lg">
                    <div>
                        <div>
                            <Image
                                src={pic1}
                                alt="avatar"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex text-sm justify-center items-center font-bold text-gray-500 p-2">
                            P.RAJESH KUMAR
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={pic2}
                                alt="avatar"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center text-sm font-bold text-gray-500 p-2">
                            P.CHANDRASHEKAR
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
