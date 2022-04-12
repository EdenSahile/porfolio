# Projet : Portfolio

Il s'agit d'un porfolio one page avec plusieurs parties.

- Framework and library : Botstrap et fontAwesome 



## Partie 1 : About

- J'ai choisi de ne pas mettre mon adresse mail pour éviter d'être spammée. En effet, lors du passage des robots Google sur une page, ils récupèrent les mails pour envoyer de la publicité. C'est pourquoi, je préfererais plutôt mettre un formulaire de contact plutôt que mon mail.

- J'ai mis des liens vers les réseaux sociaux en 'target=_blank' sans oublier d'ajouter 'rel: noreffere noopener'. 
  
  - **noopener** : Pour éviter que la page de destination ait accès à la page d'origine (provenance du lien). Si la page de destination a accès à la page d'origine. Celle-ci pourra changer la page d'origine en y affichant des publicités, contenu inapproprié, faux formulaire d'inscription pour voler les identifiants.
  - 
  - **noreferrer** : Pour éviter que la page de destination sache d'où viennent les visiteurs. Habituellement, la page connaît la provenance des visiteurs grâce à 'document.referrer". En effet, le liend d'origine est affiché. Avec l'ajout de noreferrer, document.referrer sera égal à null ou vide.


## Partie 2 : Formation


- **Data** : J'ai créé un tableau d'objets avec toutes les formations effectuées afin de boucler dessus et récupérer chaque information.

- Sur cette partie, j'ai dû faire attention lors de la boucle '**.map**' . En effet, il fallait que je fasse attention à ne pas boucler sur l'élément section puis les 3 premières div. J'ai donc sorti ces éléments de la boucle afin d'éviter d'avoir plusieurs sections pour chaque formation alors que la section contient toutes les formations.

## Partie 3 : Expériences

- Data : J'ai créé un objet JS afin d'y intégrer toutes les informations. Pour la clé "description", j'ai fait plusieurs tests. voir exemples ci-dessous mais j'avais à chaque fois , l'erreur suivante :*objects are not valid as a React child* lorsque je faisais ma boucle .map sur *experiences*. J'ai bien spécifié l'élément souhaité avec la dot notation afin que React sache ce que je veux vraiment mais en vain.

```JS
const experiences = [
  {
    titre:"",
    contrat : "",
    entreprise : "",
    dates:"",
    description:{
    newsletters:[ plusieurs élements]
    dév : [ plusieurs éléments]
    }
  }
 // autre test

 description:[
   {newsletters : [ plusieurs élements]}
   {dév: [ plusieurs élements]} 
]

]
  ```

  J'ai donc modifié mon objet pour faire au plus simple. J'ai retiré les sous- catégories et j'ai tout mis dans un tableau

  ```JS
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
  ```

- **Affichage de la description** :
      
      - J'ai choisi de créer une liste <ul> pour afficher les éléments du tableau  'description'.
      - J'ai créé un composant intermédiaire " Description" afin de récupérer chaque élement de chaque tableau
      - Via les props, j'ai pu récupérer l'objet "experiences" avec toutes les données.
      - J'ai stocké dans la variable "desc", les descriptions
      - J'ai bouclé sur le tableau "description" puis j'ai affiché les éléments dans un <li>


```JS
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
                                <div class="subheading ">{exp.entreprise}</div>
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


```


## Conlusion

Ce projet m'a permis de faire face à certains problèmes que j'ai pu résoudre grâce à mes différentes recherches internet et tests. Certes, j'ai pris du temps à résoudre certains problèmes mais c'est important pour moi de les résoudres tout de suite car cela me permettra d'y faire face rapidement lorsque je serai de nouveau confrontée à ce ou ces problème(s). Selon moi, il faut le prendre le temps qu'il faut surtout quand nous sommes en formation pour apprendre à résoudre les problèmes même si ça prend du temps. Grâce à la magie de Google, on a forcément la réponse à nos problèmes car d'autres dévs ont déjà eu à faire face à ces problèmes. Je ne voulais pas avancer en me disant que je m'en occuperai plus tard.
J'essaye à chaque nouveau projet d'implémenter les maj de REACT 18 comme le RenderDOM.CreateRoot même si dans ma formation, c'est une version plus ancienne de React qui est utilisée.