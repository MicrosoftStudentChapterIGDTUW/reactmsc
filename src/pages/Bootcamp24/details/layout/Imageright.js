import React from 'react';

function Teamright(props) {
    return (
        <>
            <div className="teamright" data-aos="flip-up" data-aos-duration="1000">
                <div className="teamachievement w-60vw h-10rem bg-blue-900 rounded-lg inline-block p-4 text-white mr-2 mt-1">
                    <span className="text-blue-400 text-lg">{props.name}<br /></span>
                    {props.about}
                </div>
                <img src={props.image} className="w-8rem h-8rem rounded-full inline-block ml-3 mt-3" alt="Mentor Avatar" />
            </div>
        </>
    );
}

export default Teamright;