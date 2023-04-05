import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  public message:string = "Default message from frontend";

  constructor(private messageService: MessageService) {

  }
  ngOnInit(): void {
    this.getMessage();
  }

  public getMessage() {
    this.messageService.getMessage().subscribe(
      {
        next: (response) => {this.message = response; console.log(response);
        },
        error: (error) =>{console.log(error.message);
        }
      }
    ) ;
  }
}
