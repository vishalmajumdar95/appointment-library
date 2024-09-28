import { ElementRef, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface AppointmentDatas {
    patientId: string;
    patientName: string;
    patientGender: string;
    patientAge: number;
    starts_in: string;
    visit: {
        location: {
            name: string;
        };
    };
    cheif_complaint: string;
    telephone: string | null;
    visitUuid: string;
}
export declare class AppointmentTableComponent implements OnInit {
    items: string[];
    expandedIndex: number;
    displayedColumns: string[];
    dataSource: MatTableDataSource<any, MatPaginator>;
    isLoaded: boolean;
    appointments: AppointmentDatas[];
    patientRegFields: string[];
    paginator: MatPaginator;
    searchElement: ElementRef;
    ngAfterViewInit(): void;
    constructor();
    ngOnInit(): void;
    /**
    * Apply filter on a datasource
    * @param {Event} event - Input's change event
    * @return {void}
    */
    applyFilter1(event: Event): void;
    /**
    * Clear filter from a datasource
    * @return {void}
    */
    clearFilter(): void;
    checkPatientRegField(fieldName: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppointmentTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppointmentTableComponent, "lib-appointment-table", never, {}, {}, never, never, false>;
}
