webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\n  <header class=\"mb-2\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light space-between\">\n        <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/company']\">Mobis Test Project</a>\n        <div>\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/company']\">Companies List <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/worker']\">Workers List</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n  </header>\n  <section class=\"main\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var companies_component_1 = __webpack_require__("./src/app/components/companies/companies.component.ts");
var workers_component_1 = __webpack_require__("./src/app/components/workers/workers.component.ts");
var tasks_component_1 = __webpack_require__("./src/app/components/tasks/tasks.component.ts");
var primeng_1 = __webpack_require__("./node_modules/primeng/primeng.js");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var company_create_component_1 = __webpack_require__("./src/app/components/companies/company-create.component.ts");
var company_edit_component_1 = __webpack_require__("./src/app/components/companies/company-edit.component.ts");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var worker_create_component_1 = __webpack_require__("./src/app/components/workers/worker-create.component.ts");
var worker_edit_component_1 = __webpack_require__("./src/app/components/workers/worker-edit.component.ts");
var task_create_component_1 = __webpack_require__("./src/app/components/tasks/task-create.component.ts");
var task_edit_component_1 = __webpack_require__("./src/app/components/tasks/task-edit.component.ts");
var form_group_component_1 = __webpack_require__("./src/app/helpers/form-group.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                companies_component_1.CompaniesComponent,
                workers_component_1.WorkersComponent,
                tasks_component_1.TasksComponent,
                company_create_component_1.CompanyCreateComponent,
                company_edit_component_1.CompanyEditComponent,
                worker_create_component_1.WorkerCreateComponent,
                worker_edit_component_1.WorkerEditComponent,
                task_create_component_1.TaskCreateComponent,
                task_edit_component_1.TaskEditComponent,
                form_group_component_1.FormGroupComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_1.AppRoutingModule,
                primeng_1.DataTableModule,
                primeng_1.DataTableModule,
                primeng_1.ConfirmDialogModule,
                primeng_1.InputTextModule,
                primeng_1.InputMaskModule,
                primeng_1.CalendarModule,
                primeng_1.DropdownModule,
                primeng_1.ButtonModule,
                primeng_1.DialogModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                services_1.CompanyService,
                services_1.WorkerService,
                services_1.TaskService,
                primeng_1.ConfirmationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var companies_component_1 = __webpack_require__("./src/app/components/companies/companies.component.ts");
var workers_component_1 = __webpack_require__("./src/app/components/workers/workers.component.ts");
exports.routes = [
    {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full',
    },
    {
        path: 'company',
        component: companies_component_1.CompaniesComponent,
        data: {
            title: 'Companies'
        }
    },
    {
        path: 'worker',
        component: workers_component_1.WorkersComponent,
        data: {
            title: 'Workers'
        }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/components/companies/companies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" style=\"clear:both\">\n  <div class=\"ui-widget-header display-flex space-between\" style=\"padding:4px 10px;border-bottom: 0 none\">\n    <span class=\"table-name\">Companies List</span>\n    <button type=\"button\" pButton (click)=\"showDialog()\" label=\"Add\"></button>\n  </div>\n  <p-dataTable [value]=\"companies\" \n               [rows]=\"10\" \n               [paginator]=\"true\" \n               [pageLinks]=\"5\" \n               [rowsPerPageOptions]=\"[5,10,25,50]\" \n               selectionMode=\"single\"\n               [(selection)]=\"selectedCompany\" \n               dataKey=\"Id\"\n               [globalFilter]=\"gb\">\n               <p-column field=\"Id\" header=\"Id\" hidden=\"true\"></p-column>\n               <p-column field=\"Name\" [sortable]=\"true\" header=\"Name\"></p-column>\n               <p-column field=\"Address\" [sortable]=\"true\" header=\"Address\"></p-column>\n               <p-column field=\"PhoneNumber\" [sortable]=\"true\" header=\"PhoneNumber\"></p-column>\n               <p-column field=\"WorkersQuantity\" [sortable]=\"true\" header=\"Workers Quantity\"></p-column>\n               <p-footer>\n                <div class=\"ui-helper-clearfix datatable-footer\" style=\"width:100%\">\n                    <button type=\"button\" pButton (click)=\"onEditCompany()\" [disabled]=\"!selectedCompany\" label=\"Edit\"></button>\n                    <button type=\"button\" pButton (click)=\"deleteConfirm(selectedCompany)\" [disabled]=\"!selectedCompany\" label=\"Delete\"></button>\n                </div>\n              </p-footer>\n  </p-dataTable>\n</div>\n\n<p-dialog \n    header=\"Create Company\" \n    [(visible)]=\"dialogVisible\"\n    [width]=\"350\"\n    [height]=\"410\">\n  <app-company-create\n    (onCreated)=\"onEdit($event)\">\n  </app-company-create>\n</p-dialog>\n\n<p-dialog \n  header=\"Edit Company\" \n  [(visible)]=\"editDialogVisible\"\n  [width]=\"350\"\n  [height]=\"410\">\n  <app-company-edit\n    *ngIf=\"editDialogVisible\"\n    (onEdited)=\"onEdit($event)\"\n    [companyId] = 'selectedCompany.Id'>\n  </app-company-edit>\n</p-dialog>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n"

/***/ }),

/***/ "./src/app/components/companies/companies.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var primeng_1 = __webpack_require__("./node_modules/primeng/primeng.js");
var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(cService, confirmationService) {
        this.cService = cService;
        this.confirmationService = confirmationService;
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this.cService.getAll().subscribe(function (x) {
            _this.companies = x;
        });
    };
    CompaniesComponent.prototype.showDialog = function () {
        this.dialogVisible = true;
    };
    CompaniesComponent.prototype.onEditCompany = function () {
        this.editDialogVisible = true;
    };
    CompaniesComponent.prototype.onEdit = function (agreed) {
        if (agreed) {
            this.getCompanies();
            this.dialogVisible = false;
            this.editDialogVisible = false;
        }
        else
            alert('false');
    };
    CompaniesComponent.prototype.onDeleteCompany = function (id) {
        var _this = this;
        this.cService.delete(id).subscribe(function (x) {
            if (x)
                _this.getCompanies();
            else
                alert('false');
        });
    };
    CompaniesComponent.prototype.deleteConfirm = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "Are you sure that you want to delete company named " + this.selectedCompany.Name + "?",
            accept: function () {
                _this.onDeleteCompany(_this.selectedCompany.Id);
            }
        });
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            selector: 'app-companies',
            template: __webpack_require__("./src/app/components/companies/companies.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [services_1.CompanyService,
            primeng_1.ConfirmationService])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;


