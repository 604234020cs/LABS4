import { BookeditPage } from './../bookedit/bookedit';
import { BookdetailPage } from './../bookdetail/bookdetail';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Book } from './../../models/book.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  books:Book;
  category:string

  constructor(public bookRest:BookRestProvider, public navCtrl:NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
    this.bookRest.getbookList().subscribe(data=>{
      this.books=data.filter(book => book.category == this.category);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }


  BookEdit(bookid:number){
  this.navCtrl.push(BookeditPage);
}
  
showDetail(bookid:number){
 this.navCtrl.push(BookdetailPage,
  {bookid:bookid}
  );
  }


}
