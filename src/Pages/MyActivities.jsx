import React, { useContext } from "react";
import { ActivitiesContext } from "../context/ActivitiesProvider";

export default function MyActivities() {
    const { activities, removeActivity } = useContext(ActivitiesContext);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">My Activities</h1>

            {activities.length === 0 ? (
                <p>No activities joined yet.</p>
            ) : (
                <div className="space-y-4">
                    {activities.map((a, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-md shadow ring-2 ring-primary/40 flex justify-between items-start"
                        >
                            {/* DETAILS */}
                            <div>
                                <p><strong>Name:</strong> {a.fullName}</p>
                                <p><strong>Email:</strong> {a.email}</p>
                                <p><strong>Phone:</strong> {a.phone}</p>
                                <p><strong>Activity:</strong> {a.activityType}</p>
                            </div>

                            {/* REMOVE BUTTON */}
                            <button
                                onClick={() => removeActivity(i)}
                                className="btn btn-sm bg-red-600 text-white hover:bg-red-700 ml-4"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
