import {Routes} from '@angular/router';
import {AdminLayoutComponent} from "./admin/layout/admin-layout/admin-layout.component";

import {ListPostComponent} from "./admin/components/list-post/list-post.component";
import { UpdateUserComponent } from './admin/components/update-user/update-user.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'post',
                children: [
                    {
                        path: 'list',
                        component: ListPostComponent
                    },
                    {
                        path: 'edit/:userId',
                        component: UpdateUserComponent
                    },
                ]
            }
        ]
    }
];
