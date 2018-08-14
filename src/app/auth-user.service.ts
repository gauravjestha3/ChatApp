import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Data } from './data';
import { pipe } from '../../node_modules/@angular/core/src/render3/pipe';
import { map } from 'rxjs/operators';
import { Details } from './details';



@Injectable({
  providedIn: 'root'
})

export class AuthUserService {
  [x: string]: any;
  details= new Details();
  httpOptions = {
    headers : new HttpHeaders ({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic QUM0MGYwZDNlMzE4MjdiMTc1M2RhYmMxZDY0YmY2ZjUxNzpkODdiOTEzOGNhMTI5MWUxZmMxYTVlZjliN2UyMjJlZA=='
    })
  };
 
 UserName : string = 'AC40f0d3e31827b1753dabc1d64bf6f517';
 Password : string = 'd87b9138ca1291e1fc1a5ef9b7e222ed';
 ServiceId : string =  'IS383785809aec45a4bf60715729fee616';
url = 'https://chat.twilio.com/v2/Services'       //this is our service url 
  constructor(private http : HttpClient) { 
    this.details = JSON.parse(localStorage.getItem("key")); 
  }
  canActivate()
  {
    if(localStorage.getItem('id')===JSON.parse(localStorage.getItem("key")).id)
    {
      return true;
    }
    else{
      false;
    }
  }
  getdata():Observable<any>{
    return this.http.post(this.url,'FriendlyName=Gaurav', this.httpOptions);
  }
  SetData():Observable<any> {
    return this.http.post(this.url,'FriendlyName=Gaurav', this.httpOptions);
  }
  CreateChannel():Observable<any> {
    return this.http.post('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616e/Channels', 'UniqueName=General', this.httpOptions);
  }
  DisplayAllChannel():Observable<any> {
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Channels', this.httpOptions);
  }
  RetrieveChannelId(str):Observable<any>{
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Channels/'+str, this.httpOptions);
  }
  RetrieveChannelName(str):Observable<any>{
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Channels/'+str ,this.httpOptions);
  }
  ChannelAddMember(str):Observable<any>{
    return this.http.post('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Channels/'+str+'/Members','ChannelSid='+str+'&Identity='+this.details.email+'&ServiceSid=IS7e6000a5b6354e0a98851f7d8592e15e', this.httpOptions);
  }

  AddChannel(str):Observable<any> {
    return this.http.post('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Channels', 'UniqueName='+str, this.httpOptions);
  }
  AddRole():Observable<any> {
    return this.http.post('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Roles',  'FriendlyName=Gaurav&Permission=createChannel&Type=deployment', this.httpOptions);
  }
  AddMember():Observable<any>{
    return this.http.post('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616e/Channels/CHd68250a03c474797a501dbe393d53da9/Members',  'ChannelSid=CHd68250a03c474797a501dbe393d53da9&ServiceSid=IS383785809aec45a4bf60715729fee616' , this.httpOptions);
  }
  ListAllUsers():Observable<any>{
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Users', this.httpOptions);
  }
  RetrieveUser():Observable<any>{
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Users/'+this.details.email, this.httpOptions);
  }
  IsSubscribed(str):Observable<any>{
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Users/'+str+'/Channels/', this.httpOptions);
  }
  
  SendMessage(str):Observable<any> {
    var abc=localStorage.getItem('channelname')

    return this.http.post('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Channels/'+abc+'/Messages',  'UniqueName='+abc+'&ServiceSid=IS383785809aec45a4bf60715729fee616e&From='+this.details.email+'&Body='+str, this.httpOptions);
  }
  ShowAllMessages(str):Observable<any> {
    var abc=localStorage.getItem('channelname')
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Channels/'+abc+'/Messages', this.httpOptions);
  }
  DetailUser():Observable<any>{
    return this.http.get('https://chat.twilio.com/v2/Services/IS383785809aec45a4bf60715729fee616/Users/'+this.details.email,this.httpOptions);

  }

}