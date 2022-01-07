import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http_module';
  dataForm: FormGroup;
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      });
    this.fetch();
  }

  onSubmit(postData: { username: string; password: string } ) {
    this.http
      .post('https://backend-*****-default-rtdb.firebaseio.com/postsdata.json',
       postData
       ).subscribe(responseData => {
         console.log(responseData);
       })//Replace the backend URL with your URL
    //console.log(this.dataForm);
  }

  onFetch() {
    this.fetch();

  }

  private fetch() {
    this.http
      .get('https://backend-f64ff-default-rtdb.firebaseio.com/postsdata.json')//REplace with your Backend URL
      .pipe(
        map( responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id: key })
          }
        }
        return postsArray;
      })
      )
      .subscribe(posts => {
        // ...
        console.log(posts);
      });
  }
}
