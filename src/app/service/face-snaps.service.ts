import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn:'root'
  })
export class FaceSnapsService{
  faceSnaps : FaceSnap[] = [{
    id: 1,
    title: "Le ciel croque le terre",
    description: ' Fille Terre Aliments La Peinture Créativité',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/03/09/15/31/girl-4916123_960_720.jpg',
    createdDate: new Date(),
    snaps: 25,
    location:"Paris"
  },
  {
    id: 2,
    title: 'Three Rock Mountain',
    description: 'Un endroit magnifique pour les randonnées.Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    createdDate: new Date(),
    snaps: 82,
    location:"Marseille"
  },
  {
    id: 3,
    title: 'Un bon repas. ',
    description: 'Mmmh que c\'est bon ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 17
  },
  {
  id: 4,
  title: 'Zebra ',
  description: 'Nature Forêt Zèbre! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  imageUrl: 'https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg',
  createdDate: new Date(),
  snaps: 15,
  location:"Afrique"
},
{
id: 5,
title: "Le regard d'Oiseau ",
description: 'Nature Oiseau Plantes Feuiles! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
imageUrl: 'https://cdn.pixabay.com/photo/2023/02/13/18/00/bird-7787970_960_720.jpg',
createdDate: new Date(),
snaps: 12
},
{
  id: 6,
  title: 'archibald',
  description: 'Mon meilleur ami depuis tout petit ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  createdDate: new Date(),
  snaps: 25,
  location:"Paris"
},
{
  id: 7,
  title: 'Maroco',
  description: ' Maroc Ait Benhaddou Casbah Afrique Village',
  imageUrl: 'https://cdn.pixabay.com/photo/2019/03/02/21/25/morocco-4030733_960_720.jpg',
  createdDate: new Date(),
  snaps: 82,
  location:"Maroc, Afrique"
},
{
  id: 8,
  title: 'Ai Generated Masque Masque Africain Masque Tribal',
  description: 'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  imageUrl: 'https://cdn.pixabay.com/photo/2022/12/01/09/36/generated-7628736_960_720.jpg',
  createdDate: new Date(),
  snaps: 25
},
{
id: 9,
title: 'Reine Elizabeth Ii La Noblesse Monarque Uk',
description: 'Your like 💙 is a huge expression of affection for my work. I will be extremely grateful to you for a little heart 💙. Thanks for visiting my page. For you all the likes in the world 💙.',
imageUrl: 'https://cdn.pixabay.com/photo/2022/09/19/17/04/queen-elizabeth-ii-7465994_960_720.jpg',
createdDate: new Date(),
snaps: 15,
location:"Afrique"
},
{
id: 10,
title: "Oeil qui voit Tout",
description: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
imageUrl: 'https://cdn.pixabay.com/photo/2023/02/13/10/30/eye-7787024_960_720.jpg',
createdDate: new Date(),
snaps: 150
}
]

  getAllFaceSnaps():FaceSnap[]{
    return this.faceSnaps
  }

  getFaceSnapById(FaceSnapId:number):FaceSnap{
    const faceSnap = this.faceSnaps.find(facesnap => facesnap.id === FaceSnapId);
    if(!faceSnap){
      throw new Error("FaceSnap n'exist pas!s")
    }else{
      return faceSnap
    }
  }
 /* Les literal types permettent de créer rapidement des types personnalisés, souvent utilisés pour limiter les choix pour un argument de méthode, par exemple : fileType: 'image' | 'video'

*/
  snapFaceSnapById(FaceSnapId:number, isSnaped: true | false):void{ // permet d'augmenter le nombre de snap
    const faceSnap = this.getFaceSnapById(FaceSnapId)
    isSnaped === true ? faceSnap.snaps++ : faceSnap.snaps--

  }


}
