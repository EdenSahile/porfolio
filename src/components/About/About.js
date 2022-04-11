import React, {Component} from 'react';

class About extends Component {
    render() {
        return(  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div class="w-100">
          <h1 class="mb-0">Eden 
        <span class="text-primary">Sahilé</span>
          </h1>
          <div class="subheading mb-5">Massy (91300)  ·
        <a href="mailto:name@email.com">monemail@email.com</a>
          </div>
          <p class="lead mb-5">Passionnée par le développement car d'une part, j'aime résoudre les problèmes et d'autre part, parce-que j'adore apprendre et s'il y a bien un métier où nous apprenons sans cesse, c'est le développement web.
           J'ai fait une formation de développeur fullstack mais j'aimerais me spécialiser en front React JS.
           </p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/eden-sahile-99b088112/" target="_blank" rel="noreferrer noopener">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/EdenSahile"  target="_blank" rel="noreferrer noopener">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>)
    }
}

export default About;