import { Chart, ChartType } from 'chart.js';
import { Renderer2, Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent  implements OnInit {
  @Input() nameTab: string = "";

  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    console.log("Ejecutando line-chart")
    this.inicializarChart();
  }

  public chart!: Chart;

  private inicializarChart(){

    

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [ {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      tension: 0.1
    } ]
  };


  //Crear el elemento div    
  const div = this.renderer.createElement('div');
  // Establecer las propiedad del div que se necesiten
  this.renderer.setStyle(div, 'width', '100%');
  this.renderer.setStyle(div, 'height', '100%');
  this.renderer.setStyle(div, 'margin', 'auto');
  this.renderer.setStyle(div, 'text-align', 'center');

  // Añadir el atributo id al div
  this.renderer.setAttribute(div, 'id', 'container'+this.nameTab+'lineChart');

  // Crear el elemento canvas
  const canvas = this.renderer.createElement('canvas');
  //Añadir atributo id al canvas
  this.renderer.setAttribute(canvas, 'id', this.nameTab+'lineChart');

  // Agregar el canvas al div
  this.renderer.appendChild(div, canvas);
  // Agregar el div al elemento actual del componente
  this.renderer.appendChild(this.el.nativeElement, div);
  
  this.chart = new Chart(canvas, {
    type: 'line' as ChartType, // tipo de la gráfica 
    data: data, // datos 
    options: { // opciones de la gráfica
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 0,
            font: {
              size: 16,
              weight: 'bold'
            }
          },
        }
      },
    }
  });
  this.chart.canvas.width = 100;
  this.chart.canvas.height = 100;
}


}


