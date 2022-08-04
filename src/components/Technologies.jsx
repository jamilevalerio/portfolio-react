import {DiJavascript1, DiHtml5, DiGit, DiSass, DiPhp, DiDrupal, DiBootstrap, DiReact, DiJsBadge} from 'react-icons/di';

import '../styles/technologies.scss'

const devTechnologies = [
  {name: "javascript", icon: <DiJsBadge/>, title: "Javascript", content: "Intermediary knowledge, searching to learn more and practice the use of the language on real world."},
  {name: "html", icon: <DiHtml5/>, title: "HTML5", content: "Advanced knowledge on HTML5 semantic tags"},
  {name: "git", icon: <DiGit/>, title: "Git", content: "Basic knowledge of review and code versioning."},
  {name: "sass", icon: <DiSass/>, title: "Sass", content: "A lot of exeperience by using im my internship, usually using the SCSS syntax (btw, this project it's also using Sass!)"},
  {name: "php", icon: <DiPhp/>, title: "PHP 8", content: "Basic knowledge, studying it to use Drupal and learning how to do dinamic websites."},
  {name: "drupal", icon: <DiDrupal/>, title: "Drupal", content: "I am having the opportunity to work with this framework in my current internship."},
  {name: "bootstrap", icon: <DiBootstrap/>, title: "Bootstrap", content: "Intermediate knowledge and some exeperience working on my Internship. See the project 'Music Store' below."},
  {name: "react", icon: <DiReact/>, title: "React", content: "Learning and focusing on this framework right now (by the way this project it's using React!)"},
];

const Technologies = () => {
  return (
    <section className="technologies">
      <h2>Technologies</h2>
      <div className="tech-info">
        {devTechnologies.map((tech) =>
          <div className={'tech-card ' + tech.name} key={tech.name}>
            {tech.icon}
            <div>
              <h3>{tech.title}</h3>
              <p>{tech.content}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Technologies
