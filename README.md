<img src="https://img.shields.io/npm/dt/@nest-excalibur/google-cloud-vision"></img>
<img src="https://img.shields.io/npm/v/@nest-excalibur/google-cloud-vision"></img>
<img src="https://img.shields.io/npm/l/@nest-excalibur/google-cloud-vision"></img>
<img src="https://img.shields.io/github/stars/nest-excalibur/google-cloud-vision"></img>
<img src="https://img.shields.io/github/issues/nest-excalibur/google-cloud-vision"></img>


# Google Cloud Vision

Import module: `GoogleCloudVisionModule` :

``` typescript
import { GoogleCloudVisionModule } from '@nest-excalibur/google-cloud-vision/lib';
 
@Module({
    imports: [
        GoogleCloudVisionModule,
    ],
})
export class SomeModule {
}
```

> Don't forget to export your google-cloud credentials before start the server.

Inject the `GoogleCloudVisionService` in your controller

``` typescript
 import { GoogleCloudVisionService } from '@nest-excalibur/google-cloud-vision/lib';

@Controller('some')
export class SomeController {
 
    constructor(
        private readonly googleCloudVisionAService: GoogleCloudVisionService,
    ) {
    }

    @Get('inspect-image')
      @UseInterceptors(
        FileInterceptor('image'),
      )
      async inspectImage(
        @UploadedFile() imageFile,
      ) {
        // Fecth the file and get it's buffer.  
        const imageBuffer = imageFile.buffer;
        // Invoke the respective service methods
        const text = await this._googleCloudVisionApiService.detectText(imageBuffer);
        const faces = await this._googleCloudVisionApiService.detectFaces(imageBuffer);
        const explictContent = await this._googleCloudVisionApiService.detectExplicitContent(imageBuffer);
        const objects = await this._googleCloudVisionApiService.detectMultipleObjects(imageBuffer);
        const properties = await this._googleCloudVisionApiService.detectProperties(imageBuffer);
        return {
          text,
          faces,
          explictContent,
          objects,
          properties,
        };
      }
    }
```

### Service Methods

| Method Name | Description | Parameters  |
| --------- | ------ | ----- |
| detectLabels | Detects labels that are in the image  |  image-url or buffer |
| detectFaces |  Detects faces that are in the image  |   image-url or buffer |
| detectProperties |  Gets the more representative properties from the image such as the most relevant colors  |   image-url or buffer |
| detectLandMarks |  Detects places such as names of buildings, monuments, among other things.  |  image-url or buffer |
| detectLogos |  Detects all logos that are in the image  |  image-url or buffer |
| detectExplicitContent |  Detect some type of explicit content in the image such as violence, racism, etc.  | image-url or buffer |
| detectMultipleObjects | Detects all objects that are in the image with their respective ubication polygon coordinates |  image-url or buffer |
| detectText |  Detects all text contained in the image |  image-url or buffer |
| detectHandwrittenText | Detects get handwritten text in an image  |  image-url or buffer |
