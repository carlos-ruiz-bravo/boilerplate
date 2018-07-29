import { Component, ViewChild, ElementRef } from '@angular/core';
import { SplitButton } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/components/common/menuitem';
import { FileUpload } from '../../../node_modules/primeng/fileupload';
@Component({
    selector: 'app-detections-form',
    templateUrl: './detections-form.component.html'
})

export class DetectionsForm {

    @ViewChild(FileUpload) fileUpload: FileUpload;
    @ViewChild(SplitButton) splitButton: SplitButton;
    @ViewChild('noteText') noteText: ElementRef;

    addType = '';
    referenceCols = [{ field: 'type', header: 'type' },
    { field: 'createdDate', header: 'createdDate' }, { field: 'createdBy', header: 'createdBy' }, { field: 'lastUpdatedDate', header: 'lastUpdatedDate' }];
    references = [
        {
            type: 'File',
            createdDate: 'as',
            createdBy: 'now',
            lastUpdatedDate: 'now'
        }
    ];

    notes = [
        { createdBy: "John Wayne", text: "This is a long comment which can contain several rows.. asdfsdfasdsadfsdfas sadfasfasdfsadfds",createdDate:"1532893373115"  },
        { createdBy: "Alex Johnson", text: "This is a long comment which can contain several rows.. asdfsdfasdsadfsdfas sadfasfasdfsadfds" ,createdDate:"1532893373115" }
    ]
    items: MenuItem[] = [
        {
            label: 'File', icon: 'fa-file', command: () => {
                this.addType = 'file';
            }
        },
        {
            label: 'Url', icon: 'fa-link', command: () => {
                console.log('url')
            }
        },
        {
            label: 'Text', icon: 'fa-commenting', command: () => { console.log('url') }
        }

    ];


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

    formatSize(size) {
        return this.fileUpload.formatSize(size);
    }

    onAddClick() {
        this.splitButton.dropdownClick = true;
        this.splitButton.show();
    }

    remove(event, i) {
        this.fileUpload.remove(event, i);
    }

    enEditReference(reference) {
        this.addType = 'file';
    }

    addNote() {
        let value =this.noteText.nativeElement.value
        this.notes.push({ createdBy: 'User, Current', text: value, createdDate:"1532893373115" });
    }
}