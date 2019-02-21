import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  isVisible = true;
  visibility = 'shown';
  check = true;

  skills = [
    [
      {
        name: 'Angular',
        img: '/assets/imgs/skills/angular.png',
      },
      {
        name: 'Typescript',
        img: '/assets/imgs/skills/typescript.png',
      },
      {
        name: 'Javascript',
        img: '/assets/imgs/skills/javascript.png',
      }
    ],
    [
      {
        name: 'HTML5',
        img: '/assets/imgs/skills/html.png',
      },
      {
        name: 'CSS3',
        img: '/assets/imgs/skills/css.png',
      },
      {
        name: 'NodeJS',
        img: '/assets/imgs/skills/nodejs.jpg',
      }
    ],
    [
      {
        name: 'Java',
        img: '/assets/imgs/skills/java.jpg',
      },
      {
        name: 'Sourcetree',
        img: '/assets/imgs/skills/sourcetree.png',
      },
      {
        name: 'Git',
        img: '/assets/imgs/skills/git.png',
      },

    ],
    [
      {
        name: 'PostgreSQL',
        img: '/assets/imgs/skills/PostgreSQL.png',
      },
      {
        name: 'Spring Boot',
        img: '/assets/imgs/skills/SpringBoot.png',
      },
      {
        name: 'Ionic Framework (learning in progress)',
        img: '/assets/imgs/skills/ionic.png',
      },

    ],
  ];

  ngOnInit() {
    // console.log(this.skills);
  }

  ngOnChanges() {
    //  this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  fadeClick() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
    this.check = !this.check;
  }

  onMouse() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
    console.log('onMouse');
    // this.visibility = 'hidden';
  }


}
