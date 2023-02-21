import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn:'root'
  })
export class FaceSnapsService{
  faceSnaps : FaceSnap[] = [{
    title: 'archibald',
    description: 'Mon meilleur ami depuis tout petit ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    createdDate: new Date(),
    snaps: 25,
    location:"Paris"
  },
  {
    title: 'Three Rock Mountain',
    description: 'Un endroit magnifique pour les randonnées.Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    createdDate: new Date(),
    snaps: 82,
    location:"Marseille"
  },
  {
    title: 'Un bon repas. ',
    description: 'Mmmh que c\'est bon ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 17
  }]
}
