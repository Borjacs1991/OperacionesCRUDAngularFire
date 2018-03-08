import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  blogObservable: Observable<any[]>;

  constructor( private db: AngularFireDatabase) { }

  ngOnInit() {
    console.log("Hace la conexion 1");

  this.blogObservable = this.getBlog('/blogs');

//  this.http.get('/blog').subscribe(data => {
 //   this.blog = data;
 // });
 console.log("Hace la conexion 2");
}


getBlog(listPath): Observable<any[]> {
  console.log("Hace la conexion 3");
  return this.db.list(listPath).valueChanges();
}

}

