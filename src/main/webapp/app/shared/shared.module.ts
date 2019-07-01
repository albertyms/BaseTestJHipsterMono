import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseTestJHipsterMonoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BaseTestJHipsterMonoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BaseTestJHipsterMonoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseTestJHipsterMonoSharedModule {
  static forRoot() {
    return {
      ngModule: BaseTestJHipsterMonoSharedModule
    };
  }
}
