import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('frm') form;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    $('form').parsley();
  }

  onSubmit() {
    var form1 = $("#form1");
    form1.parsley().validate();
    if (form1.parsley().isValid()){
        alert('valid');
    }
  }
}
