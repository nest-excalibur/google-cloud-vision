import { Module } from '@nestjs/common';
import { GoogleCloudVisionService } from './google-cloud-vision.service';
import { GoogleCloudVisionCoreModule } from './google-cloud-vision-core.module';


@Module(
  {
    imports: [
      GoogleCloudVisionCoreModule.register()
    ],
    providers: [
      GoogleCloudVisionService
    ],
    exports: [
      GoogleCloudVisionService
    ]
  }
)
export class GoogleCloudVisionModule {
}
