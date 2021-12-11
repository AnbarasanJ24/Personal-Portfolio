import React from "react";
import { socialData } from "../../data/social-icon";
import './social-content.css';

const SocialContent = () => {
    const data = socialData;

    return (
        <div className="social-icon-container">
            {
                data.map(icon => {
                    return (
                        <a href={icon.link}>
                            <div className="social-icon">
                                <img src={icon.icon} alt={icon.platForm} />
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SocialContent
