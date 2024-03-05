import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-conocimientos',
    templateUrl: './conocimientos.component.html',
    styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

    skill: Skill[] = [
            {   nombre: "html5",
                urlWeb: "https://www.w3.org/html/",
                title: "HTML5",
                srcImg: "../../../assets/img/skills/html5.svg",
            },
            {   nombre: "css3",
                urlWeb: "https://www.w3schools.com/css/",
                title: "CSS3",
                srcImg: "../../../assets/img/skills/css3.svg",
            },
            {   nombre: "materialize",
                urlWeb: "https://materializecss.com/",
                title: "Materialize Css",
                srcImg: "../../../assets/img/skills/materialize.svg",
            },
            {   nombre: "bootstrap",
                urlWeb: "https://getbootstrap.com",
                title: "Bootstrap",
                srcImg: "../../../assets/img/skills/bootstrap.svg",
            },
            {   nombre: "javascript",
                urlWeb: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                title: "JavaScript",
                srcImg: "../../../assets/img/skills/js.svg",
            },
            {   nombre: "typescript",
                urlWeb: "https://www.typescriptlang.org/",
                title: "TypeScript",
                srcImg: "../../../assets/img/skills/ts.svg",
            },
            {   nombre: "vue3",
                urlWeb: "https://vuejs.org/",
                title: "Vue 3",
                srcImg: "../../../assets/img/skills/vue-js.svg",
            },
            {   nombre: "vuetify",
                urlWeb: "https://vuetifyjs.com/",
                title: "Vuetify",
                srcImg: "../../../assets/img/skills/vuetify.svg",
            },
            {   nombre: "angular",
                urlWeb: "https://angular.io",
                title: "Angular",
                srcImg: "../../../assets/img/skills/angular.svg",
            },
            {   nombre: "python",
                urlWeb: "https://www.python.org",
                title: "Python",
                srcImg: "../../../assets/img/skills/python.svg",
            },
            {   nombre: "django",
                urlWeb: "https://www.djangoproject.com/",
                title: "Django",
                srcImg: "../../../assets/img/skills/django.png",
            },
            {   nombre: "java",
                urlWeb: "https://www.java.com",
                title: "Java",
                srcImg: "../../../assets/img/skills/java.svg",
            },
            {   nombre: "git",
                urlWeb: "https://git-scm.com/",
                title: "Git",
                srcImg: "../../../assets/img/skills/git.svg",
            },
            {   nombre: "linux",
                urlWeb: "https://www.linux.org/",
                title: "GNU/Linux",
                srcImg: "../../../assets/img/skills/linux.svg",
            },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
interface Skill {
    nombre: string; // alt de la img
    urlWeb: string; // enlace web al sitio de la tecnología
    title: string;  // title o tooltip
    srcImg: string; // src de la imagen
}