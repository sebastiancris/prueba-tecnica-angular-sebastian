import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = `${environment.apiUrl}/games`; // URL base de la API

  constructor(private http: HttpClient) { }

  // Obtener todos los juegos
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  // Filtrar juegos por nombre, género y plataforma
  filterGames(name?: string, genre?: string, platform?: string): Observable<Game[]> {
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (genre) params = params.set('genre', genre);
    if (platform) params = params.set('platform', platform);

    return this.http.get<Game[]>(this.apiUrl, { params });
  }

  // Obtener detalles de un juego por ID
  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }
}
