import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Local variables
  textToType: string;
  typedText: string;
  typingSpeed: number;

  constructor() {
    this.textToType = 'Hello, my name is Zadkiel, I love creating websites. \n\n\n Welcome to my portfolio!';
    this.typedText = '';
    this.typingSpeed = 100; // Speed in ms
  }

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping() {
    this.typedText = '';
    let charIndex = 0;
    const type = () => {
      if (charIndex < this.textToType.length) {
        this.typedText += this.textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, this.typingSpeed);
      } else {
        this.resetTyping();
      }
    };
    type();
  }

  resetTyping() {
    setTimeout(() => {
      this.startTyping();
    }, 10000); // Reset after 10 seconds
  }
}
