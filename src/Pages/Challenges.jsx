import React from "react";
import { Link } from "react-router";

const Challenges = ({ challenges }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 py-16">
            {challenges && challenges.length > 0 ? (
                challenges.map((item) => (
                    <div
                        key={item._id}
                        className="rounded-xl shadow-lg hover:shadow-2xl transition bg-white"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-t-xl"
                        />

                        <div className="p-5">
                            <h2 className="text-2xl font-semibold text-green-700 mb-2">
                                {item.title}
                            </h2>

                            <p className="text-gray-600 mb-3">{item.description}</p>
                        

                            <p className="font-medium text-gray-800">
                                Duration: {item.duration} days
                            </p>

                            <Link
                                to={`/ChallengesDetails/${item._id}`}
                                className="mt-4 btn flex items-center justify-center bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
                            >
                                Join Challenge
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 col-span-3">
                    No Challenges Available
                </p>
            )}
        </div>
    );
};

export default Challenges;
