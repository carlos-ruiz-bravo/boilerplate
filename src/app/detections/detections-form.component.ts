import { Component } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'app-detections-form',
    templateUrl: './detections-form.component.html'
})

export class DetectionsForm {

    constructor() {

    }

    msgs = [];

    // show() {
    //    // this.messageService.add({severity:'success', summary:'Message', detail:'Record Saved'});

    // }

    show() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Info Message', detail: 'Record saved sucessfully' });
    }

    uploadedFiles: any[] = [];

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    onUploadError(event) {
        let errorMessage = "Upload Failed."
        if (event.xhr && event.xhr.response) {
            errorMessage = JSON.parse(event.xhr.response).error;
        }

        this.msgs.push({ severity: 'error', summary: 'File Upload Error', detail: errorMessage });
    }
}