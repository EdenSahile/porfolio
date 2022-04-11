# Projet : Portfolio

Il s'agit d'un porfolio one page avec plusieurs parties.

- Framework and library : Botstrap et fontAwesome 



## Partie 1 : About

- J'ai choisi de ne pas mettre mon adresse mail pour éviter d'être spammée. En effet, lors du passage des robots Google sur une page, ils récupèrent les mails pour envoyer de la publicité. C'est pourquoi, je préfererais plutôt mettre un formulaire de contact plutôt que mon mail.

- J'ai mis des liens vers les réseaux sociaux en 'target=_blank' sans oublier d'ajouter 'rel: noreffere noopener'. 
  
  - **noopener** : Pour éviter que la page de destination ait accès à la page d'origine (provenance du lien). Si la page de destination a accès à la page d'origine. Celle-ci pourra changer la page d'origine en y affichant des publicités, contenu inapproprié, faux formulaire d'inscription pour voler les identifiants.
  - 
  - **noreferrer** : Pour éviter que la page de destination sache d'où viennent les visiteurs. Habituellement, la page connaît la provenance des visiteurs grâce à 'document.referrer". En effet, le liend d'origine est affiché. Avec l'ajout de noreferrer, document.referrer sera égal à null ou vide.