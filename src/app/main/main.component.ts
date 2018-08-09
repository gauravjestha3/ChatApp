import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthUserService } from '../auth-user.service';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { Data } from '../data';
import { Alert } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  AddChannel : string;
  SearchChannel : string;
//on click the channel will add on service
  AddButtonClicked(str){
    this.AuthObject.AddChannel(str).subscribe(res => 
      { 
        console.log(res); 
      }),
      err => {
        console.log(err);
      }
  }
  //this search button is used to search an channel if there is already exist an channel it will show channel not found otherwise it will show that channel
  MyVar : string;
  SearchButtonClicked(str){
    this.AuthObject.DisplayAllChannel().subscribe(res => 
      { 
        this.length = res.channels.length;
        for ( let i = 0; i < this.length; i++){
          if (str === res.channels[i].unique_name ) {
            this.MyVar = res.channels[i].unique_name;
            break;        //this break is used because if our element at index 3 ,at first 2 iteration it will show channel not found and at 3 iteration it will so our search value.
            }
          else {
            this.MyVar="Channel not found";
            console.log("Searched Group not found");
          }}
      }),
      err => {
        console.log(err);
      }
  }
  constructor(private AuthObject : AuthUserService, private http : HttpClient) { }
User = new Data;
  ngOnInit(){
     //if we remove the comment below this line then everytime out code will run it will automatically generate service.
        
        // this.AuthObject.AddUser(this.User.email).subscribe(res => 
        //   { 
        //   console.log(res); 
        //   });
        //   err => {
        //   alert('Welcome Again',);
        //  }
    // this.AuthObject.AddRole().subscribe(res => 
    //   { 
    //     console.log(res); 
    //   }),
    //   err => {
    //     console.log(err);
    //   }
}  
    //   this.AuthObject.SetData().subscribe(res => 
    //   { 
    //     console.log(res); 
    //   }),
    //   err => {
    //     console.log(err);
    //   }
     

    // ButtonClicked() {
    //   this.AuthObject.CreateChannel().subscribe(res => 
    //        { 
    //          console.log(res); 
    //        }),
    //        err => {
    //          console.log(err);
    //        }
    //      }  
    length : number;
    msgArr = [];
    channelArr = [];                     //we show all our channels witht the help of this functions
        Display() {
           this.AuthObject.DisplayAllChannel().subscribe(res => 
                   { 
                     this.length = res.channels.length;
                     for ( let i = 0; i < this.length; i++){ 
                     this.channelArr[i] = res.channels[i].unique_name;} 
                     }),
                     err => {
                       console.log(err);
                     }
              } 
          
    Send(str) {
          this.AuthObject.SendMessage(str).subscribe(res => 
                    { 
                      console.log(res);
                    }),
                    err => {
                      console.log(err);
                    }
             } 
             //the array will start from index=0 and print all the messages.
    Show() {
          this.AuthObject.ShowAllMessages().subscribe(res => 
                    { 
                      this.length = res.messages.length;
                      console.log(res);
                      for ( let i = 0; i < this.length; i++){ 
                        
                      this.msgArr[i] = res.messages[i].body +'(' + res.messages[i].from + ')'; }
                    }),
                    err => {
                      console.log(err);
                    }
             }     
    }
      
