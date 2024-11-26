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
            CommonModule], exports: [AppointmentLibraryComponent,
            AppointmentTableComponent] });
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
                        AppointmentTableComponent
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA,
                        NO_ERRORS_SCHEMA
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hcHBvaW50bWVudC1saWJyYXJ5L3NyYy9saWIvYXBwb2ludG1lbnQtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUU1RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQW9CNUQsTUFBTSxPQUFPLHdCQUF3Qjt1R0FBeEIsd0JBQXdCO3dHQUF4Qix3QkFBd0IsaUJBaEJqQywyQkFBMkI7WUFDM0IseUJBQXlCLGFBR3pCLHVCQUF1QjtZQUN2QixZQUFZLGFBR1osMkJBQTJCO1lBQzNCLHlCQUF5Qjt3R0FPaEIsd0JBQXdCLFlBWmpDLHVCQUF1QjtZQUN2QixZQUFZOzsyRkFXSCx3QkFBd0I7a0JBbEJwQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiwyQkFBMkI7d0JBQzNCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsMkJBQTJCO3dCQUMzQix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLGdCQUFnQjtxQkFDakI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9hcHBvaW50bWVudC1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBvaW50bWVudFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHBvaW50bWVudC10YWJsZS9hcHBvaW50bWVudC10YWJsZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBNYXRlcmlhbCBtb2R1bGVzIGltcG9ydHNcbmltcG9ydCB7IE15TGlicmFyeU1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBvaW50bWVudExpYnJhcnlDb21wb25lbnQsXG4gICAgQXBwb2ludG1lbnRUYWJsZUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTXlMaWJyYXJ5TWF0ZXJpYWxNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBcHBvaW50bWVudExpYnJhcnlDb21wb25lbnQsXG4gICAgQXBwb2ludG1lbnRUYWJsZUNvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSxcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwb2ludG1lbnRMaWJyYXJ5TW9kdWxlIHsgfVxuIl19