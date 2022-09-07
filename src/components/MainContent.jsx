import About from './About';
import Technologies from './Technologies';
import '../styles/maincontent.scss';

const MainContent = () => {
  return (
    <section className='main-content'>
      <About />
      <Technologies />
    </section>
  )
}

export default MainContent;
