import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipatonService } from 'src/service/participaton.service';
export class Participation{
  constructor(
    public idParticipation: number,
    public lastName: string,
    public firstName:string,
    public number:string,
    public email:string,
    public eventId:number
  ){

  }
}
@Component({
  selector: 'app-list-participation',
  templateUrl: './list-participation.component.html',
  styleUrls: ['./list-participation.component.css']
})
export class ListParticipationComponent {
  participation!: Participation
  participationList!: Participation[]

  constructor(public _router: Router, public participationservice: ParticipatonService) { }

  ngOnInit(): void {

    this.participationservice.getParticipations().subscribe(
      response => {
        console.log('Response from service:', response);
        this.participationList = response;
      },
      error => {
        console.error('Error from service:', error);
      }
    );
  }

  deleteParticipation(id: number) {
    console.log(`delete Participation ${id}`);
    this.participationservice.deleteParticipation(id).subscribe(
      response => {
        console.log(response);
        this.participationservice.getParticipations().subscribe(
          response => {
            console.log(response);
            this.participationList = response;
          });
      })
     window.location.reload();
  }

  addParticipation(){
    this._router.navigate(['add-participation'])
  }

  updateParticipation(id: number) {
    this._router.navigate(['/update-participation', id])
  }
}
