import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

const charAsciiGenerator = new Observable<{fontSize: number, letters: number[]}>(observer => {
  setInterval(() => {
    let fontSize = Math.ceil(Math.random() * 5)
    let nbOfLetter = Math.round(Math.random() * 4 + 1)
    let letters = []

    for (let i = 0; i <= nbOfLetter; i++) {
      let asciiGenerated = Math.round(Math.random() * 25)
      letters.push(asciiGenerated)
    }

    observer.next({fontSize, letters})

  }, 2000)
})

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit, OnDestroy, OnChanges {
  letterSub!: Subscription;
  letterSize!: number;
  letters!: string[];

  constructor() { }

  ngOnInit(): void {
    this.letterSub = charAsciiGenerator.pipe(map((obj) => {
      let letters = obj.letters
      let charLetters = []
      for (const letterCode of letters) {
        charLetters.push(String.fromCharCode(65 + +letterCode))
      }

      return {fontSize: obj.fontSize, letters: charLetters}
    })).subscribe({
      next: (data) => {
        this.letterSize = data.fontSize
        this.letters = data.letters
      }
    })
  }

  ngOnDestroy(): void {
    this.letterSub.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.letterSize)
  }



}
