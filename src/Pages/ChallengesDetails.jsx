import { Link, useLoaderData } from "react-router";

// Loader to fetch the challenge by ID
export const loader = async ({ params }) => {
    try {
        const res = await fetch("https://eco-web-server.vercel.app/Challenges");
        const data = await res.json();
        return data.find((c) => c._id === params.id);
    } catch (error) {
        console.error("Failed to fetch challenge:", error);
        return null;
    }
};

const ChallengesDetails = () => {
    const challenge = useLoaderData();

    if (!challenge)
        return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto mt-10 mb-10 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">

            <div className="flex flex-col md:flex-row gap-6 items-start">

                {/* IMAGE */}
                <img
                    src={challenge.imageUrl}
                    alt={challenge.title}
                    className="w-full md:w-1/2 h-64 object-cover rounded-2xl border-2 border-green-600 shadow-xl"
                />

                {/* DETAILS */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-green-700 mb-3">
                        {challenge.title}
                    </h2>

                    <p className="text-gray-700 mb-4">{challenge.description}</p>

                    <div className="mb-4 text-gray-600 space-y-2">
                        <h1 className="text-4xl font-bold mb-4">{challenge.title}</h1>
                        <p className="text-gray-600 mb-2">
                            <strong>Category:</strong> {challenge.category}
                        </p>
                        <p className="mb-2">
                            <strong>Description:</strong> {challenge.description}
                        </p>
                        <p className="mb-2">
                            <strong>Duration:</strong> {challenge.duration} day(s)
                        </p>
                        <p className="mb-2">
                            <strong>Target:</strong> {challenge.target}
                        </p>
                        <p className="mb-2">
                            <strong>Participants:</strong> {challenge.participants}
                        </p>
                    </div>


                    <div className="flex gap-10">
                        <Link
                            to="/join"
                            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-green-700 transition duration-300 mb-3 w-max"
                        >
                            Join Now →
                        </Link>

                        <Link
                            to="/AllChallenges"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-500 font-semibold rounded-2xl shadow-md hover:bg-green-700 transition duration-300 mb-3 w-max"
                        >
                            ← Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengesDetails;
