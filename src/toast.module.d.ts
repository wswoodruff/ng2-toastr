import { ModuleWithProviders, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { ToastsManager } from './toast-manager';
import { ToastOptions } from './toast-options';
export declare function toastsManagerFactory(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, options: ToastOptions): ToastsManager;
export declare class ToastModule {
    static forRoot(config: ToastOptions): ModuleWithProviders;
}
