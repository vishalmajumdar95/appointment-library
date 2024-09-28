import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppointmentLibraryComponent } from './appointment-library.component';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { CommonModule } from '@angular/common';
// Material modules imports
import { MyLibraryMaterialModule } from './material.module';
import * as i0 from "@angular/core";
export class AppointmentLibraryModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryModule, declarations: [AppointmentLibraryComponent,
            AppointmentTableComponent], imports: [MyLibraryMaterialModule,
            CommonModule], exports: [AppointmentLibraryComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryModule, imports: [MyLibraryMaterialModule,
            CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AppointmentLibraryComponent,
                        AppointmentTableComponent
                    ],
                    imports: [
                        MyLibraryMaterialModule,
                        CommonModule
                    ],
                    exports: [
                        AppointmentLibraryComponent,
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA,
                        NO_ERRORS_SCHEMA
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hcHBvaW50bWVudC1saWJyYXJ5L3NyYy9saWIvYXBwb2ludG1lbnQtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUU1RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQW1CNUQsTUFBTSxPQUFPLHdCQUF3Qjt1R0FBeEIsd0JBQXdCO3dHQUF4Qix3QkFBd0IsaUJBZmpDLDJCQUEyQjtZQUMzQix5QkFBeUIsYUFHekIsdUJBQXVCO1lBQ3ZCLFlBQVksYUFHWiwyQkFBMkI7d0dBT2xCLHdCQUF3QixZQVhqQyx1QkFBdUI7WUFDdkIsWUFBWTs7MkZBVUgsd0JBQXdCO2tCQWpCcEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osMkJBQTJCO3dCQUMzQix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBvaW50bWVudExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2FwcG9pbnRtZW50LWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcG9pbnRtZW50VGFibGVDb21wb25lbnQgfSBmcm9tICcuL2FwcG9pbnRtZW50LXRhYmxlL2FwcG9pbnRtZW50LXRhYmxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIE1hdGVyaWFsIG1vZHVsZXMgaW1wb3J0c1xuaW1wb3J0IHsgTXlMaWJyYXJ5TWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcG9pbnRtZW50TGlicmFyeUNvbXBvbmVudCxcbiAgICBBcHBvaW50bWVudFRhYmxlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNeUxpYnJhcnlNYXRlcmlhbE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcG9pbnRtZW50TGlicmFyeUNvbXBvbmVudCxcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcG9pbnRtZW50TGlicmFyeU1vZHVsZSB7IH1cbiJdfQ==