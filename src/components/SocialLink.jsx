// import {socialLink} from "../data";

function SocialLink({ link, itemClass }) {
  return (
    <li>
      <a        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={itemClass}>
      
      <i className={link.icon}></i>
      </a>
    </li>
  );
}

export default SocialLink;
 