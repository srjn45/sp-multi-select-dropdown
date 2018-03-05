# sp-multi-select-dropdown
Dropdown with checkbox list in material design for Angular 5

## Features

- Multi Select with checkboxes
- selected items appear as chips
- removing chip deselect the item
- horizontal scroll buttons for chips

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
<sp-multi-select-dropdown [items]="items" (change)="onChange($event)"></sp-multi-select-dropdown>
```

## License

MIT © [srjn45](mailto:srajanpathak45@gmail.com)