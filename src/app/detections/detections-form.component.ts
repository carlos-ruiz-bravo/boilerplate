import { Component, ViewChild } from '@angular/core';
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
}