/***/ }),

/***/ "./src/app/components/companies/company-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\"> \n  <form [formGroup]=\"companyForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">      \n    <form-group \n      [cName]=\"'Name'\"\n      formControlName=\"Name\">          \n    </form-group>\n    <form-group \n      [cName]=\"'Address'\"\n      formControlName=\"Address\">          \n    </form-group>\n    <form-group \n      [cName]=\"'PhoneNumber'\"\n      [type]=\"'mask'\"\n      [mask]=\"'(99) 999 99 99'\"\n      formControlName=\"PhoneNumber\">          \n    </form-group>               \n    <div>\n      <button type=\"submit\" class=\"btn btn-sm btn-primary float-right\" [disabled]=\"!companyForm.valid\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n    </div> \n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/companies/company-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var CompanyCreateComponent = /** @class */ (function () {
    function CompanyCreateComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.onCreated = new core_1.EventEmitter();
    }
    CompanyCreateComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CompanyCreateComponent.prototype.initForm = function () {
        this.companyForm = this.formBuilder.group({
            Name: [null, forms_1.Validators.required],
            PhoneNumber: [null, forms_1.Validators.required],
            Address: ['']
        });
    };
    CompanyCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.company = this.companyForm.value;
        this.service.create(this.company).subscribe(function (x) {
            _this.onCreated.emit(x);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CompanyCreateComponent.prototype, "onCreated", void 0);
    CompanyCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-company-create',
            template: __webpack_require__("./src/app/components/companies/company-create.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            services_1.CompanyService])
    ], CompanyCreateComponent);
    return CompanyCreateComponent;
}());
exports.CompanyCreateComponent = CompanyCreateComponent;


/***/ }),

