import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
          <section
            class="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="about"
          >
            <div class="w-100">
              <h1 class="mb-0">
                Eden
                <span class="text-primary">Sahilé</span>
              </h1>
              <div class="subheading mb-5">
                Massy (91300) ·
                <a href="mailto:name@email.com">monemail@email.com</a>
              </div>
              <p class="lead mb-5">
                Passionnée par le développement web, j'ai effectué une formation
                de plusieurs mois pour devenir Développeuse web Fullstack.
                J'aimerais me spécialiser en front-end, notamment en React JS.
                J'aime résoudre les problèmes et apprendre sans cesse, c'est
                pourquoi, je suis passionnée par ce métier dans lequel
                l'apprentissage dure toute la vie. Mon objectif ultime est de
                devenir Développeuse web Fullstack mais je tiens tout d'abord à
                renforcer au maximum mes compétences en front. Je pense que ma
                formation en UX Design serait un plus pour un poste de
                développeur web.
              </p>
              <div class="social-icons">
                <a
                  href="https://www.linkedin.com/in/eden-sahile-99b088112/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/EdenSahile"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        );
    }
}

export default About;