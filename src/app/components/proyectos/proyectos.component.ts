import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

    proyectos: Proyecto[] = [
        {   
            nombre: "Breaking bad wiki",
            valor: "breaking bad",
            srcImg: "../../../assets/img/capturabreaking-bad-wiki.jpeg",
            srcAlt: "captura de app web hecha en angular de la wiki de la serie breaking bad",
            descripcion: 'App web hecha en Angular + Bootstrap, wiki de la serie Breaking bad. Búsqueda integrada, API.',
            source: 'https://github.com/NeelBit/breaking_bad_wiki_angular',
            demo: ''
        },
        {
            nombre: "Radio Fusión Cable",
            valor: "RadioFusionCable",
            srcImg: "../../../assets/img/capturaRadioFusionCablePropuesta.jpg",
            srcAlt: "captura del sitio web radio fusion cable, propuesta hecha y demo",
            descripcion: "Propuesta hecha para RadioFusionCable, HTML, CSS Y JS. Maquetación web.",
            source: "https://github.com/NeelBit/RadioFusionCable_propuesta",
            demo: "https://neelbit.github.io/RadioFusionCable_propuesta/"
        },
        {
            nombre: "A lo artesanal",
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
            descripcion: 'App web en Angular, del tutorial oficial.',
            source: "https://github.com/NeelBit/tour_of_heroes",
            demo: ""
        },
        {
            nombre: "Blog de café",
            valor: "blog de cafe",
            srcImg: "../../../assets/img/capturaBlogDeCafe.jfif",
            srcAlt: "captura de blog ficticio de café (maquetación)",
            descripcion: 'Sitio web estático y responsive hecho en HTML y CSS, blog de café ficticio.',
            source: "https://github.com/NeelBit/blog_cafe",
            demo: "https://blog-cafe-neel.netlify.app"
        },
        {
            nombre: "Mascotas gsm",
            valor: "mascotasgsm",
            srcImg: "../../../assets/img/capturaMascotasGsm.jfif",
            srcAlt: "captura de app web de adopción de mascotas hecha en Django",
            descripcion: 'App web hecho en Django, usando además materialize css.',
            source: "https://github.com/NeelBit/mascotas_gsm",
            demo: "https://mascotasgsm.herokuapp.com"
        },

        {
            nombre: "Festival música",
            valor: "festivalMusica",
            srcImg: "../../../assets/img/capturaFestivalMusica.jfif",
            srcAlt: "captura de proyecto realizado con html5, CSS3 y JavaScript + Sass. Sitio sobre un festival de música, formato landing page simple, sitio web responsive",
            descripcion: 'Proyecto realizado con HTML5, CSS3, JavaScript + Sass. Sitio sobre un festival de música ficticio, formato landing page, sitio web responsive.',
            source: "https://github.com/NeelBit/festival_musica",
            demo: "https://festival-musica-21.netlify.app/"
        },
        {
            nombre: "Galería y mapa",
            valor: "galeriaYmapa",
            srcImg: "../../../assets/img/capturaGaleriaYmapa.jfif",
            srcAlt: "captura de sitio responsive con HTML, CSS y JS. Galería de imágenes estáticas, mapa con la opción de ir a ubicación, e icono + efecto de darkmode",
            descripcion: 'Sitio responsive con HTML, CSS y JS. Galería de imágenes estáticas, mapa con la opción de ir a ubicación, icono + efecto darkmode.',
            source: "https://github.com/NeelBit/galeria_mapa_darkmodeIconEffect",
            demo: "https://galeria-mapa-darkmodeicon.netlify.app/"
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