/***/ "./src/app/components/companies/company-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\"> \n    <form [formGroup]=\"companyForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">      \n      <form-group \n        [cName]=\"'Name'\"\n        formControlName=\"Name\">          \n      </form-group>\n      <form-group \n        [cName]=\"'Address'\"\n        formControlName=\"Address\">          \n      </form-group>\n      <form-group \n        [cName]=\"'PhoneNumber'\"\n        [type]=\"'mask'\"\n        [mask]=\"'(99) 999 99 99'\"\n        formControlName=\"PhoneNumber\">          \n      </form-group>               \n      <div>\n        <button type=\"submit\" class=\"btn btn-sm btn-primary float-right\" [disabled]=\"!companyForm.valid\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n      </div> \n    </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/companies/company-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var CompanyEditComponent = /** @class */ (function () {
    function CompanyEditComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.onEdited = new core_1.EventEmitter();
    }
    CompanyEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getById(this.companyId).subscribe(function (x) {
            _this.company = x;
            _this.setFormValue();
        });
        this.initForm();
    };
    CompanyEditComponent.prototype.initForm = function () {
        this.companyForm = this.formBuilder.group({
            Id: [null, forms_1.Validators.required],
            Name: [null, forms_1.Validators.required],
            PhoneNumber: [null, forms_1.Validators.required],
            Address: ['']
        });
    };
    CompanyEditComponent.prototype.setFormValue = function () {
        this.companyForm.setValue({
            Id: this.company.Id,
            Name: this.company.Name,
            PhoneNumber: this.company.PhoneNumber,
            Address: this.company.Address
        });
    };
    CompanyEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.company = this.companyForm.value;
        this.service.edit(this.companyId, this.company).subscribe(function (x) {
            _this.onEdited.emit(x);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CompanyEditComponent.prototype, "onEdited", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CompanyEditComponent.prototype, "companyId", void 0);
    CompanyEditComponent = __decorate([
        core_1.Component({
            selector: 'app-company-edit',
            template: __webpack_require__("./src/app/components/companies/company-edit.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            services_1.CompanyService])
    ], CompanyEditComponent);
    return CompanyEditComponent;
}());
exports.CompanyEditComponent = CompanyEditComponent;


/***/ }),

/***/ "./src/app/components/tasks/task-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\"> \n  <form [formGroup]=\"taskForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">        \n    <form-group \n      [cName]=\"'TaskDesc'\"\n      [cDisplayName]=\"'Task description'\"\n      formControlName=\"TaskDesc\">          \n    </form-group>\n    <form-group \n      [cName]=\"'Deadline'\"\n      [type]=\"'calendar'\"\n      formControlName=\"Deadline\">          \n    </form-group>\n    <form-group \n      [cName]=\"'Priority'\"\n      [type]=\"'dropdown'\"\n      [selectItems]=\"priorities\"\n      formControlName=\"Priority\">          \n    </form-group>\n    <div>\n      <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!taskForm.valid\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/tasks/task-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.onCreated = new core_1.EventEmitter();
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.priorities = [
            { label: 'High', value: 1 },
            { label: 'Medium', value: 2 },
            { label: 'Normal', value: 3 },
        ];
    };
    TaskCreateComponent.prototype.initForm = function () {
        this.taskForm = this.formBuilder.group({
            TaskDesc: [null, forms_1.Validators.required],
            Deadline: [null, forms_1.Validators.required],
            Priority: [null, forms_1.Validators.required]
        });
    };
    TaskCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.task = this.taskForm.value;
        var date = this.taskForm.value.Deadline;
        this.task.Deadline = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        this.task.WorkerId = this.workerId;
        this.service.create(this.task).subscribe(function (x) {
            _this.onCreated.emit(x);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TaskCreateComponent.prototype, "onCreated", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TaskCreateComponent.prototype, "workerId", void 0);
    TaskCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-task-create',
            template: __webpack_require__("./src/app/components/tasks/task-create.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            services_1.TaskService])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());
exports.TaskCreateComponent = TaskCreateComponent;


/***/ }),

/***/ "./src/app/components/tasks/task-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\"> \n    <form [formGroup]=\"taskForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">        \n      <div class=\"form-group\">\n        <label for=\"TaskDesc\">TaskDesc</label>\n        <input \n          class=\"form-control\"    \n          type=\"text\" \n          id=\"TaskDesc\" \n          name=\"TaskDesc\" \n          pInputText \n          formControlName=\"TaskDesc\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Deadline\">Deadline</label>\n        <p-calendar \n          dateFormat=\"dd.mm.yy\"\n          [style]=\"{'width':'100%'}\"\n          [inputStyle]=\"{'width':'100%'}\"\n          id=\"Deadline\" \n          name=\"Deadline\"                      \n          formControlName=\"Deadline\">\n        </p-calendar>\n      </div>     \n      <div class=\"form-group\">\n        <label for=\"Priority\">Priority</label>\n        <p-dropdown \n          [style]=\"{'width':'100%'}\"\n          id=\"Priority\" \n          [options]=\"priorities\" \n          formControlName=\"Priority\"\n          name=\"Priority\">\n        </p-dropdown>   \n      </div>\n      <div>\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!taskForm.valid\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/tasks/task-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var models_1 = __webpack_require__("./src/app/models/index.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.onEdited = new core_1.EventEmitter();
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.setFormValue();
        this.priorities = [
            { label: 'High', value: 1 },
            { label: 'Medium', value: 2 },
            { label: 'Normal', value: 3 },
        ];
    };
    TaskEditComponent.prototype.initForm = function () {
        this.taskForm = this.formBuilder.group({
            Id: [null, forms_1.Validators.required],
            TaskDesc: [null, forms_1.Validators.required],
            Deadline: [null, forms_1.Validators.required],
            Priority: [null, forms_1.Validators.required],
            WorkerId: [null, forms_1.Validators.required]
        });
    };
    TaskEditComponent.prototype.setFormValue = function () {
        this.taskForm.setValue({
            Id: this.task.Id,
            TaskDesc: this.task.TaskDesc,
            Deadline: this.task.Deadline,
            Priority: this.task.Priority,
            WorkerId: this.task.WorkerId
        });
    };
    TaskEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.task = this.taskForm.value;
        var date = this.taskForm.value.Deadline;
        if (date.getMonth) {
            this.task.Deadline = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        }
        this.service.edit(this.task).subscribe(function (x) {
            _this.onEdited.emit(x);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TaskEditComponent.prototype, "onEdited", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", models_1.Task)
    ], TaskEditComponent.prototype, "task", void 0);
    TaskEditComponent = __decorate([
        core_1.Component({
            selector: 'app-task-edit',
            template: __webpack_require__("./src/app/components/tasks/task-edit.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            services_1.TaskService])
    ], TaskEditComponent);
    return TaskEditComponent;
}());
exports.TaskEditComponent = TaskEditComponent;


/***/ }),

