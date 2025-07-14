import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface CadastroData {
  areaAtuacao?: string;
  nivelExperiencia?: string;
  nomeCompleto?: string;
  estado?: string;
  cidade?: string;
  email?: string;
  senha?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private cadastroDataSubject = new BehaviorSubject<CadastroData>({});

  cadastroData$ = this.cadastroDataSubject.asObservable();
  constructor() {
    const saveData = localStorage.getItem('cadastroData');

    if (saveData) {
      this.cadastroDataSubject.next(JSON.parse(saveData));
    }
  }

  updateCadastroData(data: Partial<CadastroData>): void {
    const currentDate = this.cadastroDataSubject.value;

    const updatedData = { ...currentDate, ...data };

    this.cadastroDataSubject.next(updatedData);

    localStorage.setItem('cadastroData', JSON.stringify(updatedData));
  }

  getCadastroData(): CadastroData {
    return this.cadastroDataSubject.value;
  }
}
