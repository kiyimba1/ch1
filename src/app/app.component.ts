import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http.post<{ name: string }>('https://ng-complete-91e66-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
      responseData => {
        console.log(responseData);
      }
    )
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isLoading = true;
    this.http.get<{ [key: string]: Post }>('https://ng-complete-91e66-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((response) => {
          const postsArray: Post[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              postsArray.push({ ...response[key], id: key })
            }

          }
          return postsArray
        })
      )
      .subscribe(posts => {
        this.isLoading = false;
        this.loadedPosts = posts;
      })
  }
}
