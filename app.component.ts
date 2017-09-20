import { Component , OnInit} from '@angular/core';
import {Http, RequestOptions , Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { UploadItem } from 'angular2-http-file-upload';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  template: '<input type="file" (change)="fileChange($event)" placeholder="Upload file" name="uploadF">',
  /*'<p>HELLO WORLD <a href="{{resp}}" download >Click Me</a>{{resp}} ' +
            '<input type="file"\n' +
  'ngFileSelect\n' +
  '[options]="options"\n' +
  '(onUpload)="handleUpload($event)"\n' +
  '(beforeUpload)="beforeUpload($event)">',
  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public http: Http ){}

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadF', file, file.name);
      const headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
       // headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'text/html');
      const options = new RequestOptions({ headers: headers });
      // console.log('Reached here');
      this.http.post(`http://localhost:8080/ProjSecond/Uploader1`, formData, options)
         .map((res) => {console.log(res.json()); })
         .catch(error => Observable.throw(error))
        .subscribe(
          resp => console.log('success' + resp),
          error => console.log('error IS*&*&*&**' + error),
          () => console.log('Operation Completed')
        );
      // console.log('OPERATION SUCCESSFUL **** !');
      // console.log(Response.name);
    }
  }

}  /*
  ngOnInit(){}
  resp: string;

  constructor(public upload: UploadItem ){
    /!*this.http.get('http://localhost:8080/ProjSecond/index.jsp?name=PIyush')
      .subscribe(
        (response) => {console.log('RESPONSE IS : ' + response); this.resp = response.text(); },
      (e) => {console.log('ERROR IS : ' + e); } );*!/

  }
*/



