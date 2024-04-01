import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nv-training-task';
  isMenuOpen:Boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  allWords:string[] = ['купувач', 'наемател','продавач']  ;
  wordIndex:number = 0;
  currentWord:string = "";
  tmp:number = 1;


  isScrolled:Boolean = false
  
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 0;
  }
    
  

  ngOnInit() {
  
    /*this.interval = setInterval(() => {
      this.rotateWord(); // Rotate the word inside the setInterval
      console.log('Word rotated:', this.currentWord); // Log the rotated word
    }, 1000);*/
  

  }



  /*this.interval = setInterval(() => {
      this.rotateWord(); // Rotate the word inside the setInterval
      console.log('Word rotated:', this.currentWord); // Log the rotated word
    }, 1000);
  rotateWord() {
    this.wordIndex = (this.wordIndex+1)%this.allWords.length;
    this.currentWord = this.allWords[this.wordIndex];
    return this.currentWord
  }*/

}
