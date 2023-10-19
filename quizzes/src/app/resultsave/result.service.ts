import { Injectable } from '@angular/core';
import { Questions } from '../questions.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }
  questions:any[] = []
  chosen:any[] = []
}
