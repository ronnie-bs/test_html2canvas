import { Component } from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as saveAs from 'file-saver';

// window.html2canvas = html2canvas;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    selectedComp = 'org-summary';

    save() {
        html2canvas(document.querySelector('#capture')).then(canvas => {
            canvas.toBlob(function (blob) {
                saveAs(blob, 'sample.png');
            });
        });
    }
}
