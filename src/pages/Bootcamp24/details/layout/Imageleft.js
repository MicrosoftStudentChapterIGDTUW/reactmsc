import React from 'react';

function Teamleft(props) {
    return (
        <>
            <div className="teamleft" data-aos="flip-up" data-aos-duration="1000">
                <img src={props.image} className="w-8rem h-8rem rounded-full inline-block mr-3 mt-3" alt="Mentor Avatar" />
                <div className="teamachievementleft w-60vw h-10rem bg-blue-900 rounded-lg inline-block p-4 text-white ml-2 mt-1">
                    <span className="text-blue-400 text-lg">{props.name}<br /></span>
                    {props.about}
                </div>
            </div>
        </>
    );
}

export default Teamleft;