import React from "react";

import "./footer.css";

const Footer = () => {
  const kylegithub = "https://github.com/Kyle-Givler";
  const samgithub = "https://github.com/hboiled";

  return (
    <div className="footer">
      <Link text={kylegithub} name={"K Givler GitHub"} />
      <Link text={samgithub} name={"hboiled GitHub"} />
      <p className="copyright">&copy; KGivler DiscordBot Web Portal 2021</p>
    </div>
  );
};

const Link = (props) => {
  return (
    <div className="link">
      <a href={props.text}>{props.name}</a>
    </div>
  );
};

export default Footer;
