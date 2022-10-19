import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-conocimientos',
    templateUrl: './conocimientos.component.html',
    styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

    // TO-DO: objeto skill
    skill: Skill[] = [
            {   nombre: "html5",
                urlWeb: "https://www.w3.org/html/",
                title: "HTML5",
                srcImg: "../../../assets/img/skills/html5.svg",
            },
            /* RELLENAR CON LO QUE FALTA */
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