/***/ "./src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn mt-2\">\n  <div class=\"ui-widget-header datatable-header display-flex space-between\" style=\"padding:4px 10px;border-bottom: 0 none\">\n      <span class=\"table-name\">{{workerName}}'s Task List</span>\n      <button type=\"button\" pButton (click)=\"onCreateTask()\" label=\"Add\"></button>\n  </div>\n  <p-dataTable [value]=\"tasks\" \n               [rows]=\"10\" \n               [paginator]=\"true\" \n               [pageLinks]=\"5\" \n               [rowsPerPageOptions]=\"[5,10,25,50]\" \n               selectionMode=\"single\"\n               [(selection)]=\"selectedTask\" \n               dataKey=\"Id\"\n               [globalFilter]=\"gb\">\n               <p-column field=\"Id\" header=\"Id\" hidden=\"true\"></p-column>\n               <p-column field=\"TaskDesc\" [sortable]=\"true\" header=\"Task Description\"></p-column>\n               <p-column field=\"Deadline\" [sortable]=\"true\" header=\"Deadline\"></p-column>\n               <p-column field=\"Priority\" [sortable]=\"true\" header=\"Priority\"></p-column>\n               <p-footer>\n                <div class=\"ui-helper-clearfix datatable-footer\" style=\"width:100%\">\n                    <button type=\"button\" pButton (click)=\"onEditTask()\" [disabled]=\"!selectedTask\" label=\"Edit\"></button>\n                    <button type=\"button\" pButton (click)=\"deleteConfirm(selectedTask.Id)\" [disabled]=\"!selectedTask\" label=\"Delete\"></button>\n                </div>\n              </p-footer>\n  </p-dataTable>\n</div>\n\n<p-dialog \n  header=\"Create task\" \n  [(visible)]=\"createDialogVisible\"\n  [height]=\"410\"\n  [width]=\"350\">\n  <app-task-create\n    *ngIf=\"createDialogVisible\"\n    (onCreated)=\"onEdit($event)\"\n    [workerId]=\"workerId\">\n  </app-task-create>\n</p-dialog>\n\n<p-dialog header=\"Edit task\" [(visible)]=\"editDialogVisible\">\n  <app-task-edit\n    *ngIf=\"editDialogVisible\"\n    (onEdited)=\"onEdit($event)\"\n    [task] = 'selectedTask'>\n  </app-task-edit>\n</p-dialog>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var primeng_1 = __webpack_require__("./node_modules/primeng/primeng.js");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(tServise, confirmationService) {
        this.tServise = tServise;
        this.confirmationService = confirmationService;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.tServise.getByWorker(this.workerId).subscribe(function (task) { return _this.tasks = task; });
    };
    TasksComponent.prototype.onCreateTask = function () {
        this.createDialogVisible = true;
    };
    TasksComponent.prototype.onEditTask = function () {
        this.editDialogVisible = true;
    };
    TasksComponent.prototype.onEdit = function (agreed) {
        if (agreed) {
            this.getTasks();
            this.createDialogVisible = false;
            this.editDialogVisible = false;
        }
        else
            alert('false');
    };
    TasksComponent.prototype.onDeleteTask = function () {
        var _this = this;
        this.tServise.delete(this.selectedTask.Id).subscribe(function (x) {
            if (x)
                _this.getTasks();
            else
                alert('false');
        });
    };
    TasksComponent.prototype.deleteConfirm = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "Are you sure that you want to delete selected task?",
            accept: function () {
                _this.onDeleteTask();
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TasksComponent.prototype, "workerId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TasksComponent.prototype, "workerName", void 0);
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'app-tasks',
            template: __webpack_require__("./src/app/components/tasks/tasks.component.html")
        }),
        __metadata("design:paramtypes", [services_1.TaskService,
            primeng_1.ConfirmationService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;


/***/ }),

