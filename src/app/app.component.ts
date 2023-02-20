import { FaceSnap } from './models/face-snap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mysnap2!: FaceSnap;
  mysnap!:FaceSnap
  ngOnInit(): void {
    this.mysnap = new FaceSnap('Archibald',
                                 'Mon meilleur ami depuis tout petit !',
                                 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
                                 new Date(),
                                 0)

    this.mysnap2 = new FaceSnap('Couché de soleil',
                                 'Immortaliser un couché de soleil, prendre une photo avec son smartphone près des cotes',
                                 'https://www.popsci.com/uploads/2019/01/07/UQL4MLA6MXE6ECSZHOSXA3LA4E.jpg?auto=webp',
                                 new Date(),
                                 17)
  }



}
