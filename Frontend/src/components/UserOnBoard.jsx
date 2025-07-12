import React, { useState } from "react";
import "../components/UserOnBoard.css";
import logo from "../assets/img1.png";

const UserOnboarding = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    location: "",
    address: "",
    experience: { title: "", company: "", duration: "", description: "" },
    skill: { name: "", type: "offered" },
    availability: "",
    linkedin: "",
    website: "",
    twitter: "",
    github: "",
    portfolio: "",
    photoUrl: "",
    bannerUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("experience.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        experience: {
          ...prev.experience,
          [key]: value
        }
      }));
    } else if (name.startsWith("skill.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        skill: {
          ...prev.skill,
          [key]: value
        }
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Form submitted! Check console.");
  };

  return (
    <div className="onboarding-wrapper">
      <div className="onboarding-container">
        <form className="onboarding-form" onSubmit={handleSubmit}>
          <h2>User Onboarding</h2>
          <p className="onboarding-subtitle">Fill out the details to get started</p>

          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input name="company" placeholder="Company" onChange={handleChange} />
          <input name="location" placeholder="Location" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />

          <h4>Experience</h4>
          <input name="experience.title" placeholder="Title (e.g. Developer)" onChange={handleChange} />
          <input name="experience.company" placeholder="Company" onChange={handleChange} />
          <input name="experience.duration" placeholder="Duration" onChange={handleChange} />
          <input name="experience.description" placeholder="Description" onChange={handleChange} />

          <h4>Skill</h4>
          <input name="skill.name" placeholder="Skill (e.g. React)" onChange={handleChange} />
          <select name="skill.type" onChange={handleChange}>
            <option value="offered">Offered</option>
            <option value="wanted">Wanted</option>
          </select>

          <input name="availability" placeholder="Availability (e.g. weekends)" onChange={handleChange} />

          <h4>Links</h4>
          <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
          <input name="website" placeholder="Website" onChange={handleChange} />
          <input name="twitter" placeholder="Twitter" onChange={handleChange} />
          <input name="github" placeholder="GitHub" onChange={handleChange} />
          <input name="portfolio" placeholder="Portfolio" onChange={handleChange} />

          <h4>Images</h4>
          <input name="photoUrl" placeholder="Photo URL" onChange={handleChange} />
          <input name="bannerUrl" placeholder="Banner URL" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>

        <div className="onboarding-image">
          <img src={logo} alt="Onboarding Visual" />
        </div>
      </div>
    </div>
  );
};

export default UserOnboarding;
