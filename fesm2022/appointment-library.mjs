import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Output, Input, ViewChild, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import * as i4 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i1 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i3 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i5 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

class AppointmentLibraryService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AppointmentTableComponent {
    rescheduleAppointment = new EventEmitter();
    cancelAppointment = new EventEmitter();
    appointmentVisitsCount = 0;
    patientRegFields = [];
    ipSearchElement;
    paginator;
    displayedColumns = ['name', 'age', 'starts_in', 'location', 'cheif_complaint', 'telephone', 'actions'];
    tblDataSource = new MatTableDataSource([]);
    ngOnInit() {
    }
    checkPatientRegField(fieldName) {
        return this.patientRegFields.indexOf(fieldName) !== -1;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.tblDataSource.filter = filterValue.trim().toLowerCase();
        this.paginator.firstPage();
    }
    clearFilter() {
        this.tblDataSource.filter = null;
        this.ipSearchElement.nativeElement.value = "";
    }
    reschedule(appointment) {
        this.rescheduleAppointment.emit(appointment);
    }
    cancel(appointment) {
        this.cancelAppointment.emit(appointment);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AppointmentTableComponent, selector: "lib-appointment-table", inputs: { appointmentVisitsCount: "appointmentVisitsCount", patientRegFields: "patientRegFields" }, outputs: { rescheduleAppointment: "rescheduleAppointment", cancelAppointment: "cancelAppointment" }, viewQueries: [{ propertyName: "ipSearchElement", first: true, predicate: ["ipSearchInput"], descendants: true, static: true }, { propertyName: "paginator", first: true, predicate: ["tempPaginator"], descendants: true }], ngImport: i0, template: "<div class=\"row mt-3\">\r\n    <div class=\"col-md-12 p-0\">\r\n      <div class=\"text-right my-2\">\r\n        <mat-accordion class=\"intel-accordion-con\" multi data-test-id=\"matAccAppointment\">\r\n          <mat-expansion-panel [expanded]=\"true\" data-test-id=\"matExpAppointment\">\r\n            <mat-expansion-panel-header data-test-id=\"matExpHeaderAppointment\">\r\n              <mat-panel-title>\r\n                <div id=\"anchor-appointment\" class=\"anchor-con\"></div>\r\n                <div class=\"intel-accordion-title\">\r\n                  <img src=\"assets/svgs/cam-icon.svg\" alt=\"\" width=\"44px\">\r\n                  <h6 class=\"mb-0 ml-2\">{{'Appointments'}} ({{ appointmentVisitsCount }})</h6>\r\n                  <mat-icon aria-hidden=\"false\" aria-label=\"help icon\" matTooltip=\"{{'Scheduled appointments'}}\" matTooltipPosition=\"right\" data-test-id=\"matIcoHelpAppointment\">help_outline</mat-icon>\r\n                  <div class=\"input-group search-bar ml-auto\" (click)=\"$event.stopPropagation();\">\r\n                    <input type=\"text\" #apSearchInput class=\"form-control\" placeholder=\"{{ 'Search Appointments' }}\" aria-label=\"search1\" aria-describedby=\"basic-addon1\" (keyup)=\"applyFilter($event)\" (keydown.Space)=\"$event.stopPropagation()\" (keydown.Enter)=\"$event.stopPropagation()\" data-test-id=\"etSearchAppointmentDashboard\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\" *ngIf=\"!tblDataSource.filter\">\r\n                        <img src=\"assets/svgs/search-icon.svg\" alt=\"\" width=\"20px\" height=\"20px\">\r\n                      </span>\r\n                      <button data-test-id=\"btnResetApSerach\" class=\"matIconButton ml-0\" mat-icon-button aria-label=\"Reset appointment search\" *ngIf=\"tblDataSource.filter\" (click)=\"clearFilter('Appointment')\">\r\n                        <mat-icon class=\"ml-0\" style=\"line-height: normal;\">close</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"mat-elevation-z8\">\r\n              <table mat-table [dataSource]=\"tblDataSource\">\r\n  \r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Patient'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apPatient'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\">\r\n                    <div class=\"d-flex align-items-center\">\r\n                      <!-- <img src=\"{{ baseUrl + '/personimage/' + element.patientId }}\" alt=\"\" width=\"32px\" height=\"32px\" style=\"border-radius: 50%;\"> -->\r\n                      <img src=\"assets/svgs/user.svg\" alt=\"\" width=\"32px\" height=\"32px\" style=\"border-radius: 50%;\">\r\n                      <span class=\"font-bold ml-2\">{{element.patientName}} ({{(element.patientGender)}})</span>\r\n                    </div>\r\n                  </td>\r\n                </ng-container>\r\n  \r\n                <!-- Age Column -->\r\n                <ng-container matColumnDef=\"age\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Age'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apAge'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> {{element.patientAge}}{{'y'}} </td>\r\n                </ng-container>\r\n  \r\n                <!-- Starts In Column -->\r\n                <ng-container matColumnDef=\"starts_in\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Starts in'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apStart'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> <span [ngClass]=\"{ 'alert-danger': element.starts_in.includes('Due'), 'alert-success': element.starts_in.includes('Hour')||element.starts_in.includes('Minute') }\">{{element.starts_in}}</span></td>\r\n                </ng-container>\r\n  \r\n                <!-- Location Column -->\r\n                <ng-container matColumnDef=\"location\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Location'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apLocation'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> {{element?.visit?.location.name}} </td>\r\n                </ng-container>\r\n  \r\n                <!-- Chief complaint Column -->\r\n                <ng-container matColumnDef=\"cheif_complaint\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Chief Complaint'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apComplaint'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> {{element?.cheif_complaint}} </td>\r\n                </ng-container>\r\n  \r\n                <!-- Contact Column -->\r\n                <ng-container matColumnDef=\"telephone\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Contact'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element; let j=index;\" \r\n                    [attr.data-test-id]=\"'whatsappCall'+j\" class=\"text-center\"> <a *ngIf=\"element.telephone\" href=\"{{ element.telephone }}\" target=\"_blank\"\r\n                    class=\"icon-btn m-0\" [attr.data-test-id]=\"'linkPatientWhatsApp'+j\">\r\n                    <img src=\"assets/svgs/whatsapp-green.svg\" alt=\"\" />\r\n                  </a> </td>\r\n                </ng-container>\r\n  \r\n                <!-- Prescription Sent Column -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Actions'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apAction'+j\">\r\n                    <div class=\"actions-btn-wrap d-flex align-items-center\">\r\n                      <button class=\"action-btn blue-btn mr-2\" [attr.data-test-id]=\"'btnReschedule'+j\" type=\"button\" (click)=\"reschedule(element)\">{{'Reschedule'}}</button>\r\n                      <button class=\"action-btn pink-btn \" [attr.data-test-id]=\"'btnCancel'+j\" type=\"button\" (click)=\"cancel(element)\">{{'Cancel'}}</button>\r\n                    </div>\r\n                  </td>\r\n                </ng-container>\r\n  \r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                  <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumns.length\">\r\n                    {{'No any appointments scheduled.'}}\r\n                  </td>\r\n                </tr>\r\n  \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; let x=index; columns: displayedColumns;\" [attr.data-test-id]=\"'ap'+x\" [class.upcoming]=\"row.starts_in.includes('hours')||row.starts_in.includes('minutes')\"></tr>\r\n              </table>\r\n  \r\n              <mat-paginator #tempPaginator hidePageSize [pageSizeOptions]=\"[5, 10, 20]\" aria-label=\"Select page of periodic elements\"></mat-paginator>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n</div>\r\n  ", styles: [".mat-elevation-z8{box-shadow:none;width:100%;overflow-x:auto}table{width:100%;font-family:DM Sans}th.mat-header-cell{border:none;font-size:14px!important;font-weight:700;color:var(--color-gray);height:21px}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{border:none;min-width:60px;white-space:nowrap;padding-right:24px}th.mat-header-cell span.alert-danger,td.mat-cell span.alert-danger,td.mat-footer-cell span.alert-danger{color:var(--color-red);font-weight:700;background:transparent;border:none}th.mat-header-cell span.alert-success,td.mat-cell span.alert-success,td.mat-footer-cell span.alert-success{color:var(--color-green);font-weight:700;background:transparent;border:none}td.mat-cell{font-size:16px}tr.mat-row,tr.mat-footer-row{height:88px;border-radius:8px;cursor:pointer}tr.mat-row.upcoming{background:#e6fff3!important}tr.mat-row:nth-child(odd){background:#f7f7fa}td:first-child,th:first-child{border-radius:8px 0 0 8px}td:last-child,th:last-child{border-radius:0 8px 8px 0}.actions-btn-wrap .action-btn{outline:none;border:none;height:36px;min-width:102px;padding:6px 8px;background:#fff;border-radius:4px;color:var(--color-black);font-family:DM Sans;font-size:16px}.actions-btn-wrap .blue-btn{background:var(--color-lightGray);color:var(--color-darkBlue)}.actions-btn-wrap .pink-btn{background:var(--color-lightPink);color:var(--color-red)}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header.mat-expanded .input-group{display:flex}.input-group{background:var(--color-white);border:1px solid rgba(127,123,146,.5);border-radius:6px;height:46px;align-items:center;max-width:60vw;width:300px;display:none}.input-group .input-group-text{background:none;border:none;cursor:default}.input-group .form-control{border:none;outline:none;background:transparent;font-size:16px;line-height:150%;padding-left:16px}.input-group .form-control:focus{box-shadow:none}.intel-accordion-con .mat-expansion-panel{background:#fff;box-shadow:0 4px 24px #1f1c3a14;border-radius:20px!important;padding:24px;margin-bottom:24px}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header{padding:0}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header .mat-content{align-items:center}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{height:48px}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header:hover{background:transparent!important}.intel-accordion-con .mat-expansion-panel .intel-accordion-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;flex-wrap:wrap;width:100%}.intel-accordion-con .mat-expansion-panel .intel-accordion-title .mat-icon{height:20px;width:20px;font-size:20px;color:#461d90;margin-left:8px}.intel-accordion-con .mat-expansion-panel .intel-accordion-title h6{font-size:18px;font-weight:700;color:#000}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body{padding:0;margin-top:24px;position:relative}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body:after{content:\"\";position:absolute;top:0;height:1px;left:0;right:0;background:#efe8ff}.anchor-con{position:absolute;top:-120px;left:0}@media (max-width: 768px){.input-group{width:100%;max-width:100%;margin:10px 0}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header,.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{height:-moz-fit-content;height:fit-content}.info-icon{display:none}.anchor-con{top:-100px}}.matIconButton{border:none;background:transparent}\n"], dependencies: [{ kind: "component", type: i1.MatPaginator, selector: "mat-paginator", outputs: ["page"], exportAs: ["matPaginator"] }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.MatAccordion, selector: "mat-accordion", exportAs: ["matAccordion"] }, { kind: "component", type: i3.MatExpansionPanel, selector: "mat-expansion-panel", outputs: ["afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i3.MatExpansionPanelHeader, selector: "mat-expansion-panel-header" }, { kind: "directive", type: i3.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "component", type: i4.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i4.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i4.MatHeaderRowDef, selector: "[matHeaderRowDef]" }, { kind: "directive", type: i4.MatColumnDef, selector: "[matColumnDef]" }, { kind: "directive", type: i4.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i4.MatRowDef, selector: "[matRowDef]" }, { kind: "directive", type: i4.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i4.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i4.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i4.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i4.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", exportAs: ["matIcon"] }, { kind: "directive", type: i6.NgClass, selector: "[ngClass]" }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-appointment-table', template: "<div class=\"row mt-3\">\r\n    <div class=\"col-md-12 p-0\">\r\n      <div class=\"text-right my-2\">\r\n        <mat-accordion class=\"intel-accordion-con\" multi data-test-id=\"matAccAppointment\">\r\n          <mat-expansion-panel [expanded]=\"true\" data-test-id=\"matExpAppointment\">\r\n            <mat-expansion-panel-header data-test-id=\"matExpHeaderAppointment\">\r\n              <mat-panel-title>\r\n                <div id=\"anchor-appointment\" class=\"anchor-con\"></div>\r\n                <div class=\"intel-accordion-title\">\r\n                  <img src=\"assets/svgs/cam-icon.svg\" alt=\"\" width=\"44px\">\r\n                  <h6 class=\"mb-0 ml-2\">{{'Appointments'}} ({{ appointmentVisitsCount }})</h6>\r\n                  <mat-icon aria-hidden=\"false\" aria-label=\"help icon\" matTooltip=\"{{'Scheduled appointments'}}\" matTooltipPosition=\"right\" data-test-id=\"matIcoHelpAppointment\">help_outline</mat-icon>\r\n                  <div class=\"input-group search-bar ml-auto\" (click)=\"$event.stopPropagation();\">\r\n                    <input type=\"text\" #apSearchInput class=\"form-control\" placeholder=\"{{ 'Search Appointments' }}\" aria-label=\"search1\" aria-describedby=\"basic-addon1\" (keyup)=\"applyFilter($event)\" (keydown.Space)=\"$event.stopPropagation()\" (keydown.Enter)=\"$event.stopPropagation()\" data-test-id=\"etSearchAppointmentDashboard\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\" *ngIf=\"!tblDataSource.filter\">\r\n                        <img src=\"assets/svgs/search-icon.svg\" alt=\"\" width=\"20px\" height=\"20px\">\r\n                      </span>\r\n                      <button data-test-id=\"btnResetApSerach\" class=\"matIconButton ml-0\" mat-icon-button aria-label=\"Reset appointment search\" *ngIf=\"tblDataSource.filter\" (click)=\"clearFilter('Appointment')\">\r\n                        <mat-icon class=\"ml-0\" style=\"line-height: normal;\">close</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"mat-elevation-z8\">\r\n              <table mat-table [dataSource]=\"tblDataSource\">\r\n  \r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Patient'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apPatient'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\">\r\n                    <div class=\"d-flex align-items-center\">\r\n                      <!-- <img src=\"{{ baseUrl + '/personimage/' + element.patientId }}\" alt=\"\" width=\"32px\" height=\"32px\" style=\"border-radius: 50%;\"> -->\r\n                      <img src=\"assets/svgs/user.svg\" alt=\"\" width=\"32px\" height=\"32px\" style=\"border-radius: 50%;\">\r\n                      <span class=\"font-bold ml-2\">{{element.patientName}} ({{(element.patientGender)}})</span>\r\n                    </div>\r\n                  </td>\r\n                </ng-container>\r\n  \r\n                <!-- Age Column -->\r\n                <ng-container matColumnDef=\"age\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Age'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apAge'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> {{element.patientAge}}{{'y'}} </td>\r\n                </ng-container>\r\n  \r\n                <!-- Starts In Column -->\r\n                <ng-container matColumnDef=\"starts_in\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Starts in'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apStart'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> <span [ngClass]=\"{ 'alert-danger': element.starts_in.includes('Due'), 'alert-success': element.starts_in.includes('Hour')||element.starts_in.includes('Minute') }\">{{element.starts_in}}</span></td>\r\n                </ng-container>\r\n  \r\n                <!-- Location Column -->\r\n                <ng-container matColumnDef=\"location\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Location'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apLocation'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> {{element?.visit?.location.name}} </td>\r\n                </ng-container>\r\n  \r\n                <!-- Chief complaint Column -->\r\n                <ng-container matColumnDef=\"cheif_complaint\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Chief Complaint'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apComplaint'+j\" [routerLink]=\"['/dashboard/visit-summary', element?.visitUuid]\"> {{element?.cheif_complaint}} </td>\r\n                </ng-container>\r\n  \r\n                <!-- Contact Column -->\r\n                <ng-container matColumnDef=\"telephone\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Contact'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element; let j=index;\" \r\n                    [attr.data-test-id]=\"'whatsappCall'+j\" class=\"text-center\"> <a *ngIf=\"element.telephone\" href=\"{{ element.telephone }}\" target=\"_blank\"\r\n                    class=\"icon-btn m-0\" [attr.data-test-id]=\"'linkPatientWhatsApp'+j\">\r\n                    <img src=\"assets/svgs/whatsapp-green.svg\" alt=\"\" />\r\n                  </a> </td>\r\n                </ng-container>\r\n  \r\n                <!-- Prescription Sent Column -->\r\n                <ng-container matColumnDef=\"actions\">\r\n                  <th mat-header-cell *matHeaderCellDef> {{'Actions'}} </th>\r\n                  <td mat-cell *matCellDef=\"let element;let j=index;\" [attr.data-test-id]=\"'apAction'+j\">\r\n                    <div class=\"actions-btn-wrap d-flex align-items-center\">\r\n                      <button class=\"action-btn blue-btn mr-2\" [attr.data-test-id]=\"'btnReschedule'+j\" type=\"button\" (click)=\"reschedule(element)\">{{'Reschedule'}}</button>\r\n                      <button class=\"action-btn pink-btn \" [attr.data-test-id]=\"'btnCancel'+j\" type=\"button\" (click)=\"cancel(element)\">{{'Cancel'}}</button>\r\n                    </div>\r\n                  </td>\r\n                </ng-container>\r\n  \r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                  <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumns.length\">\r\n                    {{'No any appointments scheduled.'}}\r\n                  </td>\r\n                </tr>\r\n  \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; let x=index; columns: displayedColumns;\" [attr.data-test-id]=\"'ap'+x\" [class.upcoming]=\"row.starts_in.includes('hours')||row.starts_in.includes('minutes')\"></tr>\r\n              </table>\r\n  \r\n              <mat-paginator #tempPaginator hidePageSize [pageSizeOptions]=\"[5, 10, 20]\" aria-label=\"Select page of periodic elements\"></mat-paginator>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n</div>\r\n  ", styles: [".mat-elevation-z8{box-shadow:none;width:100%;overflow-x:auto}table{width:100%;font-family:DM Sans}th.mat-header-cell{border:none;font-size:14px!important;font-weight:700;color:var(--color-gray);height:21px}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{border:none;min-width:60px;white-space:nowrap;padding-right:24px}th.mat-header-cell span.alert-danger,td.mat-cell span.alert-danger,td.mat-footer-cell span.alert-danger{color:var(--color-red);font-weight:700;background:transparent;border:none}th.mat-header-cell span.alert-success,td.mat-cell span.alert-success,td.mat-footer-cell span.alert-success{color:var(--color-green);font-weight:700;background:transparent;border:none}td.mat-cell{font-size:16px}tr.mat-row,tr.mat-footer-row{height:88px;border-radius:8px;cursor:pointer}tr.mat-row.upcoming{background:#e6fff3!important}tr.mat-row:nth-child(odd){background:#f7f7fa}td:first-child,th:first-child{border-radius:8px 0 0 8px}td:last-child,th:last-child{border-radius:0 8px 8px 0}.actions-btn-wrap .action-btn{outline:none;border:none;height:36px;min-width:102px;padding:6px 8px;background:#fff;border-radius:4px;color:var(--color-black);font-family:DM Sans;font-size:16px}.actions-btn-wrap .blue-btn{background:var(--color-lightGray);color:var(--color-darkBlue)}.actions-btn-wrap .pink-btn{background:var(--color-lightPink);color:var(--color-red)}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header.mat-expanded .input-group{display:flex}.input-group{background:var(--color-white);border:1px solid rgba(127,123,146,.5);border-radius:6px;height:46px;align-items:center;max-width:60vw;width:300px;display:none}.input-group .input-group-text{background:none;border:none;cursor:default}.input-group .form-control{border:none;outline:none;background:transparent;font-size:16px;line-height:150%;padding-left:16px}.input-group .form-control:focus{box-shadow:none}.intel-accordion-con .mat-expansion-panel{background:#fff;box-shadow:0 4px 24px #1f1c3a14;border-radius:20px!important;padding:24px;margin-bottom:24px}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header{padding:0}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header .mat-content{align-items:center}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{height:48px}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header:hover{background:transparent!important}.intel-accordion-con .mat-expansion-panel .intel-accordion-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;flex-wrap:wrap;width:100%}.intel-accordion-con .mat-expansion-panel .intel-accordion-title .mat-icon{height:20px;width:20px;font-size:20px;color:#461d90;margin-left:8px}.intel-accordion-con .mat-expansion-panel .intel-accordion-title h6{font-size:18px;font-weight:700;color:#000}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body{padding:0;margin-top:24px;position:relative}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body:after{content:\"\";position:absolute;top:0;height:1px;left:0;right:0;background:#efe8ff}.anchor-con{position:absolute;top:-120px;left:0}@media (max-width: 768px){.input-group{width:100%;max-width:100%;margin:10px 0}.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header,.intel-accordion-con .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{height:-moz-fit-content;height:fit-content}.info-icon{display:none}.anchor-con{top:-100px}}.matIconButton{border:none;background:transparent}\n"] }]
        }], propDecorators: { rescheduleAppointment: [{
                type: Output
            }], cancelAppointment: [{
                type: Output
            }], appointmentVisitsCount: [{
                type: Input
            }], patientRegFields: [{
                type: Input
            }], ipSearchElement: [{
                type: ViewChild,
                args: ['ipSearchInput', { static: true }]
            }], paginator: [{
                type: ViewChild,
                args: ['tempPaginator']
            }] } });

class AppointmentLibraryComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AppointmentLibraryComponent, selector: "lib-appointment-library", ngImport: i0, template: `
    <!-- <p>
      appointment-library works!
    </p> -->
    <lib-appointment-table></lib-appointment-table>
  `, isInline: true, dependencies: [{ kind: "component", type: AppointmentTableComponent, selector: "lib-appointment-table", inputs: ["appointmentVisitsCount", "patientRegFields"], outputs: ["rescheduleAppointment", "cancelAppointment"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppointmentLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-appointment-library', template: `
    <!-- <p>
      appointment-library works!
    </p> -->
    <lib-appointment-table></lib-appointment-table>
  ` }]
        }] });

// projects/my-library/src/lib/material.module.ts
class MyLibraryMaterialModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: MyLibraryMaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: MyLibraryMaterialModule, exports: [MatPaginatorModule,
            MatTooltipModule,
            MatInputModule,
            MatFormFieldModule,
            MatExpansionModule,
            MatBottomSheetModule,
            MatSnackBarModule,
            MatMenuModule,
            MatTableModule,
            MatIconModule,
            MatSidenavModule,
            MatTabsModule,
            CdkAccordionModule,
            MatDialogModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: MyLibraryMaterialModule, providers: [
            { provide: MAT_DIALOG_DATA, useValue: {} },
            { provide: MatDialogRef, useValue: {} },
        ], imports: [MatPaginatorModule,
            MatTooltipModule,
            MatInputModule,
            MatFormFieldModule,
            MatExpansionModule,
            MatBottomSheetModule,
            MatSnackBarModule,
            MatMenuModule,
            MatTableModule,
            MatIconModule,
            MatSidenavModule,
            MatTabsModule,
            CdkAccordionModule,
            MatDialogModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: MyLibraryMaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        MatPaginatorModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatExpansionModule,
                        MatBottomSheetModule,
                        MatSnackBarModule,
                        MatMenuModule,
                        MatTableModule,
                        MatIconModule,
                        MatSidenavModule,
                        MatTabsModule,
                        CdkAccordionModule,
                        MatDialogModule,
                        // Add other modules here
                    ],
                    providers: [
                        { provide: MAT_DIALOG_DATA, useValue: {} },
                        { provide: MatDialogRef, useValue: {} },
                    ]
                }]
        }] });

class AppointmentLibraryModule {
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

/*
 * Public API Surface of appointment-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppointmentLibraryComponent, AppointmentLibraryModule, AppointmentLibraryService, AppointmentTableComponent };
//# sourceMappingURL=appointment-library.mjs.map
