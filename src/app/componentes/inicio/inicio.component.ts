import { Component, OnInit } from '@angular/core';
import { Especialista } from './especialista';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  especialistas: Especialista[] = [
    {
      imagen: 'assets/img/Profile1.png',
      nombre: 'Charles Clayton Arévalo Coronado',
      especializacion: 'Marketing Estrategico',
      resumen: 'Diseñador Gráfico, Ilustrador y Docente Adobe. Autodidacta que disfruta aprender y enseñar; la necesidad de hacer la diferencia y aplicar mi profesión al ámbito educativo me han llevado a aprender sobre investigación, formación docente, diseño curricular, entre otros. Además, he participado en diferentes proyectos, los cuales me han permitido perfeccionar mis conocimientos.'
    },
    {
      imagen: 'assets/img/Profile2.png',
      nombre: 'Silvia Cristina Vásquez Castro',
      especializacion: 'Gerencia de Proyectos',
      resumen: 'El diseño gráfico es la forma de vida que escogí, es la manera como se retan mis capacidades creativas, intelectuales y personales; cada vez que realizado un proyecto de diseño construyo un mundo, no solo de ideas, también de sueños, significados, esperanzas y satisfacciones que se materializan a través de mí. La identidad visual me define como diseñadora porque puedo llevar a cabo procesos creativos y de construcción de códigos visuales basados en la unidad de elementos gráficos, que se complementan con el diseño de la información.\n' +
        'Se me facilita el trabajo en equipo, además de promover excelentes relaciones personales; con gran disposición en la implementación de estrategias y métodos de trabajo. Poseo un gusto especial por compartir conocimientos y colaborar con actividades de retroalimentación. La responsabilidad, el cumplimiento y la disciplina son rasgos de mi personalidad.\n'
    },
    {
      imagen: 'assets/img/Profile3.png',
      nombre: 'Omar Reyes Farje',
      especializacion: 'Especialización 3',
      resumen: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ];
  mensajeBienvenida: string='';

  ngOnInit(): void {
    this.mensajeBienvenida = this.obtenerMensajeBienvenida();
  }

  obtenerMensajeBienvenida(): string {
    const horaActual = new Date().getHours();
    if (horaActual < 12) {
      return '¡Buenos días!';
    } else if (horaActual < 18) {
      return '¡Buenas tardes!';
    } else {
      return '¡Buenas noches!';
    }
  }
}
