import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import '../styles/maincontent.scss';

const MainContent = () => {
  return (
    <section className='main-content'>
      <About />
      <Technologies />
      <Projects />
    </section>
  )
}

export default MainContent;
