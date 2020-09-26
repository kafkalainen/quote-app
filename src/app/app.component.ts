import { Component } from '@angular/core';
import { AnecdoteService } from './anecdote.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  anecdote$;
  title = 'anecdote-app';
  constructor(private anecdoteService: AnecdoteService){}
  fetchAnecdote() {
    this.anecdote$ = this.anecdoteService.fetchAnecdote();
  } 
}
