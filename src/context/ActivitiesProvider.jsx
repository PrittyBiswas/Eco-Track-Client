import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const ActivitiesContext = createContext();

const ActivitiesProvider = ({ children }) => {
    const [activities, setActivities] = useState(() => {
        // Load from localStorage on first render
        const saved = localStorage.getItem("activities");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("activities", JSON.stringify(activities));
    }, [activities]);

    const handleJoin = (data) => {
        setActivities((prev) => [...prev, data]);

        Swal.fire({
            icon: "success",
            title: "Joined Successfully!",
            text: "Your activity has been added.",
            confirmButtonColor: "#16a34a",
        });
    };


    const removeActivity = (index) => {
        setActivities((prev) => prev.filter((_, i) => i !== index));
        Swal.fire({
            icon: "error",
            title: "Removed",
            text: "Activity has been removed successfully.",
            confirmButtonColor: "#d33",
            iconColor: "#d33"
        });
    };


    const updateActivity = (index, newData) => {
        setActivities((prev) =>
            prev.map((item, i) => (i === index ? newData : item))
        );
    };

    return (
        <ActivitiesContext.Provider value={{ activities, handleJoin, removeActivity, updateActivity }}>
            {children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesProvider;
