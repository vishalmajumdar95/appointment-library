# AppointmentLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0

## Code scaffolding

Run `ng generate component component-name --project appointment-library` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project appointment-library`.
> Note: Don't forget to add `--project appointment-library` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build appointment-library` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build appointment-library`, go to the dist folder `cd dist/appointment-library` and run `npm publish`.

## Running unit tests

Run `ng test appointment-library` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Installation

To install the Appointment Library, run the following command:

### Install from GitHub or NPM

```bash
npm install git+https://github.com/vishalmajumdar95/appointment-library.git
```
OR

```bash
npm install appointment-library 
```
Note: The --force flag is used to override any dependency conflicts. Use it cautiously to avoid breaking changes in your project.

### Usage
Once the package is installed, you can import the `AppointmentLibraryModule` in your Angular application.

### Import the Module
In your Angular module (e.g., `app.module.ts`), import the `AppointmentLibraryModule`:


```typescript
import { AppointmentLibraryModule } from 'appointment-library';

@NgModule({
  declarations: [AppComponent],
  imports: [AppointmentLibraryModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Using the Component
To use the appointment component, add the <lib-appointment-library> selector to your template file:

```html
<lib-appointment-library></lib-appointment-library>
```
This component will render the appointment scheduling UI.
