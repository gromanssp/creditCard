import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() firstname: string | null | undefined;
  @Input() cardNumber: string | null | undefined;
  @Input() expiration: string | null | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
