import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(
        1,
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0,
        'Rabat'
      ),
    new FaceSnap(
        2,
        'Maman',
        'Ma maman, ma meilleure amie !',
        'data:image/jpeg;base64,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',
        new Date(),
        0,
        'Casa'
      ),
    new FaceSnap(
        3,
        'Papa',
        'Mon papa, mon héros !',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6DwHVMXQCz7t0GFF7fZs1k2xtPN329JWKw&usqp=CAU',
        new Date(),
        0
      ),
      new FaceSnap(
        4,
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0,
        'Rabat'
      ),
    new FaceSnap(
        5,
        'Maman',
        'Ma maman, ma meilleure amie !',
        'data:image/jpeg;base64,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',
        new Date(),
        0,
        'Casa'
      ),
    new FaceSnap(
        6,
        'Papa',
        'Mon papa, mon héros !',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6DwHVMXQCz7t0GFF7fZs1k2xtPN329JWKw&usqp=CAU',
        new Date(),
        0
      ),
  ]
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}