/***/ "./src/app/components/workers/worker-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\"> \n  <form [formGroup]=\"workerForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n    <form-group \n      [cName]=\"'Fullname'\"\n      formControlName=\"FullName\">          \n    </form-group>\n    <form-group \n      [cName]=\"'Address'\"\n      formControlName=\"Address\">          \n    </form-group>     \n    <form-group \n      [cName]=\"'PhoneNumber'\"\n      [type]=\"'mask'\"\n      [mask]=\"'(99) 999 99 99'\"\n      formControlName=\"PhoneNumber\">          \n    </form-group>\n    <form-group \n      [cName]=\"'CompanyId'\"\n      [cDisplayName]=\"'Company'\"\n      [type]=\"'dropdown'\"\n      [filter]=\"true\"\n      [selectItems]=\"companies\"\n      formControlName=\"CompanyId\">          \n    </form-group>\n    <div>\n      <button type=\"submit\" class=\"btn btn-sm btn-primary float-right\" [disabled]=\"!workerForm.valid\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n    </div>  \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/workers/worker-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var WorkerCreateComponent = /** @class */ (function () {
    function WorkerCreateComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.onCreated = new core_1.EventEmitter();
    }
    WorkerCreateComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    WorkerCreateComponent.prototype.initForm = function () {
        this.workerForm = this.formBuilder.group({
            FullName: [null, forms_1.Validators.required],
            PhoneNumber: [null, forms_1.Validators.required],
            Address: [null, forms_1.Validators.required],
            CompanyId: [null, forms_1.Validators.required]
        });
    };
    WorkerCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.worker = this.workerForm.value;
        console.log(this.worker);
        this.service.create(this.worker).subscribe(function (x) {
            _this.onCreated.emit(x);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], WorkerCreateComponent.prototype, "onCreated", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], WorkerCreateComponent.prototype, "companies", void 0);
    WorkerCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-worker-create',
            template: __webpack_require__("./src/app/components/workers/worker-create.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            services_1.WorkerService])
    ], WorkerCreateComponent);
    return WorkerCreateComponent;
}());
exports.WorkerCreateComponent = WorkerCreateComponent;


/***/ }),

/***/ "./src/app/components/workers/worker-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\"> \n    <form [formGroup]=\"workerForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n      <form-group \n        [cName]=\"'Fullname'\"\n        formControlName=\"FullName\">          \n      </form-group>\n      <form-group \n        [cName]=\"'Address'\"\n        formControlName=\"Address\">          \n      </form-group>     \n      <form-group \n        [cName]=\"'PhoneNumber'\"\n        [type]=\"'mask'\"\n        [mask]=\"'(99) 999 99 99'\"\n        formControlName=\"PhoneNumber\">          \n      </form-group>\n      <form-group \n        [cName]=\"'CompanyId'\"\n        [cDisplayName]=\"'Company'\"\n        [type]=\"'dropdown'\"\n        [filter]=\"true\"\n        [selectItems]=\"companies\"\n        formControlName=\"CompanyId\">          \n      </form-group>\n      <div>\n        <button type=\"submit\" class=\"btn btn-sm btn-primary float-right\" [disabled]=\"!workerForm.valid\"><i class=\"fa fa-dot-circle-o\"></i> Save</button>\n      </div>  \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/workers/worker-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var models_1 = __webpack_require__("./src/app/models/index.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var WorkerEditComponent = /** @class */ (function () {
    function WorkerEditComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.onEdited = new core_1.EventEmitter();
    }
    WorkerEditComponent.prototype.ngOnInit = function () {
        console.log(this.worker);
        this.initForm();
        this.setFormValue();
    };
    WorkerEditComponent.prototype.initForm = function () {
        this.workerForm = this.formBuilder.group({
            Id: [null, forms_1.Validators.required],
            FullName: [null, forms_1.Validators.required],
            PhoneNumber: [null, forms_1.Validators.required],
            Address: [null, forms_1.Validators.required],
            CompanyId: [null, forms_1.Validators.required]
        });
    };
    WorkerEditComponent.prototype.setFormValue = function () {
        this.workerForm.setValue({
            Id: this.worker.Id,
            FullName: this.worker.FullName,
            PhoneNumber: this.worker.PhoneNumber,
            Address: this.worker.Address,
            CompanyId: this.worker.CompanyId
        });
    };
    WorkerEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.worker = this.workerForm.value;
        console.log(this.worker);
        this.service.edit(this.worker).subscribe(function (x) {
            _this.onEdited.emit(x);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], WorkerEditComponent.prototype, "onEdited", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], WorkerEditComponent.prototype, "companies", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", models_1.Worker)
    ], WorkerEditComponent.prototype, "worker", void 0);
    WorkerEditComponent = __decorate([
        core_1.Component({
            selector: 'app-worker-edit',
            template: __webpack_require__("./src/app/components/workers/worker-edit.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            services_1.WorkerService])
    ], WorkerEditComponent);
    return WorkerEditComponent;
}());
exports.WorkerEditComponent = WorkerEditComponent;


/***/ }),

