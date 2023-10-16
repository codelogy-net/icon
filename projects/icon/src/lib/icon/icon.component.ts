import {
  Component, ElementRef,
  inject,
  Input,
  numberAttribute,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { loadIcon } from 'iconify-icon';

@Component({
  selector: 'icon',
  exportAs: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  host: {
    'class': 'icon',
    '[class.is-loaded]': 'loaded'
  }
})
export class IconComponent implements OnChanges {
  private _elementRef = inject(ElementRef);

  @Input()
  name: string | any;

  @Input({ transform: numberAttribute })
  set size(size: number) {
    this._elementRef.nativeElement.style.setProperty('--icon-svg-size', size + 'px');
  }

  path = '';
  loaded = false;

  private _viewBoxWidth = 0;
  private _viewBoxHeight = 0;

  get viewBox() {
    return `0 0 ${this._viewBoxWidth} ${this._viewBoxHeight}`
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && changes['name'].currentValue !== changes['name'].previousValue) {
      this._loadIcon();
    }
  }

  private _loadIcon() {
    this.loaded = false;
    loadIcon(this.name)
      .then(data => {
        this.path = data.body;
        this._viewBoxWidth = data.width;
        this._viewBoxHeight = data.height;
        this.loaded = true;
      })
    ;
  }
}
