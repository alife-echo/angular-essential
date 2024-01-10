import { Component } from "@angular/core";
@Component({
    selector:'app-banner',
    standalone: true,
    template: `
      <button [attr.data-test-id]="testId">Primary CTA</button>
    `,
  })
  export class AppBanner {
    testId = 'main-cta';
  }