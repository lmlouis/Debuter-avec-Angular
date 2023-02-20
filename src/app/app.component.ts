import { FaceSnap } from './models/face-snap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap
  myOtherSnap!:FaceSnap
  myLastSnap!:FaceSnap


  ngOnInit(): void {
  this.mySnap = {
    title: 'Archibald',
    description: 'Mon meilleur ami depuis tout petit ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    createdDate: new Date(),
    snaps: 5,
    location:"New York"
  };
  this.myOtherSnap = {
    title: 'Three Rock Mountain',
    description: 'Un endroit magnifique pour les randonnées.Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    createdDate: new Date(),
    snaps: 12,
    location:"Marseille"
  };
  this.myLastSnap = {
    title: 'Un bon repas. ',
    description: 'Mmmh que c\'est bon ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 3
  };
}

}
