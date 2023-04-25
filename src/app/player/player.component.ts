import { Component, OnInit } from '@angular/core';
import { cricketors } from '../shared/const/players';
import { Iplayer } from '../shared/models/data';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playerarray  = cricketors;
  searchBy! : string
  constructor() { }

  ngOnInit(): void {
    
  }

}
