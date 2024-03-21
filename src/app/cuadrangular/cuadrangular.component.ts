import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cuadrangular',
  templateUrl: './cuadrangular.component.html',
  styleUrls: ['./cuadrangular.component.css']
})
export class CuadrangularComponent {
  teamForm: FormGroup;
  matchForm: FormGroup;
  teamsData: any  
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.teamForm = this.formBuilder.group({
      team1: ['', Validators.required],
      team2: ['', Validators.required],
      team3: ['', Validators.required],
      team4: ['', Validators.required]
    });

    this.matchForm = this.formBuilder.group({
      localTeam1: ['', Validators.required],
      visitorTeam1: ['', Validators.required],
      goalsLocal1: [0, Validators.required],
      goalsVisitor1: [0, Validators.required],
      localTeam2: ['', Validators.required],
      visitorTeam2: ['', Validators.required],
      goalsLocal2: [0, Validators.required],
      goalsVisitor2: [0, Validators.required]
    });
  }

  registerTeams(): void {
    if (this.teamForm.valid) {
      this.teamsData = [
        { Nombre: this.teamForm.value.team1 },
        { Nombre: this.teamForm.value.team2 },
        { Nombre: this.teamForm.value.team3 },
        { Nombre: this.teamForm.value.team4 }
      ];

      this.http.post<any>('http://localhost:8080/api/teams', this.teamsData)
        .subscribe(response => {
          this.teamsData = response.Data.map((team: { ID: any; Nombre: any; }) => ({ id: team.ID, nombre: team.Nombre }));
          console.log("Equipos registrados:", this.teamsData);
          this.successMessage = response.message; 
            this.errorMessage = ''
        }, error =>{
          this.errorMessage = 'Error al registrar equipos'; 
          this.successMessage = '';
        });
    } else {
      console.log("Formulario de equipos inválido");
    }
  }

  registerMatch(): void {
    if (this.matchForm.valid) {
      const matchesData = [
        {
          LocalTeamID: parseInt(this.matchForm.value.localTeam1),
          VisitanteTeamID: parseInt(this.matchForm.value.visitorTeam1),
          GolesDelLocal: this.matchForm.value.goalsLocal1,
          GolesDelVisitante: this.matchForm.value.goalsVisitor1
        },
        {
          LocalTeamID: parseInt(this.matchForm.value.localTeam2),
          VisitanteTeamID: parseInt(this.matchForm.value.visitorTeam2),
          GolesDelLocal: this.matchForm.value.goalsLocal2, 
          GolesDelVisitante: this.matchForm.value.goalsVisitor2,
        }
        
      ];

      this.http.post<any>('http://localhost:8080/api/matches', matchesData)
        .subscribe(response => {
          console.log(response);
          this.successMessage = response.message; 
            this.errorMessage = ''
        }, error =>{
            this.errorMessage = 'Error al registrar Marcadores'; 
            this.successMessage = '';
          });
    } else {
      console.log("Formulario de marcadores de partidos inválido");
    }
  }
  // registerMatch(): void {
  //   if (this.matchForm.valid) {
  //     const matchData = {
  //       LocalTeamID: parseInt(this.matchForm.value.localTeam),
  //       VisitanteTeamID: parseInt(this.matchForm.value.visitorTeam),
  //       GolesDelLocal: this.matchForm.value.goalsLocal,
  //       GolesDelVisitante: this.matchForm.value.goalsVisitor
  //     };
  //     console.log("captura datos");
  //     this.http.post<any>('http://localhost:8080/api/matches', [matchData])
  //       .subscribe(response => {
  //         console.log(response);
  //         this.loadStandings();
  //       });
  //   } else {
  //     console.log("Formulario de marcadores de partidos inválido");
  //   }
  // }

  loadStandings(): void {
    this.http.get<any>('http://localhost:8080/api/standings')
      .subscribe(response => {
        // Lógica para manejar los datos y actualizar la tabla de clasificación
      });
  }
}



