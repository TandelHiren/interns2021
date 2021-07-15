import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { preferredBooksFactory, PREFERRED_BOOKS } from '../preffered-book';

// const JAVA_BOOK = new Book('Learning Java', 'Java')
// export const HELLO_MESSAGE = new InjectionToken<string>('Hello!');


//use factory
const JAVA_BOOK = new Book('Thinking in Java', 'Java');

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  // providers: [ 
  //   { provide: Book, useValue: JAVA_BOOK },
  //   { provide: HELLO_MESSAGE, useValue: 'Hello World!' }
  // ], 

  providers: [ 
    BookService,
    { provide: Book, useValue: JAVA_BOOK },
          { provide: PREFERRED_BOOKS, useFactory: preferredBooksFactory(3), deps: [Book, BookService] }
      ],
})
export class BookComponent implements OnInit {

//   constructor(private book: Book, 
//     @Inject(HELLO_MESSAGE) private message: string) { }

// ngOnInit() {
  
// }

//use factory

constructor(@Inject(PREFERRED_BOOKS) private preferredBooks: string) { }
	
	ngOnInit() {
	}

}
