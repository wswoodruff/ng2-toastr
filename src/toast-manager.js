"use strict";
var core_1 = require('@angular/core');
var toast_container_component_1 = require('./toast-container.component');
var toast_options_1 = require('./toast-options');
var toast_1 = require('./toast');
var Subject_1 = require('rxjs/Subject');
var ToastsManager = (function () {
    function ToastsManager(componentFactoryResolver, appRef, injector, options) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.options = {};
        this.index = 0;
        this.toastClicked = new Subject_1.Subject();
        if (options) {
            Object.assign(this.options, options);
        }
    }
    ToastsManager.prototype.setRootViewContainerRef = function (vRef) {
        this._rootViewContainerRef = vRef;
    };
    ToastsManager.prototype.onClickToast = function () {
        return this.toastClicked.asObservable();
    };
    ToastsManager.prototype.show = function (toast, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.container) {
                // if (!this.appRef['_rootComponents'].length) {
                //   const err = new Error('Application root component cannot be found. Try accessing application reference in the later life cycle of angular app.');
                //   console.error(err);
                //   reject(err);
                // }
                //
                // // get app root view component ref
                // if (!this._rootViewContainerRef) {
                //   try {
                //     this._rootViewContainerRef = this.appRef['_rootComponents'][0]['_parentView']._vc_0.vcRef;
                //   } catch (e) {
                //     this._rootViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
                //   }
                // }
                // get options providers
                var providers = core_1.ReflectiveInjector.resolve([
                    { provide: toast_options_1.ToastOptions, useValue: _this.options }
                ]);
                // create and load ToastContainer
                var toastFactory = _this.componentFactoryResolver.resolveComponentFactory(toast_container_component_1.ToastContainer);
                var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, _this.injector);
                _this.container = toastFactory.create(childInjector);
                _this.appRef.attachView(_this.container.hostView);
                // this.container = this._rootViewContainerRef.createComponent(toastFactory, this._rootViewContainerRef.length, childInjector);
                _this.container.instance.onToastClicked = function (toast) {
                    _this._onToastClicked(toast);
                };
            }
            resolve(_this.setupToast(toast, options));
        });
    };
    ToastsManager.prototype.createTimeout = function (toast) {
        var _this = this;
        var task = setTimeout(function () {
            _this.clearToast(toast);
        }, toast.config.toastLife);
        return task.toString();
    };
    ToastsManager.prototype.setupToast = function (toast, options) {
        var _this = this;
        toast.id = ++this.index;
        Object.keys(toast.config).forEach(function (k) {
            if (_this.options.hasOwnProperty(k)) {
                toast.config[k] = _this.options[k];
            }
            if (options && options.hasOwnProperty(k)) {
                toast.config[k] = options[k];
            }
        });
        if (toast.config.dismiss === 'auto') {
            toast.timeoutId = this.createTimeout(toast);
        }
        this.container.instance.addToast(toast);
        return toast;
    };
    ToastsManager.prototype._onToastClicked = function (toast) {
        this.toastClicked.next(toast);
        if (toast.config.dismiss === 'click') {
            this.clearToast(toast);
        }
    };
    ToastsManager.prototype.dismissToast = function (toast) {
        this.clearToast(toast);
    };
    ToastsManager.prototype.clearToast = function (toast) {
        if (this.container) {
            var instance = this.container.instance;
            instance.removeToast(toast);
            if (!instance.anyToast()) {
                this.dispose();
            }
        }
    };
    ToastsManager.prototype.clearAllToasts = function () {
        if (this.container) {
            var instance = this.container.instance;
            instance.removeAllToasts();
            this.dispose();
        }
    };
    ToastsManager.prototype.dispose = function () {
        var _this = this;
        // using timeout to allow animation to finish
        setTimeout(function () {
            if (_this.container && !_this.container.instance.anyToast()) {
                _this.appRef.detachView(_this.container.hostView);
                _this.container.destroy();
                _this.container = null;
            }
        }, 2000);
    };
    ToastsManager.prototype.error = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('error', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.prototype.info = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('info', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.prototype.success = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('success', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.prototype.warning = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('warning', message, title, data);
        return this.show(toast, options);
    };
    // allow user define custom background color and image
    ToastsManager.prototype.custom = function (message, title, options) {
        var data = options && options.data ? options.data : null;
        var toast = new toast_1.Toast('custom', message, title, data);
        return this.show(toast, options);
    };
    ToastsManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ToastsManager.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ApplicationRef, },
        { type: core_1.Injector, },
        { type: toast_options_1.ToastOptions, decorators: [{ type: core_1.Optional },] },
    ]; };
    return ToastsManager;
}());
exports.ToastsManager = ToastsManager;
//# sourceMappingURL=toast-manager.js.map