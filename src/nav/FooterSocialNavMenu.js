import React from "react";
import facebookLogo from "../assets/social-icons/rounded/facebook.svg";
import twitterLogo from "../assets/social-icons/rounded/twitter.svg";
import youtubeLogo from "../assets/social-icons/rounded/youtube.svg";
import instagramLogo from "../assets/social-icons/rounded/instagram.svg";

const FooterSocialNavMenu = [
  {
    title: <img src={facebookLogo} alt="equalizer hitch facebook" />,
    uri: "https://www.facebook.com/equalizerhitch",
  },
  {
    title: <img src={twitterLogo} alt="equalizer hitch twitter" />,
    uri: "https://www.twitter.com/equalizerhitch",
  },
  {
    title: <img src={youtubeLogo} alt="equalizer hitch youtube" />,
    uri: "https://www.youtube.com/equalizerhitch",
  },
  {
    title: <img src={instagramLogo} alt="equalizer hitch instagram" />,
    uri: "https://www.instagram.com/equalizerhitch",
  }
];

export default FooterSocialNavMenu;
