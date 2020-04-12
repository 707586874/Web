import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-image',
    template: `
    <img [src]="url" class="image-thumbnail">`,
    styles: ['img{width: 9rem;heigth: 9rem}']
})
export class productImageComponent {
    @Input() url: string;

}