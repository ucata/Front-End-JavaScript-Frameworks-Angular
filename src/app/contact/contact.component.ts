import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  leader: Leader[];

  constructor(
    private leaderService: LeaderService
  ) { }

  ngOnInit() {
    this.leader = this.leaderService.getLeaderDetails();
  }

}
