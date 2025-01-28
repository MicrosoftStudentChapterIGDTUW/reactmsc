// Timeline.js
import React from "react";
import { ReactComponent as WorkIcon } from "./asset/work.svg";
import { ReactComponent as SchoolIcon } from "./asset/school.svg";
import { Link } from "react-router-dom";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const Timeline = () => {
  let workIconStyles = { background: "#012147" };
  let schoolIconStyles = { background: "#012147" };

  return (
    <div className="timeline-container">
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
             
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
              <p id="description">{element.description}</p>

              {showButton && (
                <Link
                to={element.link}
                className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
              >
                {element.buttonText}
              </Link>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
