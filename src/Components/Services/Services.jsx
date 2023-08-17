import React from "react";
import "./Services.css";
import ServiceInfo from "./ServiceInfo";

const ServiceCard = ServiceInfo.map((data) => (
  <div className="service-card" key={data.id}>
    <span className="icon">
      <img src={data.icon} alt="" srcset="" />
    </span>
    <span className="title">{data.title}</span>
    <span className="passage">{data.passage}</span>
  </div>
));

const Services = () => {
  return (
    <div className="container">
      <div className="what-we-offer">
        <span className="title">What we offer</span>
        <span className="passage">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          non
        </span>
        <div className="service-container">{ServiceCard}</div>
      </div>
      <div className="pet-adoption">
        <div className="left-side">
          <span className="title">
            Pet Adoption. Be part of Something Beautiful.
          </span>
          <span className="passage">
            Phosfluorescently engage worldwide methodologies with web enabled
            technology.
          </span>
          <ul>
            <li>
              Believes creating a long-term relationship with you and your pet
              is best.
            </li>
            <li>
              Service is monitored by the local owner and team of Pet Care
              Coordinators.
            </li>
            <li>
              If a Pet Care Provider gets sick and needs help, our team will
              automatically work on a backup.
            </li>
            <li>
              Local owner recruits, trains and mentors their team of Pet Care
              Providers.
            </li>
          </ul>
        </div>
        <div className="right-side">
          <img src="/pet-adoption.jpg" alt="" srcset="" />
          <span>
            * Photo by{" "}
            <a href="https://unsplash.com/@khodzinskyi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Vitalii Khodzinskyi
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/AHeBNshx5GI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
