import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../services/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [CommonModule, ReactiveFormsModule]
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicializa el formulario
    this.userForm = this.fb.group({
      IdArea: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtiene el ID del usuario desde la URL
    this.userId = +this.route.snapshot.paramMap.get('userId')!;
    this.loadUserData();
  }

  // Carga los datos del usuario en el formulario
  loadUserData(): void {
    this.userService.getUserById(this.userId).subscribe((user: User) => {
      this.userForm.patchValue(user);
    });
  }

  // Envía la actualización del usuario
  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe({
        next: () => {
          alert('Usuario actualizado exitosamente');
          this.router.navigate(['/admin/post/list']); // Redirige a la lista de usuarios
        },
        error: (err) => {
          console.error('Error al actualizar el usuario', err);
        }
      });
    }
  }
}
