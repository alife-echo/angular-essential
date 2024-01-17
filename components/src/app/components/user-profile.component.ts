import { Component } from "@angular/core";
import { ProfilePhoto } from "./profile-photo.component";

@Component({
    selector:'user-profile',
    imports:[ProfilePhoto],
    template:` 
    <div class="profile-photo">
        <profile-photo/>
        <input type="file" value="Upload a new Profile photo">    
    </div>
    `,
    standalone:true
})

export class UserProfile {}