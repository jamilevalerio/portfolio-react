import '../styles/socialnetworks.scss';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jamilesvalerio/"},
  {name: "github", icon: <FaGithub/>, link: "https://github.com/jamilevalerio"},
];

const SocialNetworks = () => {
  return (
    <section className='social-network'>
      {socialNetworks.map((network) => 
      <a href={network.link} target="_blank" className="network-icon" key={network.name}>
        {network.icon}
      </a>
      )}
    </section>
  )
}

export default SocialNetworks
