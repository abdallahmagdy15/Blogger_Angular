import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  //_____________________________start
  persons = [
    {
      name: "Abdallah Magdy",
      photo: "https://res.cloudinary.com/ddtoojz5z/image/upload/v1616970308/zjtochztwqvs5bbldblb.jpg",
      title: "Team Leader | Full Stack .Net Developer",
      bio:
        "I'm a .Net Full Stack developer with industry experience building websites and web applications. I specialize in Asp.Net Core and Angular and have professional experience working with MEAN Stack.I also have an experience working with Android. ",
      social: {
        facebook: "https://fb.com/abdallah.magdy15",
        twitter: "https://twitter.com/abdallahm15",
        linkedin: "https://www.linkedin.com/in/abdallahmagdy15/"
      }
    },
    {
      name: "Ahmed Salah",
      photo: "https://res.cloudinary.com/ddtoojz5z/image/upload/v1617551055/profile-10629561_766049776792856_645984354330777807_n_dxn4hd.jpg",
      title: "Full Stack .Net Developer",
      bio:
        "Software Engineer having a year's experience in programming ad web development. Aims to gain more opportunities specially in .Net development to apply my skills and knowledge into real projects.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Ahmed Elmasry",
      photo: "https://res.cloudinary.com/ddtoojz5z/image/upload/v1617550310/48989496_532357063945782_3488101159086850048_n_zzfeao.jpg",
      title: "Full Stack .Net Developer",
      bio:
        "Software Engineer having a year's experience in programming ad web development. Aims to gain more opportunities specially in .Net development to apply my skills and knowledge into real projects.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];
  selectedPersonIndex = 0
  isSelected = false
  selectedPerson: any
  inlineStyles = ''
  isReady = false
  isOk = false
  selectedPersonData: {
    name: string,
    title: string,
    photo: string,
    bio: string,
    social: {
      facebook: string,
      twitter: string,
      linkedin: string
    },
  }

  selectPerson(index: any, el: any) {
    if (!this.isOk) {
      this.selectedPersonIndex = index;
      this.isSelected = true;
      el.target.parentElement.className == "person-details"
        ? (this.selectedPerson = el.target.parentElement.parentElement)
        : (this.selectedPerson = el.target.parentElement);
      this.selectedPerson.classList.add("person-selected");
      this.selectedPerson.setAttribute(
        "style",
        `width:${this.selectedPerson.offsetWidth}px;`
      );
      this.selectedPersonData = this.persons[index];
      window.setTimeout(() => {
        this.inlineStyles = `width:${this.selectedPerson
          .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
              .selectedPerson.offsetTop}px;position:fixed`;
        this.selectedPerson.setAttribute("style", this.inlineStyles);
      }, 400);
      window.setTimeout(() => {
        this.isReady = true;
        this.isOk = true;
      }, 420);
    } else {
      this.reset();
    }
  }


  reset() {
    this.isReady = false;
    window.setTimeout(() => {
      this.selectedPerson.classList.add("person-back");
    }, 280);
    window.setTimeout(() => {
      this.selectedPerson.setAttribute("style", "");
    }, 340);
    window.setTimeout(() => {
      this.isSelected = false;
      this.selectedPerson.classList.remove("person-back", "person-selected");
      this.isOk = false;
    }, 400);
  }

  //______________________________end
}
