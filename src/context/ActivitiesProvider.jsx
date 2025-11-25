import { createContext, useState, useEffect } from "react";

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
    };

    const removeActivity = (index) => {
        setActivities((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <ActivitiesContext.Provider value={{ activities, handleJoin, removeActivity }}>
            {children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesProvider;
