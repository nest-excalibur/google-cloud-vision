"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCloudVisionCoreModule = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("./constants");
var google_cloud_vision_service_1 = require("./google-cloud-vision.service");
var vision_1 = require("@google-cloud/vision");
var GoogleCloudVisionCoreModule = /** @class */ (function () {
    function GoogleCloudVisionCoreModule() {
    }
    GoogleCloudVisionCoreModule_1 = GoogleCloudVisionCoreModule;
    GoogleCloudVisionCoreModule.register = function () {
        var providers = this.providers;
        return {
            module: GoogleCloudVisionCoreModule_1,
            providers: __spreadArray([], providers),
            exports: __spreadArray([], providers),
        };
    };
    Object.defineProperty(GoogleCloudVisionCoreModule, "providers", {
        get: function () {
            var clientGCP = new vision_1.ImageAnnotatorClient();
            var clientGPC = {
                provide: constants_1.GCP_VISION_API_CLIENT,
                useValue: clientGCP,
            };
            var googleCloudVisionService = {
                provide: google_cloud_vision_service_1.GoogleCloudVisionService,
                useFactory: function (client) { return new google_cloud_vision_service_1.GoogleCloudVisionService(client); },
                inject: [constants_1.GCP_VISION_API_CLIENT]
            };
            return [
                clientGPC,
                googleCloudVisionService,
            ];
        },
        enumerable: false,
        configurable: true
    });
    var GoogleCloudVisionCoreModule_1;
    GoogleCloudVisionCoreModule = GoogleCloudVisionCoreModule_1 = __decorate([
        common_1.Module({
            providers: [
                google_cloud_vision_service_1.GoogleCloudVisionService
            ],
            exports: [
                google_cloud_vision_service_1.GoogleCloudVisionService
            ]
        })
    ], GoogleCloudVisionCoreModule);
    return GoogleCloudVisionCoreModule;
}());
exports.GoogleCloudVisionCoreModule = GoogleCloudVisionCoreModule;
