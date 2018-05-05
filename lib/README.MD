# sp-multi-select-dropdown

## Installation

To install this library, run:

```bash
$ npm install sp-multi-select-dropdown --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import SpMultiSelectDropdownModule
import { SpMultiSelectDropdownModule } from 'sp-multi-select-dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify SpMultiSelectDropdownModule as an import
    SpMultiSelectDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its SpMultiSelectDropdown in your Angular application:

```xml
<!-- You can now use SpMultiSelectDropdown component in app.component.html -->
<h1>
  {{title}}
</h1>
<sp-multi-select-dropdown [placeholder]="'placeholder text'" [items]="items" (change)="onChange($event)"></sp-multi-select-dropdown>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [srjn45](mailto:srajanpathak45@gmail.com)

## Change Log

### 1.1.2

> added placeholder
