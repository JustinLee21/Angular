import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', 
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false; 
  serverCreationStatus = 'No server was created!'; 
  serverName = 'Test Server';  
  serverCreated = false; 
  servers = ['Testserver', 'Testserver 2']; 

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true; 
    }, 2000); 
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName; 
    this.servers.push(this.serverName); 
    this.serverCreated = true; 
  }

  // onUpdateServerName(event: any){
  //   this.serverName = (<HTMLInputElement>event.target).value; 
  // }

}
