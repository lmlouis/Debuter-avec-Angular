import { FaceSnapsService } from './../service/face-snaps.service';
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
  knowMore!: boolean;
  switchMessage!:string;

  constructor(private faceSnapsService:FaceSnapsService){}


  ngOnInit() {
    this.isSnaped = false;
    this.buttonText = "Oh snap!"
    this.knowMore = true
    this.switchMessage = "Plus de détals"

  }

  onToggle(){
    if(this.knowMore){
      this.knowMore = false
      this.switchMessage = "Fermer"
    }else{
      this.knowMore = true
      this.switchMessage = "Plus de détals"
    }

  }

  addSnap(){
    this.isSnaped = true;
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, this.isSnaped);
    this.buttonText =  "Oops, un Snap!"
  }

  retireSnap(){
    this.isSnaped = false;
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, this.isSnaped);
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
