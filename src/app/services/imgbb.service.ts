/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { RootObject } from '../interfaces/imgbb';

@Injectable({
  providedIn: 'root'
})
export class ImgbbService {

   private APIKey: string = "a32b20665d6bd27ff01c5577e664c26a";

   private APIUrl : string = "https://api.imgbb.com/1/upload?";
   private get getUrl():string { return this.APIUrl + "key=" + this.APIKey;}

  constructor(private http : HttpClient) { }

  public upload(file : File): Observable<RootObject>{
      return this.http.post<RootObject>(this.getUrl,this.getBase64(file));
  }

  private getBase64(file :File): string {
    var img;
    console.log(file);
    let reader = new FileReader();
    reader.onload = function () {
      //me.modelvalue = reader.result;
      img = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
      img = "error"
    };
    reader.readAsDataURL(file);
    console.log(img);
    return img;
 }
}*/
