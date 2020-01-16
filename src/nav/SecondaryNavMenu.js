import React from "react";
import facebookLogo from "../assets/social-icons/freeform/facebook.svg";
import twitterLogo from "../assets/social-icons/freeform/twitter.svg";
import youtubeLogo from "../assets/social-icons/freeform/youtube.svg";
import instagramLogo from "../assets/social-icons/freeform/instagram.svg";

const SecondaryNavMenu = [
    {
        title: "contact us",
        uri: "/"
    },
    {
        title: "warranty registration",
        uri: "/"
    },
    {
        title: "(800) 478-5578",
        uri: "tel: 8004785578",
        externalLink: true
    },
    {
        title: <img src={facebookLogo} alt="equalizer hitch facebook" />,
        uri: "https://www.facebook.com/equalizerhitch",
        externalLink: true,
        socialLink: true
    },
    {
        title: <img src={twitterLogo} alt="equalizer hitch twitter" />,
        uri: "https://www.twitter.com/equalizerhitch",
        externalLink: true,
        socialLink: true
    },
    {
        title: <img src={youtubeLogo} alt="equalizer hitch youtube" />,
        uri: "https://www.youtube.com/equalizerhitch",
        externalLink: true,
        socialLink: true
    },
    {
        title: <img src={instagramLogo} alt="equalizer hitch instagram" />,
        uri: "https://www.instagram.com/equalizerhitch",
        externalLink: true,
        socialLink: true
    }
];

export default SecondaryNavMenu;