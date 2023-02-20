import { FaceSnap } from './../models/face-snap.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  // propriété personnalisée est rendue injectable depuis l'extérieur grâce au décorateur  @Input()
  // elle sera lu par le component parent à l'aide de l'attribu binding
  //  c'est à dire <app-face-snap [faceSnap]="mysnap"></app-face-snap>
  @Input() faceSnap!:FaceSnap

  isSnaped!:boolean;
  buttonText!: string;


  ngOnInit() {
    this.isSnaped = false;
    this.buttonText = "Oh snap!"
  }

  addSnap(){
    this.faceSnap.snaps++;
    this.isSnaped = true;
    this.buttonText =  "Oops, un Snap!"
  }

  retireSnap(){
    this.faceSnap.snaps--;
    this.isSnaped = false;
    this.buttonText =  "Oh snap!"
  }

  onSnap() {
    if(this.isSnaped){
      this.retireSnap();
    }
    else{
      this.addSnap();
    }
  }


}
