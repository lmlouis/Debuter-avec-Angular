import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../service/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!:FaceSnap

  isSnaped!:boolean;
  buttonText!: string;
  knowMore!: boolean;
  switchMessage!:string;

  constructor(private faceSnapsService:FaceSnapsService,
              private route:ActivatedRoute){}


  ngOnInit() {

    const facesnapId = +this.route.snapshot.params['id']  // + caster en number l'id récuppéré depuis l'url
    this.faceSnap = this.faceSnapsService.getFaceSnapById(facesnapId)
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
