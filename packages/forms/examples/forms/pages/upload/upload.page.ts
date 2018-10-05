import { Component, OnInit } from '@angular/core';
import { InvalidFile, UploadOptions, Uploader } from '@acpaas-ui/ngx-components/forms';

@Component({
	templateUrl: './upload.page.html',
})
export class FormsUploadDemoPageComponent {
	public files = [];
	public invalidFiles: InvalidFile[] = [];
	public output: any;
	public queuedFiles: File[] = [];
	public uploadedFiles: File[] = [];
	public uploader = new Uploader({
		allowedFileTypes: ['jpg', 'jpeg', 'png'],
		type: 'drop',
	});
	public showError = false;
	public fileName = '';

	public dropzone1: UploadOptions = {
		allowedMimeTypes: ['image/jpeg'],
		maxFileSize: 10000000,
		queueLimit: 2,
		type: 'drop',
	};

	public dropzone2: UploadOptions = {
		type: 'button',
		allowedFileTypes: ['.jpg', 'jpeg', 'png'],
		autoUpload: true,
		maxFileSize: 2000000,
	};

	public uploadImportExample = `import { UploadModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
	imports: [
		UploadModule,
	]
});

export class AppModule {};`;
	public uploadExampleJS1 = `public dropzone1: UploadOptions = {
  allowedMimeTypes: ['image/jpeg'],
  queueLimit: 2,
};`;
	public uploadExampleHTML1 = `<aui-upload [options]="dropzone1" (selectUploadedFiles)="onUpload($event)">
  <div class="aui-upload-message">
    Drag your files here or click to upload
  </div>
  <div class="aui-upload-description">
    Optional description message
  </div>
</aui-upload>`;
	public uploadExampleJS2 = `public dropzone2: UploadOptions = {
  type: 'button',
};`;
	public uploadExampleHTML2 = `<aui-upload [options]="dropzone2" (selectUploadedFiles)="onUpload($event)">
  <div class="aui-upload-button">
    Upload button
  </div>
</aui-upload>`;
public uploadExampleJS3 = `public uploader = new Uploader({
	allowedFileTypes: ['jpg', 'jpeg', 'png'],
	type: 'drop',
});`;
public uploadExampleHTML3 =
`<aui-upload-zone
	[uploader]="uploader"
	(queuedFiles)="onQueuedFiles($event)"
	(uploadedFiles)="onUploadedFiles($event)"
	(invalidFiles)="onInvalidFiles($event)"
>
<div class="aui-upload-message">
		Drag your files here or click to upload
</div>
<div class="aui-upload-description">
		Maximum filesize: 10 MB,
		File extension: jpg, jpeg, png
</div>
</aui-upload-zone>
<aui-upload-queue [files]="queuedFiles"></aui-upload-queue>
<div *ngIf="showError" class="u-margin-bottom">
<ul class="m-upload__files">
		<li class="is-error">
				<span class="fa fa-warning"></span>
				<span class="m-upload__filename">{{ fileName }}</span>
				<span class="m-upload__error">This file extension is not allowed.</span>
				<button
					(click)="reloadErrors()"
					class="m-upload__delete a-button-transparent a-button--danger a-button--small has-icon">
						<i class="fa fa-close"></i>
				</button>
		</li>
</ul>
</div>`;

	public onUpload(files) {
		this.files = this.files.concat(files);
		console.log('files = ', files);
	}

	// CUSTOM UPLOAD
	public onQueuedFiles(files: File[]) {
			if (!files.length) {
					return;
			}

			this.queuedFiles = this.queuedFiles.concat(files);
	}

	public onUploadedFiles(files) {
		this.uploadedFiles = this.uploadedFiles.concat(files);
}

	public onInvalidFiles(errorFiles: InvalidFile[]) {
		this.invalidFiles = errorFiles;
		if (errorFiles.length > 0) {
				this.fileName = this.invalidFiles[0]['file'].name;
				this.showError = true;
				this.invalidFiles = [];
		} else {
				this.showError = false;
		}
	}

	public reloadErrors() {
		this.showError = false;
		if (!this.queuedFiles.length) {
			return;
		}
	}
}
