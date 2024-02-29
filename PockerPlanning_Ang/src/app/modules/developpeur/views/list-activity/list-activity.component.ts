import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/service/activity.service';
 export class Activity {
  constructor(
    public idActivity: number,
    public description: string,
    public name: string,
    public nbPerson: number,
    public hour: number,
    public picture:string,
    public event: { idEvent: number, name: string }
  ) { }
}
@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent {
  activity!: Activity
  activityList!: Activity[]
  currentPage: number = 1;
  totalEvents: number = 0;
  pageSize: number = 3;
  totalPages: number = 0;
  pages: number[] = [];
  constructor(public _router: Router, public activityservice: ActivityService) { }



  ngOnInit(): void {
     this.activityservice.getactivities().subscribe(
      response => {
        console.log('Response from service:', response);
        this.activityList = response;
      },
      error => {
        console.error('Error from service:', error);
      }
    );
  }
   
   
  deleteActivity(id: number) {
    console.log(`delete Activity ${id}`);
    this.activityservice.deleteActivity(id).subscribe(
      response => {
        console.log(response);
        this.activityservice.getactivities().subscribe(
          response => {
            console.log(response);
            this.activityList = response;
          });
      })
      window.location.reload();

  }
  addActivity(){
    this._router.navigate(['add-activity'])
  }
  updateActivity(id: number) {
    
    this._router.navigate(['/update-activity', id])
  }
}
