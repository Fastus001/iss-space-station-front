import {Injectable} from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Passes} from '../dto/passes';
import {environment} from '../../environments/environment';
import {PassesResponse} from '../dto/passesresponse';

@Injectable({
  providedIn: 'root'
})
export class PassesService {

  constructor(private http: HttpClient) { }

  getPasses(passes: Passes): Observable<PassesResponse>{
  return this.http.post<PassesResponse>(environment.endPointPassesURL, passes);
  }
}
