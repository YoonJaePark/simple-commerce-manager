import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scm-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    searchProduct(no: number) {
        console.log('searchno: ${no}');
    }
}
