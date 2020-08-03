import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.sass']
})
export class ModalDialogComponent implements OnInit {
  addForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private ps: PersonService,
    private dialogRef: MatDialogRef<ModalDialogComponent>
  ) { }

  ngOnInit(): void {
    this.addForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      career: ['', Validators.required]
    })
  }

  onSave() {
    
  }

}
