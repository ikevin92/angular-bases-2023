import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Iron Man',
    'Spider-Man',
    'Thor',
    'Hulk',
    'Captain America',
    'Black Widow',
    'Hawkeye',
    'Black Panther',
    'Doctor Strange',
    'Captain Marvel',
    'Ant-Man',
    'Wasp',
    'Scarlet Witch',
    'Vision',
    'Falcon',
    'Winter Soldier',
    'War Machine',
    'Star-Lord',
    'Gamora',
    'Drax the Destroyer',
  ];

  public deleteHero?: string;

  public heroName: string = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
