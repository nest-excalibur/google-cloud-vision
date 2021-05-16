import { DynamicModule, Module, Provider } from '@nestjs/common';
import { GCP_VISION_API_CLIENT } from './constants';
import { GoogleCloudVisionService } from './google-cloud-vision.service';
import {ImageAnnotatorClient} from '@google-cloud/vision';

@Module(
  {
    providers: [
      GoogleCloudVisionService
    ],
    exports: [
      GoogleCloudVisionService
    ]
  }
)
export class GoogleCloudVisionCoreModule {

  static register(): DynamicModule{
    const providers = this.providers;
    return  {
      module: GoogleCloudVisionCoreModule,
      providers: [
        ...providers,
      ],
      exports: [
        ...providers,
      ],
    };
  }

  private static get providers() {
    const clientGCP = new ImageAnnotatorClient();

    const clientGPC: Provider = {
      provide: GCP_VISION_API_CLIENT,
      useValue: clientGCP,
    };
    const googleCloudVisionService: Provider = {
      provide: GoogleCloudVisionService,
      useFactory: (client: any) => new GoogleCloudVisionService(client),
      inject: [GCP_VISION_API_CLIENT]
    };
    return [
      clientGPC,
      googleCloudVisionService,
    ];
  }
}
