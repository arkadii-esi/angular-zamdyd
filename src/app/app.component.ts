import { Component, TemplateRef } from "@angular/core";
import { WindowService } from "@progress/kendo-angular-dialog";

@Component({
  selector: "my-app",
  template: `
    <ng-template #windowTitleBar let-win>
      <span class="k-window-title">Custom TitleBar</span>
      <button kendoWindowRestoreAction [window]="win"></button>
      <button kendoWindowMaximizeAction [window]="win"></button>
      <button kendoWindowCloseAction [window]="win"></button>
    </ng-template>

    <ng-template #windowContent> My templated content </ng-template>

    <button kendoButton (click)="showList(windowContent, windowTitleBar)">
      Show my templated Window
    </button>

    <div kendoWindowContainer></div>
  `,
})
export class AppComponent {
  constructor(private windowService: WindowService) {}

  public showList(
    content: TemplateRef<unknown>,
    titlebar: TemplateRef<unknown>
  ): void {
    this.windowService.open({
      content: content,
      titleBarContent: titlebar,
      width: 250,
      height: 200,
    });
  }
}
