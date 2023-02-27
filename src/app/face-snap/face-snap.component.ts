import { Component , Input, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input () faceSnap!: FaceSnap;
  addedSnap!: boolean;
  buttonText!: string;
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.addedSnap = false;
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if(this.addedSnap == false) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.addedSnap = true;
      this.buttonText = 'Oops, un Snap!';
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.addedSnap = false;
      this.buttonText = 'Oh Snap!';
    }
  }

}