/***/ "./src/app/components/workers/workers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\" style=\"clear:both\">\n    <div class=\"ui-widget-header datatable-header display-flex space-between\" style=\"padding:4px 10px;border-bottom: 0 none\">\n      <span class=\"table-name\">Workers List</span>\n      <div class=\"form-group mb-0\">\n        <label for=\"CompanyId\">Companies</label>\n        <p-dropdown \n          [styleClass]=\"{'form-control':'true'}\"\n          [style]=\"{'width':'150px'}\"\n          id=\"CompanyId\" \n          [options]=\"companies\" \n          [(ngModel)]=\"companyId\"\n          name=\"CompanyId\"\n          (onChange)=\"filterWorkers()\"\n          [filter]=\"true\">\n        </p-dropdown>\n      </div>\n\n      <button type=\"button\" pButton (click)=\"showDialog()\" label=\"Add\"></button>\n    </div>\n    <p-dataTable [value]=\"filteredWorkers\" \n                 [rows]=\"10\" \n                 [paginator]=\"true\" \n                 [pageLinks]=\"5\" \n                 [rowsPerPageOptions]=\"[5,10,25,50]\" \n                 selectionMode=\"single\"\n                 [(selection)]=\"selectedWorker\" \n                 dataKey=\"Id\"\n                 [globalFilter]=\"gb\">\n      <p-column field=\"Id\" header=\"Id\" hidden=\"true\"></p-column>\n      <p-column field=\"FullName\" [sortable]=\"true\" header=\"Name\"></p-column>\n      <p-column field=\"Address\" [sortable]=\"true\" header=\"Address\"></p-column>\n      <p-column field=\"PhoneNumber\" [sortable]=\"true\" header=\"PhoneNumber\"></p-column>\n      <p-column field=\"CompanyName\" [sortable]=\"true\" header=\"Company\"></p-column>\n      <p-footer>\n        <div class=\"ui-helper-clearfix datatable-footer\" style=\"width:100%\">\n          <button type=\"button\" pButton (click)=\"onEditWorker()\" [disabled]=\"!selectedWorker\" label=\"Edit\"></button>\n          <button type=\"button\" pButton (click)=\"deleteConfirm(selectedWorker.Id)\" [disabled]=\"!selectedWorker\" label=\"Delete\"></button>\n        </div>\n      </p-footer>\n    </p-dataTable>\n  </div>\n  \n\n  <div *ngIf=\"selectedWorker\">\n    <app-tasks\n      *ngIf=\"selectedWorker\"\n      [workerId]=\"selectedWorker.Id\"\n      [workerName]=\"selectedWorker.FullName\">\n    </app-tasks>\n  </div>\n  <p-dialog \n    header=\"Create Worker\" \n    [(visible)]=\"createWorkerVisible\"\n    [width]=\"350\"\n    [height]=\"450\">\n    <app-worker-create\n      (onCreated)=\"onEdit($event)\"\n      [companies]=\"companies\">\n    </app-worker-create>\n  </p-dialog>\n  \n  <p-dialog \n    header=\"Edit Company\" \n    [(visible)]=\"editDialogVisible\"\n    [width]=\"350\"\n    [height]=\"450\">\n    <app-worker-edit\n      *ngIf=\"editDialogVisible\"\n      (onEdited)=\"onEdit($event)\"\n      [worker] = 'selectedWorker'\n      [companies]=\"companies\">\n    </app-worker-edit>\n  </p-dialog>\n  <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n"

/***/ }),

