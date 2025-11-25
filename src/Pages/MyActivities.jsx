import React, { useContext, useState } from "react";
import { ActivitiesContext } from "../context/ActivitiesProvider";

export default function MyActivities() {
    const { activities, removeActivity, updateActivity } = useContext(ActivitiesContext);

    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({
        fullName: "",
        email: "",
        phone: "",
        activityType: "",
    });

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditData(activities[index]); 
    };

    const saveChanges = () => {
        updateActivity(editingIndex, editData);
        setEditingIndex(null);
    };

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

                            {/* BUTTONS */}
                            <div className="flex flex-col gap-2 ml-4">
                                <button
                                    onClick={() => startEditing(i)}
                                    className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => removeActivity(i)}
                                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* EDIT MODAL */}
            {editingIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Activity</h2>

                        {/* Form */}
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={editData.fullName}
                                onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
                                className="input input-bordered w-full"
                                placeholder="Full Name"
                            />

                            <input
                                type="email"
                                value={editData.email}
                                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                className="input input-bordered w-full"
                                placeholder="Email"
                            />

                            <input
                                type="text"
                                value={editData.phone}
                                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                                className="input input-bordered w-full"
                                placeholder="Phone"
                            />

                            <input
                                type="text"
                                value={editData.activityType}
                                onChange={(e) => setEditData({ ...editData, activityType: e.target.value })}
                                className="input input-bordered w-full"
                                placeholder="Activity Type"
                            />
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="mt-4 flex justify-end gap-3">
                            <button
                                onClick={() => setEditingIndex(null)}
                                className="btn"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={saveChanges}
                                className="btn bg-green-600 text-white hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
