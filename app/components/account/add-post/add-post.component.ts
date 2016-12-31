import { Component, Input, ViewChild } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { PostModel } from '../../../models/post.model';
import { UserModel } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'add-post',
    templateUrl: 'add-post.html',
    styleUrls: ['add-post.css']
})

export class AddPostComponent {

    @Input() user: UserModel;
    @ViewChild('imgUpload') imgUpload;
    @ViewChild('description') description;
    post: PostModel;
    dropImageFloating: boolean;

    constructor(private postsService: PostsService) {
        this.post = new PostModel();
    }

    dropImage(event: any) {
        event.preventDefault();

        this.post.img = event.dataTransfer.files[0];

        let dataURL = URL.createObjectURL(event.dataTransfer.files[0]);
        let output = this.imgUpload.nativeElement;
        output.src = dataURL;
    }

    imageFloating(event) {
        event.preventDefault();
        this.dropImageFloating = true;
    }

    postFeed(user: UserModel) {
        this.post.id_user = user.id;
        this.post.img_user = user.img;
        this.post.first_name_user = user.first_name;
        this.post.description = this.description.nativeElement.innerText;
        
        this.postsService.setPost(this.post).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    }
}