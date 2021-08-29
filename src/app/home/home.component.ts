import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import baseUrl from '../Services/helper';
import { UrlService } from '../Services/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Url = {
    url:"",
    expirationDate:""
  }
  toggle:boolean = false;
  UrlData:any=[]
  showUrl:boolean=false;
  shortenUrl:any;
  error:any;
  hasError:boolean = false;

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    
    
  }

  generateShortUrl(){
    this.urlService.generateShortUrl(this.Url).subscribe((data) => {
      this.UrlData = data;
      if(this.UrlData.shortLink!=undefined || this.UrlData.ShortLink!=null) { 
        this.showUrl = true;
        this.shortenUrl = baseUrl + '/' + this.UrlData.shortLink;
      }
    },
    (err) => {
      console.log(err);
      this.hasError = true;
      this.error = err.error.message;
    })

    
  } 
  copyToClipboard(event: any, inputElement:any){
    inputElement.select();
    document.execCommand('copy');  
    inputElement.setSelectionRange(0, inputElement.value.length);
    event.target.textContent = 'COPIED TO CLIPBOARD';  
  }
  onToggle(event:any){
    this.toggle = event.checked;
  }
}
