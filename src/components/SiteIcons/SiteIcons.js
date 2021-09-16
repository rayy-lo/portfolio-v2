import React from 'react';
import siteIconStyles from './siteIcons.module.css';
import GitHubIcon from '../../../static/icons/GitHub-icon.svg';
import FileIcon from '../../../static/icons/file-icon.svg';
import LinkedInIcon from '../../../static/icons/LinkedIn-icon.svg';

function SiteIcons({ lineColor, marginTop, iconColor, isFocusable }) {
    const { line, icon, iconsContainer, siteIconsContainer } = siteIconStyles;

    return (
        <div style={{ marginTop: marginTop }} className={siteIconsContainer}>
            <hr style={{ color: lineColor }} className={line}></hr>
            <div className={iconsContainer}>
                <a
                    href="https://github.com/rayy-lo"
                    aria-label="Go to GitHub profile"
                    tabIndex={isFocusable ? 0 : -1}
                >
                    <img
                        style={{ filter: iconColor }}
                        className={icon}
                        src={GitHubIcon}
                        alt="GitHub icon"
                    />
                </a>
                <a
                    aria-label="Go to LinkedIn profile"
                    href="https://www.linkedin.com/in/raymond-lo-323b1b178/"
                    tabIndex={isFocusable ? 0 : -1}
                >
                    <img
                        style={{ filter: iconColor }}
                        className={icon}
                        src={LinkedInIcon}
                        alt="LinkedIn icon"
                    />
                </a>
            </div>
        </div>
    );
}

export default SiteIcons;
