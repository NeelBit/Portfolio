import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

    proyectos: Proyecto[] = [
        {   
            nombre: "breaking bad wiki",
            valor: "breaking bad",
            srcImg: "../../../assets/img/capturabreaking-bad-wiki.jpeg",
            srcAlt: "captura de app web hecha en angular de la wiki de la serie breaking bad",
            descripcion: 'Sitio web hecho en Angular de la wiki de la serie Breaking bad.',
            source: 'https://github.com/NeelBit/breaking_bad_wiki_angular',
            demo: ''
        },
        {
            nombre: "a lo artesanal",
            valor: "a lo artesanal",
            srcImg: "../../../assets/img/capturaAloartesanalGenericLaptop.jpg",
            srcAlt: "captura de sitio web landing page html css y js a lo artesanal",
            descripcion: 'Landing page en HTML, CSS y JS, para mini emprendimiento "a lo artesanal".',
            source: "https://github.com/NeelBit/a_lo_artesanal",
            demo: "https://aloartesanal.netlify.app/"
        },
        {
            nombre: "Despertares",
            valor: "despertares",
            srcImg: "../../../assets/img/CapturaDespertaresPropuesta.jpeg",
            srcAlt: "captura de sitio web simple despertares propuesta en html, css y javascript",
            descripcion: 'Sitio web simple estilo landing page, propuesta para "centro de día despertares". Hecho con HTML, CSS Y JS.',
            source: "https://github.com/NeelBit/despertares_propuesta",
            demo: "https://neelbit.github.io/despertares_propuesta/"
        },
        {
            nombre: "Tour of heroes",
            valor: "tour of heroes",
            srcImg: "../../../assets/img/capturatour_of_heroes.jpeg",
            srcAlt: "captura de app web tour of heroes del tutorial de angular",
            descripcion: 'App web en angular, del tutorial oficial.',
            source: "https://github.com/NeelBit/tour_of_heroes",
            demo: ""
        },
        {
            nombre: "Blog de café",
            valor: "blog de cafe",
            srcImg: "../../../assets/img/capturaBlogDeCafe.jfif",
            srcAlt: "captura de blog ficticio de café (maquetacion)",
            descripcion: 'Sitio web hecho en HTML y CSS, blog de café.',
            source: "https://github.com/NeelBit/blog_cafe",
            demo: "https://blog-cafe-neel.netlify.app"
        },
        {
            nombre: "Mascotas gsm",
            valor: "mascotasgsm",
            srcImg: "../../../assets/img/capturaMascotasGsm.jfif",
            srcAlt: "captura de app web de adopcion de mascotas hecha en django",
            descripcion: 'App web hecho en Django, usando además materialize css.',
            source: "https://github.com/NeelBit/mascotas_gsm",
            demo: "https://mascotasgsm.herokuapp.com"
        },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}

interface Proyecto {
    nombre: string;
    valor: string;
    srcImg: string;
    srcAlt: string;
    descripcion: string;
    source: string;
    demo: string;
}