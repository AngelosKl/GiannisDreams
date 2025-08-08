import React from 'react';
import { FaTiktok } from 'react-icons/fa';

const Music = () => {
    return (
        <div className="music-container">
            <h1>🎧 Music Drops</h1>
            <p className="music-quote">Για τους loyalists, αυτό είναι το δηλητήριο σας.</p>

            <div className="track">
                <h3>
                    Kamine
                    <a
                        href="https://www.tiktok.com/@giannissings/video/7524811853587811606"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tiktok-link"
                    >
                        <FaTiktok />
                    </a>
                </h3>
            </div>

            <div className="track">
                <h3>
                    Duck Dodgers
                    <a
                        href="https://www.tiktok.com/@giannissings/video/7460852395325558038"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tiktok-link"
                    >
                        <FaTiktok />
                    </a>
                </h3>
            </div>
        </div>
    );
};

export default Music;
