import { Component, OnInit } from '@angular/core';
import { DesktopService } from './desktop.service';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'app-use-existing',
  templateUrl: './use-existing.component.html',
  providers: [ 
    LaptopService,
    { provide: DesktopService, useExisting: LaptopService }
  ],
})
export class UseExistingComponent implements OnInit {

  computerName: string;
	constructor(private computerService: DesktopService) { }
	ngOnInit() {
		this.computerName = this.computerService.getComputerName();
	}

}
