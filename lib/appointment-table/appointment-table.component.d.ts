import { ElementRef, OnInit, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AppointmentModel } from './model';
import * as i0 from "@angular/core";
export declare class AppointmentTableComponent implements OnInit {
    rescheduleAppointment: EventEmitter<AppointmentModel>;
    cancelAppointment: EventEmitter<AppointmentModel>;
    appointmentVisitsCount: number;
    patientRegFields: string[];
    ipSearchElement: ElementRef;
    paginator: MatPaginator;
    displayedColumns: string[];
    tblDataSource: any;
    ngOnInit(): void;
    checkPatientRegField(fieldName: any): boolean;
    applyFilter(event: Event): void;
    clearFilter(): void;
    reschedule(appointment: AppointmentModel): void;
    cancel(appointment: AppointmentModel): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppointmentTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppointmentTableComponent, "lib-appointment-table", never, { "appointmentVisitsCount": "appointmentVisitsCount"; "patientRegFields": "patientRegFields"; }, { "rescheduleAppointment": "rescheduleAppointment"; "cancelAppointment": "cancelAppointment"; }, never, never, false>;
}
