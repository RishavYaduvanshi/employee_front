import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MyserService } from 'src/app/services/myser.service';

@Component({
  selector: 'app-projDel',
  templateUrl: './projDel.component.html',
  styleUrls: ['./projDel.component.css']
})
export class ProjDelComponent implements OnInit {

  delprojName: string = this.data.pName;
  constructor(
    private _empser: MyserService,
    private toast: NgToastService,
    private _dilogref: MatDialogRef<ProjDelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    console.log(this.data)
  }
  deleteProj() {
    this._empser.deleteDep(this.data.id).subscribe({
      next: (val: any) => {
        this.toast.success({ detail: "Project Deleted Successfully", duration: 5000 });
        this._dilogref.close(true);
      },
      error: (err: any) => {
        this.toast.error({ detail: "Server error: " + err.error, duration: 5000 });
        console.error(err)
      }
    })
  }


}
