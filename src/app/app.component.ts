import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import {SidebarComponent} from "./admin/components/sidebar/sidebar.component";
import {ListPostComponent} from "./admin/components/list-post/list-post.component";
import {IPost} from "./admin/interfaces/post";
import {HttpClient} from "@angular/common/http";
import { UpdateUserComponent } from './admin/components/update-user/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SidebarComponent,ListPostComponent ,HttpClientModule ,UpdateUserComponent, ReactiveFormsModule ],
    providers: [HttpClient],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'JOSECRUD';
    showPost: boolean = false;
    showCreatePost: boolean = false;
    showUpdatePost: boolean = false;
    showListPost: boolean = true;

    posts: IPost[] = [];

    showCreatePostComponent(event: boolean) {
        this.showCreatePost = true;
        this.showListPost = false;
        this.showUpdatePost = false;
        this.showPost = false;
    }

    showUpdatePostComponent(event: boolean) {
        this.showUpdatePost = true;
        this.showListPost = false;
        this.showCreatePost = false;
        this.showPost = false;
    }

    showListPostComponent(event: boolean) {
        this.showListPost = true;
        this.showCreatePost = false;
        this.showUpdatePost = false;
        this.showPost = false;
    }

    showPostComponent(event: boolean) {
        this.showPost = true;
        this.showListPost = false;
        this.showCreatePost = false;
        this.showUpdatePost = false;
    }

    createPost($event: IPost) {
        this.posts.push($event);
    }
}
