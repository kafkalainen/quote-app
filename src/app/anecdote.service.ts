import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AnecdoteService {
    constructor(private http:HttpClient) {}

    fetchAnecdote(): Observable<Object> {
        return this.http.get('http://localhost:3000/quote');
    }
}