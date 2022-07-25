import Avatar from '../img/profile-img.jpeg';
import '../styles/sidebar.scss';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <img src={Avatar} alt="Jamile Valério" className='profile-img'/>
      <h2 className="job-role">Front-end Developer</h2>
      <p>contact informations</p>
      <a href="" className='btn-download'>Download resume</a>
    </aside>
  )
}

export default Sidebar