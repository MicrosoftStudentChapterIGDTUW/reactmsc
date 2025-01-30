// Timeline.js
import React from "react";
import { ReactComponent as WorkIcon } from "./asset/work.svg";
import { ReactComponent as SchoolIcon } from "./asset/school.svg";
import { Link } from "react-router-dom";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const iconStyle = { background: "#012147" };

  return (
    <div className="py-12 px-8 bg-white">
      <h1 className="mt-8 text-3xl md:text-5xl lg:text-[5em] text-center font-['Bebas_Neue'] text-[#012147]">
        Timeline
      </h1>
      
      <VerticalTimeline lineColor="#012147">
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton = element.buttonText?.trim();

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-[#012147] text-left md:text-right"
              iconStyle={iconStyle}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              contentStyle={{
                background: "#012147",
                color: "#ffffff",
                borderRadius: "1rem",
                boxShadow: "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)",
                padding: "2em 3em",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #012147",
              }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{element.title}</h3>
                <h5 className="text-lg italic">{element.location}</h5>
                <p className="text-base">{element.description}</p>

                {showButton && (
                  <Link
                    to={element.link}
                    className={`
                      inline-block mt-4 px-4 py-2 rounded-md
                      ${isWorkIcon ? 'bg-[#2f67f8]' : 'bg-[#2f67f8]'}
                      text-white transition-colors duration-300
                      hover:bg-[#6ac8ee] text-center
                      w-fit
                    `}
                  >
                    {element.buttonText}
                  </Link>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;