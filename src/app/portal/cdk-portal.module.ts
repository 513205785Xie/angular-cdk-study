import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkPortalRoutingModule} from './cdk-portal-routing.module';
import {CdkPortalComponent} from './cdk-portal.component';
import { ChildComponent } from './child-component/child.component';
import {DomRenderComponent} from './dom-render/dom-render.component';
import {PortalComponentComponent} from './portal-component/portal-component.component';
import {PortalTemplateComponent} from './portal-template/portal-template.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkPortalRoutingModule
    ],
    declarations: [
        CdkPortalComponent,
        ChildComponent,
        DomRenderComponent,
        PortalComponentComponent,
        PortalTemplateComponent
    ],
    entryComponents: [
        ChildComponent
    ]
})
export class CdkLPortalModule {
}
