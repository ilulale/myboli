import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  aboutus = {
    name:'Mrs. Seema Nitin Bakshi',
    phone:9370260591,
    body:`Working as Director, Myboli Coaching Classes for last 20 years. <br><br>
    
    Specialization in coaching of Sanskrit and Marathi languages to students up to 12th std for a period of 20 years and have taught more than ten thousand students. <br><br>
    
    As a student in school and college, participated and won so many elocution competitions addressing many subjects relating to education and social issues. <br><br>
    
    Started coaching by teaching to poor students in one social institution, Renuka Mata Mitra Mandal, Old City, Akola for a period of 5 years. <br><br>
    
     She has been writing articles in several Marathi newspapers like Divya Marathi, Lokmat etc for past several years on the subjects pertaining to education and media. <br><br>
    
    She has been a part of several talk shows conducted by Divya Marathi, a leading Marathi newspaper, on social and educational matters. <br><br>
    
    She was a part of Akola Radio Station for a part of three years wherein she dealt with issues pertaining to entertainment, education and social media. <br><br>
    `,
    slogan: `Her sole aim is to return all the good things to the society which she has received over a period of time. She intends to contribute generously in the field of education in the matters relating to teaching, managing as well as reforming education sector at different levels.  `
    
    }

  constructor() { }

  ngOnInit() {
  }

}
