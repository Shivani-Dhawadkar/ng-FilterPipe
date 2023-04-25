import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  lorem = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus nihil odio accusantium veritatis? Tenetur alias porro illo expedita eligendi.';
  d: Date = new Date();
  course = {
    courseName : 'Fullstack Web Development',
    stdNo : 156,
    rating : 3.5,
    releaseDate : new Date(2023, 2,26),
    price : 19999
  }


  constructor() { }

  ngOnInit(): void {
  }

}



 