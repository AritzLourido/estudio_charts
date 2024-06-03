import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  nombreTab: string = "tab4";

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }
  
}
