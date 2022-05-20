import React, { Component } from 'react';
import { Fragment } from 'react';


const experiences=[

  {
  titre:"Assistante Commerciale",
  contrat :"CDD",
   entreprise:"Nathan Diffusion",
  dates : "Janvier 2021 - septembre 2021",
     description: [
      "- Intégration de newsletters en HTML et CSS ",
      "- Réalisation des outils d'aide à la vente des représentants (définitions des objectifs / promotions / campagnes, élaboration d'outils de réassort, rédaction des lettres hebdomadaires)",
      "- Suivi des objectifs (élaboration et mise à jour des outils de pilotage pour transmission à la Direction Commerciale, bilan et analyse des promotions et campagnes)",
      "- Organisation et gestion des animations T’Choupi (librairies - Cultura - Espaces Culturels Leclerc)"
    ]

},

  {
  titre:"Responsable Diffusion - Distribution",
   contrat :"CDI",
   entreprise:"Editions Leduc",
  dates : "Nov 2019 - Dé 2020",
     description: [

      "- Pilotage des campagnes publicitaires sur AMS (Amazon Marketing Service) ",
      "- Management du Chargé du référencement web",
      "- Briefs à la graphiste (affiches - BDC- PLV - plaquettes)",
      "- Responsable du respect de toutes les échéances",
      "- Interface entre les éditions Leduc et Dilisco (Diffuseur)"
     ]
},
 {
  titre:"Chargée de marketing digital et UX Design",
   contrat :"Alternance - 2ème reprise d'études",
   entreprise:"Média Diffusion",
  dates : "Mars 2018 - mars 2019",
     description:[
      "- Recueil des besoins/ Création de la base de données",
      "- Choix de l’outil d’emailing, création des modèles...",
      "- Pilotage des campagnes et suivi des performances",
    
      "- Analyse des p]roblématiques, des attentes et des besoins des utilisateurs",
      "- Analyse de la concurrence et des bonnes pratiques du secteur",
      "-  Entretiens réguliers avec les parties prenantes",
      "- Présentation de l'avancement du projet à chaque nouvelle étape",
      "- Création de wireframes et prototypes",
      "- Amélioration de l’expérience utilisateur (UX) sur le site web",
      "- Création de bannières (Photoshop-Illustrator)"

        ]
},
  {
   titre:"Responsable clientèle",
    contrat :"CDD",
   entreprise:"Média Diffusion",
   dates : "Mai 2017 - octobre 2017",
    description:[
    "- Gestion d'un portefeuille clients non livre",
    "- Développement du CA par la mise en oeuvre de plans d'actions",
    "- ..."
 ]

 },
 {
  titre:"Chargée de communication web et print",
   contrat :"stage - 1ère reprise d'études",
   entreprise:"CGI Immobilier",
  dates : "juillet 2015 - mai 2016",
    description:[
      "- Création de supports de communication (brochures, plaquettes…)",
      "- Création et animation de la page Facebook de l’agence :",
      "- Mise à jour du site web",
      "Traduction de documents en anglais",
      "- Mise en conformité de l’entreprise avec les affichages obligatoires",
      "- Accueil physique et téléphonique des locataires, acheteurs et vendeurs (français et étrangers)",
      "- Prospection sur le web (PAP, Le Bon Coin...)"
    ]
     
},
 {
  titre:"Assistante de Direction Commerciale Grands Comptes et communication web",
  contrat :"CDI",
  entreprise:"Dilisco",
  dates : "Juin 2007 - mai 2017",
  description:[
       
    "- Interface entre les éditeurs, les sites web et bases de données (Amazon-Fnac-Decitre-Dilicom, Electre, Titelive...)",
    "- Traitement des appels d’offres du GALEC ",
    "- Référencement des nouveautés auprès à des enseignes et sites web ",
    "- Extraction et analyse hebdomadaire des titres en rupture",
    " - Gestion du réapprovisionnement, optimisation du stock ",
    "- Vérification de la disponibilité de chaque nouveauté ",
    "- Suivi des mises à jour des visuels",
    "- Gestion des demandes de feuilletage en ligne et du Club des testeurs",
    "- Création, mise à jour des comptes éditeurs sur Vendor Central ",
    "- Résolution des litiges via Vendor Central (absence des boutons d’achat",
    "- dysfonctionnement des comptes, mise à jour des ouvrages ...)"
       
    ] 
},



]


const Description=({
 exp
})=>{
  let desc=exp.description
      return(
        desc.map(d=>{
          return(
           <li className='list-unstyled text-start'>{d}</li>
         )
       })
     ) 
}


 class Experience extends Component {
  render() {
    return (
        <Fragment>
          <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div class="w-100">
                  {
                    experiences.map(exp=>{
                      console.log(exp.description)
                      return(
                        <Fragment>
                          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="resume-content">
                              <h3 class="mb-0">{exp.titre}</h3>
                                <div class="subheading ">{exp.entreprise} - {exp.contrat}</div>
                                <div class="resume-date ">
                                  <span class="text-primary ">{exp.dates}</span>
                                </div>
                                <ul className="mt-4">
                                  <Description exp={exp}/>
                                </ul>
                            </div>
                          </div>
                        </Fragment>
                      )
                    })
                  }
              
            </div>
          </section>
      </Fragment> 
    )
  
  
  }
}
export default Experience;