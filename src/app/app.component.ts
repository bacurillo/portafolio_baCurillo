import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Portafolio - Bryan Curillo'
  correoElectronico = 'bryancurillo2002@gmail.com';
  imgPerfil = '/src/assets/Bryan.png';

  enviarCorreo() {
    window.location.href = `mailto:${this.correoElectronico}`;
  }

  abrirCV() {
    window.open('https://drive.google.com/file/d/11lhfE4kuG0n9QgFgMUl44CAicYz5hyuP/view', '_blank');
  }

  abrirGitHub() {
    window.open('https://github.com/bacurillo?tab=repositories', '_blank');
  }

  abrirLinkedIn() {
    window.open('https://www.linkedin.com/in/bryan-curillo-945253171/', '_blank');
  }

  gh1() {
    window.open('https://github.com/bacurillo/PreProfecionales_Senescyt', '_blank');
  }
  gh2() {
    window.open('https://github.com/bacurillo/Vinculacion_Fundacion_Alianza', '_blank');
  }
  gh3() {
    window.open('https://github.com/bacurillo/ProyectoZoo', '_blank');
  }
  gh4() {
    window.open('https://github.com/bacurillo/Alquiler_Salones', '_blank');
  }

}
