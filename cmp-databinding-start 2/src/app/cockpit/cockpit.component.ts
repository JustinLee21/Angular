import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('serCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();  
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();  
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: serverContent.value})
  }

  onAddBlueprint(nameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: serverContent.value})
  }

}
