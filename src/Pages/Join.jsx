import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ActivitiesContext } from "../context/ActivitiesProvider";

const Join = () => {
  const navigate = useNavigate();
  const { handleJoin } = useContext(ActivitiesContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    activityType: "",
  });

  // update input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // final submit
  const onSubmit = () => {
    handleJoin(formData);   // pass the data to context
    navigate("/activities"); 
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join the Activity!</h1>
          <p className="py-6">
            Fill in your details below to join this event or challenge.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Full Name</label>
              <input
                name="fullName"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your full name"
                onChange={handleChange}
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                onChange={handleChange}
              />

              <label className="label">Phone Number</label>
              <input
                name="phone"
                type="tel"
                className="input input-bordered w-full"
                placeholder="Phone number"
                onChange={handleChange}
              />

              <label className="label">Select Activity</label>
              <select
                name="activityType"
                className="select select-bordered w-full"
                onChange={handleChange}
              >
                <option value="">Select an activity</option>
                <option value="Challenge">Challenge</option>
                <option value="Event">Event</option>
              </select>

              <button
                onClick={onSubmit}
                className="btn btn-success mt-4 w-full"
              >
                Join Now
              </button>
            </fieldset>

            <p className="mt-4 text-center text-sm text-gray-500">
              Already joined?{" "}
              <Link to="/activities" className="link link-hover text-green-600">
                View My Activities
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
