"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCloudVisionModule = void 0;
var common_1 = require("@nestjs/common");
var google_cloud_vision_service_1 = require("./google-cloud-vision.service");
var google_cloud_vision_core_module_1 = require("./google-cloud-vision-core.module");
var GoogleCloudVisionModule = /** @class */ (function () {
    function GoogleCloudVisionModule() {
    }
    GoogleCloudVisionModule = __decorate([
        common_1.Module({
            imports: [
                google_cloud_vision_core_module_1.GoogleCloudVisionCoreModule.register()
            ],
            providers: [
                google_cloud_vision_service_1.GoogleCloudVisionService
            ],
            exports: [
                google_cloud_vision_service_1.GoogleCloudVisionService
            ]
        })
    ], GoogleCloudVisionModule);
    return GoogleCloudVisionModule;
}());
exports.GoogleCloudVisionModule = GoogleCloudVisionModule;
