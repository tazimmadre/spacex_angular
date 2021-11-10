import { Component } from '@angular/core';
import { WikiService } from './wiki.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private spaceapi: WikiService) {}
  title = 'spacex';
  term:any;
  ngOnInit(){
    this.spaceapi.search()
    .subscribe((data:any) => {
      this.term=data;
      console.log(data);
      console.log(this.term[0].name);
    });
  }
  
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