/***/ "./src/app/components/workers/workers.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var primeng_1 = __webpack_require__("./node_modules/primeng/primeng.js");
var WorkersComponent = /** @class */ (function () {
    function WorkersComponent(wService, cService, confirmationService) {
        this.wService = wService;
        this.cService = cService;
        this.confirmationService = confirmationService;
    }
    WorkersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cService.getForDropDown().subscribe(function (c) { return _this.companies = c.splice(1, c.length - 1); });
        this.getWorkers();
    };
    WorkersComponent.prototype.getWorkers = function () {
        var _this = this;
        this.wService.getAll().subscribe(function (x) {
            _this.workers = x;
            _this.filterWorkers();
        });
    };
    WorkersComponent.prototype.filterWorkers = function () {
        var _this = this;
        this.filteredWorkers = this.companyId
            ? this.workers.filter(function (w) { return w.CompanyId == _this.companyId; })
            : this.workers;
    };
    WorkersComponent.prototype.showDialog = function () {
        this.createWorkerVisible = true;
    };
    WorkersComponent.prototype.onEditWorker = function () {
        this.editDialogVisible = true;
    };
    WorkersComponent.prototype.onEdit = function (agreed) {
        if (agreed) {
            this.getWorkers();
            this.createWorkerVisible = false;
            this.editDialogVisible = false;
        }
        else
            alert('false');
    };
    WorkersComponent.prototype.onDeleteWorker = function () {
        var _this = this;
        this.wService.delete(this.selectedWorker.Id).subscribe(function (x) {
            if (x)
                _this.getWorkers();
            else
                alert('false');
        });
    };
    WorkersComponent.prototype.deleteConfirm = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "Are you sure that you want to delete selected worker?",
            accept: function () {
                _this.onDeleteWorker();
            }
        });
    };
    WorkersComponent = __decorate([
        core_1.Component({
            selector: 'app-workers',
            template: __webpack_require__("./src/app/components/workers/workers.component.html")
        }),
        __metadata("design:paramtypes", [services_1.WorkerService,
            services_1.CompanyService,
            primeng_1.ConfirmationService])
    ], WorkersComponent);
    return WorkersComponent;
}());
exports.WorkersComponent = WorkersComponent;


/***/ }),

/***/ "./src/app/helpers/form-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"{{cName}}\">{{cDisplayName || cName}}</label>\n  <input \n    *ngIf=\"type=='text'\"\n    [(ngModel)]=\"value\"\n    class=\"form-control\"\n    type=\"text\"  \n    pInputText\n    (onBlur)=\"onBlur()\"\n    id=\"{{cName}}\" \n    name=\"{{cName}}\">\n\n  <p-inputMask \n    *ngIf=\"type=='mask'\"\n    [styleClass]=\"{'form-control':'true'}\"\n    id=\"{{cName}}\" \n    [(ngModel)]=\"value\" \n    mask=\"{{mask}}\" \n    name=\"{{cName}}\">\n  </p-inputMask>\n\n  <p-dropdown \n    *ngIf=\"type=='dropdown'\"\n    [styleClass]=\"{'form-control':'true'}\"\n    [style]=\"{'width':'100%'}\"\n    id=\"{{cName}}\"  \n    [options]=\"selectItems\" \n    [(ngModel)]=\"value\"\n    name=\"{{cName}}\"\n    [filter]=\"filter\">\n  </p-dropdown>\n\n  <p-calendar \n    *ngIf=\"type=='calendar'\"\n    dateFormat=\"dd.mm.yy\"\n    [style]=\"{'width':'100%'}\"\n    [inputStyle]=\"{'width':'100%'}\"\n    id=\"{{cName}}\" \n    name=\"{{cName}}\"                      \n    [(ngModel)]=\"value\">\n  </p-calendar>\n</div>\n\n    \n\n"

/***/ }),

/***/ "./src/app/helpers/form-group.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var noop = function () {
};
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        this.type = "text";
        //The internal data model
        this.innerValue = '';
        //Placeholders for the callbacks which are later providesd
        //by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    FormGroupComponent_1 = FormGroupComponent;
    Object.defineProperty(FormGroupComponent.prototype, "value", {
        //get accessor
        get: function () {
            return this.innerValue;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    FormGroupComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    FormGroupComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    //From ControlValueAccessor interface
    FormGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    FormGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormGroupComponent.prototype, "cName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormGroupComponent.prototype, "cDisplayName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormGroupComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormGroupComponent.prototype, "mask", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FormGroupComponent.prototype, "filter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FormGroupComponent.prototype, "selectItems", void 0);
    FormGroupComponent = FormGroupComponent_1 = __decorate([
        core_1.Component({
            selector: 'form-group',
            template: __webpack_require__("./src/app/helpers/form-group.component.html"),
            styles: [],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return FormGroupComponent_1; }),
                    multi: true
                }
            ]
        })
    ], FormGroupComponent);
    return FormGroupComponent;
    var FormGroupComponent_1;
}());
exports.FormGroupComponent = FormGroupComponent;


