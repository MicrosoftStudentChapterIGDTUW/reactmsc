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
    <div className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <h1 className="mt-8 text-3xl md:text-5xl lg:text-[5em] text-center font-['Bebas_Neue'] text-[#012147] mb-8 md:mb-12">
        Timeline
      </h1>
      
      <div className="max-w-7xl mx-auto"> {/* Added container for max width */}
        <VerticalTimeline lineColor="#012147">
          {timelineElements.map((element) => {
            const isWorkIcon = element.icon === "work";
            const showButton = element.buttonText?.trim();

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="text-[#012147] text-center md:text-right text-sm md:text-base"
                iconStyle={iconStyle}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                contentStyle={{
                  background: "#012147",
                  color: "#ffffff",
                  borderRadius: "1rem",
                  boxShadow: "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)",
                  padding: "1.5em 2em",
                  textAlign: "center", // Center all text
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #012147",
                }}
              >
                <div className="flex flex-col items-center gap-3"> {/* Center content */}
                  <h3 className="text-lg md:text-xl font-bold">
                    {element.title}
                  </h3>
                  <h5 className="text-base md:text-lg italic">
                    {element.location}
                  </h5>
                  <p className="text-sm md:text-base max-w-prose mx-auto"> {/* Limit text width */}
                    {element.description}
                  </p>

                  {showButton && (
                    <Link
                      to={element.link}
                      className={`
                        inline-block mt-4 px-6 py-2 rounded-md
                        bg-[#2f67f8] text-white
                        transition-all duration-300
                        hover:bg-[#6ac8ee] hover:scale-105
                        text-center text-sm md:text-base
                        w-fit mx-auto
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
    </div>
  );
};

export default Timeline;
