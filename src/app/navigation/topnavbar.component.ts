import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../node_modules/primeng/components/common/menuitem';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [          
      {
        label: 'Detections', icon: 'fa fa-fw fa-list',  routerLink: '/detections',
      }
    ];
  }
}
