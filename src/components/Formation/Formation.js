import React, { Component } from 'react';
import { Fragment } from 'react';



const formations = [


  {
      school: 'Alphorm',
      degree: 'React JS',
      subject: 'Développement',
      dates: '7 février à ce jour'
    },
    {
      
      school: 'O\'Clock',
      degree: 'Développeur fullstack',
      subject: 'Développement',
      dates: '27 Sept 2021 -13 janvier 2022'
    },
    {
      school: 'Sup de Pub',
      degree: 'Bachelor concepteur en communication visuelle, spé UX DESIGN - WEB DESIGN - PP MOBILE',
      subject: 'UX Design',
      dates: 'Mars 2018 - Mars 2019'
    },

     {
      school: 'Sup de Pub',
      degree: 'Piscine - Formation intensive',
      subject: 'Développement web, webdesign et marketing digital',
      dates: 'Janvier 2018 - Février 2018'
    },
     {
      school: 'ISCG',
      degree: 'BTS Assistant de Manager',
      subject: 'Ecole de commerce',
      dates: 'Juillet 2015 - Juin 2016'
    },
    {
      school: 'Adab Services',
      degree: 'Certification',
      subject: 'Web design',
      dates: '2017'
    },
    {
      school: 'Afet Formation',
      degree: 'Certification',
      subject: 'Wordpress',
      dates: '2017'
    },
    {
      school: 'Adab Services',
      degree: 'Certification',
      subject: 'Photoshop',
      dates: '2016'
    },
     {
      school: 'Mook- formation en ligne',
      degree: 'Certification',
      subject: 'MailChimp',
      dates: '2016'
    }
  ]



class Formation extends Component {



  render() {

    return (
     
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="formation">
          <div className="w-100">
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            
            {formations.map(formation=>{
               return(

                <Fragment>
                  <h3 className="mb-0">{formation.school}</h3>
                  <div className="subheading mb-3">{formation.degree}</div>
                  <div className='date'>
                    <p className='d-inline'>{formation.subject}  </p>
                    <div className="resume-date  text-primary">{formation.dates}</div>
                  </div>
                </Fragment>
                )
         
              })}
          </div>
          </div>
          </div>
        </section>
  
    )
  }

}





export default Formation;