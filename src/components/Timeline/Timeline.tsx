import React from "react"
import timelineData from "./timelineData"
import "./timeline.css";

const Timeline: React.FC = () => {
    return (
      <div className="timeline">
        {timelineData.map((item) => (
          <div
            key={item.id.toString()}
            className="timeline-item"
          >
            <h4>{item.startDate.getFullYear()}</h4>
            <img
              src={item.imageSrc}
              alt={item.name}
            />
            <h5>{item.name}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
}

export default Timeline