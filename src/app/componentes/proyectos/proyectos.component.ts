import { Component } from '@angular/core';
import { Proyecto } from './proyecto.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    new Proyecto('assets/img/3D_game_isometric.jfif', 'Cute small forest zen wood temple, 3d game isometric, detailed, white background', new Date(2022, 0, 1)),
    new Proyecto('assets/img/paper_origami.jfif', 'Abstract art paper art origami diorama, Tokyo, amusement park, modern art ukiyo-e style, colorful, ukiyo', new Date(2022, 1, 12)),
    new Proyecto('assets/img/cabin.jfif', 'A cozy cabin in the woods surrounded by colorful autumn leaves', new Date(2022, 2, 12)),
    // ... más proyectos
  ];
}
