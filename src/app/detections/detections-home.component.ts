import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayDialogComponent } from '../shared/display-dialog.component';

@Component({
  selector: 'app-detections-home',
  templateUrl: './detections-home.component.html',
  styleUrls: ['./detections-home.component.css']
})
export class DetectionsHomeComponent implements OnInit {

  @ViewChild(DisplayDialogComponent) dialog: DisplayDialogComponent;
  display = false;
  dialogHeader = '';

  constructor() { }

  showDialog() {
    this.dialogHeader = 'Edit User';
    this.dialog.show();
  }

  ngOnInit() {
  }



}
