import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDTO, CombinedResponseDTO } from './actor-info';

@Injectable({
  providedIn: 'root',
})
export class MoviedbActorInfoApiService {
  constructor(private readonly http: HttpClient) {}

  getInfo(id: string | null): Observable<ActorDTO> {
    return this.http.get<ActorDTO>(`/person/${id}`);
  }

  getList(id: string | null): Observable<CombinedResponseDTO> {
    return this.http.get<CombinedResponseDTO>(`/person/${id}/combined_credits`);
  }
}
