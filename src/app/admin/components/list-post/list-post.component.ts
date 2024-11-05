import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService,User} from '../../../services/user-service.service'; 
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-user-list',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListPostComponent implements OnInit {
  users: User[] = []; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: { resultado: User[] }) => {
        this.users = data.resultado;
        console.log(data);
      },
      error: (error: any) => { 
        console.error('Error al obtener usuarios:', error);
      }
    });
  }
}