import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../posts';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {


  public nomeArquivo: String = '';

  public dados = {
    post: new Post("", "", "", "", ""),
    arquivo: null
  }

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent> 
  ) { 

  }

  ngOnInit(): void {
  }

  mudouArquivo(event) {
    // console.log(event.target.files[0]);
    this.nomeArquivo = event.target.files[0].name;
    this.dados.arquivo = event.target.files[0];
  }

  salvar() {
    this.dialogRef.close(this.dados);
  }

  cancelar() {
    this.dialogRef.close(null);
  }

}
