import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graphics',
  templateUrl: './horizontal-bar-graphics.component.html',
  styleUrls: ['./horizontal-bar-graphics.component.scss'],
})
export class HorizontalBarGraphicsComponent {
  results: any[] = [
    {
      name: 'Game 1',
      value: 20,
    },
    {
      name: 'Game 2',
      value: 25,
    },
    {
      name: 'Game 3',
      value: 15,
    },
    {
      name: 'Game 4',
      value: 12
    }
  ];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