/***/ }),

/***/ "./src/app/models/company.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Company = /** @class */ (function () {
    function Company(Id, Name, Address, PhoneNumber) {
        this.Id = Id;
        this.Name = Name;
        this.Address = Address;
        this.PhoneNumber = PhoneNumber;
    }
    return Company;
}());
exports.Company = Company;
var CompanyList = /** @class */ (function () {
    function CompanyList(Id, Name, Address, PhoneNumber, WorkersQuantity) {
        this.Id = Id;
        this.Name = Name;
        this.Address = Address;
        this.PhoneNumber = PhoneNumber;
        this.WorkersQuantity = WorkersQuantity;
    }
    return CompanyList;
}());
exports.CompanyList = CompanyList;


/***/ }),

/***/ "./src/app/models/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/models/company.ts"));
__export(__webpack_require__("./src/app/models/worker.ts"));
__export(__webpack_require__("./src/app/models/task.ts"));


/***/ }),

/***/ "./src/app/models/task.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(Id, TaskDesc, Deadline, Priority, WorkerId) {
        this.Id = Id;
        this.TaskDesc = TaskDesc;
        this.Deadline = Deadline;
        this.Priority = Priority;
        this.WorkerId = WorkerId;
    }
    return Task;
}());
exports.Task = Task;


/***/ }),

/***/ "./src/app/models/worker.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Worker = /** @class */ (function () {
    function Worker(Id, FullName, Address, PhoneNumber, CompanyId, CompanyName) {
        this.Id = Id;
        this.FullName = FullName;
        this.Address = Address;
        this.PhoneNumber = PhoneNumber;
        this.CompanyId = CompanyId;
        this.CompanyName = CompanyName;
    }
    return Worker;
}());
exports.Worker = Worker;


/***/ }),

/***/ "./src/app/services/company.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.baseUrl = "../api/Companies/"; // web api URL
    }
    //company
    CompanyService.prototype.getAll = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.create = function (model) {
        return this.http.post(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.getById = function (id) {
        var url = this.baseUrl + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.edit = function (id, model) {
        var url = this.baseUrl + id;
        return this.http.put(url, JSON.stringify(model), this.getRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.delete = function (id) {
        var url = this.baseUrl + id;
        return this.http.delete(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.getForDropDown = function () {
        var url = this.baseUrl + '/fordropdown';
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.getRequestOptions = function () {
        return new http_1.RequestOptions({
            headers: new http_1.Headers({
                "Content-Type": "application/json"
            })
        });
    };
    CompanyService.prototype.handleError = function (error) {
        // output errors to the console.
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    CompanyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;


/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/services/company.service.ts"));
__export(__webpack_require__("./src/app/services/task.service.ts"));
__export(__webpack_require__("./src/app/services/worker.service.ts"));


/***/ }),

/***/ "./src/app/services/task.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.baseUrl = "../api/tasks/"; // web api URL
    }
    TaskService.prototype.getByWorker = function (id) {
        return this.http.get(this.baseUrl + "GetByWorker/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.create = function (model) {
        return this.http.post(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.getById = function (id) {
        var url = this.baseUrl + id;
        return this.http.get(this.baseUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.edit = function (model) {
        return this.http.put(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.delete = function (id) {
        var url = this.baseUrl + id;
        return this.http.delete(this.baseUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.getRequestOptions = function () {
        return new http_1.RequestOptions({
            headers: new http_1.Headers({
                "Content-Type": "application/json"
            })
        });
    };
    TaskService.prototype.handleError = function (error) {
        // output errors to the console.
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;


/***/ }),

/***/ "./src/app/services/worker.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var WorkerService = /** @class */ (function () {
    function WorkerService(http) {
        this.http = http;
        this.baseUrl = "../api/workers/"; // web api URL
    }
    //company
    WorkerService.prototype.getAll = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    WorkerService.prototype.create = function (model) {
        return this.http.post(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkerService.prototype.getById = function (id) {
        var url = this.baseUrl + id;
        return this.http.get(this.baseUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkerService.prototype.edit = function (model) {
        return this.http.put(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkerService.prototype.delete = function (id) {
        var url = this.baseUrl + id;
        return this.http.delete(this.baseUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkerService.prototype.getRequestOptions = function () {
        return new http_1.RequestOptions({
            headers: new http_1.Headers({
                "Content-Type": "application/json"
            })
        });
    };
    WorkerService.prototype.handleError = function (error) {
        // output errors to the console.
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    WorkerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WorkerService);
    return WorkerService;
}());
exports.WorkerService = WorkerService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map