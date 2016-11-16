System.registerDynamic("ng2-toastr/src/toast-container.component", ["@angular/core", "./toast-options", "@angular/platform-browser"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('@angular/core');
  var toast_options_1 = $__require('./toast-options');
  var platform_browser_1 = $__require('@angular/platform-browser');
  var ToastContainer = (function() {
    function ToastContainer(sanitizer, options) {
      this.sanitizer = sanitizer;
      this.position = 'fixed';
      this.messageClass = 'toast-message';
      this.titleClass = 'toast-title';
      this.positionClass = 'toast-top-right';
      this.toasts = [];
      this.maxShown = 5;
      this.newestOnTop = false;
      this.animate = 'fade';
      if (options) {
        Object.assign(this, options);
      }
    }
    ToastContainer.prototype.addToast = function(toast) {
      if (this.positionClass.indexOf('top') > 0) {
        if (this.newestOnTop) {
          this.toasts.unshift(toast);
        } else {
          this.toasts.push(toast);
        }
        if (this.toasts.length > this.maxShown) {
          var diff = this.toasts.length - this.maxShown;
          if (this.newestOnTop) {
            this.toasts.splice(this.maxShown);
          } else {
            this.toasts.splice(0, diff);
          }
        }
      } else {
        this.toasts.unshift(toast);
        if (this.toasts.length > this.maxShown) {
          this.toasts.splice(this.maxShown);
        }
      }
    };
    ToastContainer.prototype.removeToast = function(toast) {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
        toast.timeoutId = null;
      }
      this.toasts = this.toasts.filter(function(t) {
        return t.id !== toast.id;
      });
    };
    ToastContainer.prototype.removeAllToasts = function() {
      this.toasts = [];
    };
    ToastContainer.prototype.clicked = function(toast) {
      if (this.onToastClicked) {
        this.onToastClicked(toast);
      }
    };
    ToastContainer.prototype.anyToast = function() {
      return this.toasts.length > 0;
    };
    ToastContainer.prototype.findToast = function(toastId) {
      for (var _i = 0,
          _a = this.toasts; _i < _a.length; _i++) {
        var toast = _a[_i];
        if (toast.id === toastId) {
          return toast;
        }
      }
      return null;
    };
    ToastContainer = __decorate([core_1.Component({
      selector: 'toast-container',
      template: "\n    <div #toastContainer id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"let toast of toasts\" [@inOut]=\"animate\" class=\"toast toast-{{toast.type}}\" \n      (click)=\"clicked(toast)\">\n        <div class=\"toast-close-button\" *ngIf=\"toast.config.showCloseButton\" (click)=\"removeToast(toast)\">&times;\n        </div> \n        <div *ngIf=\"toast.title\" class=\"{{toast.config.titleClass || titleClass}}\">{{toast.title}}</div>\n        <div [ngSwitch]=\"toast.config.enableHTML\">\n          <span *ngSwitchCase=\"true\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(toast.message)\"></span>\n          <span *ngSwitchDefault class=\"{{toast.config.messageClass || messageClass}}\">{{toast.message}}</span>\n        </div>             \n      </div>\n    </div>\n    ",
      animations: [core_1.trigger('inOut', [core_1.state('flyRight, flyLeft', core_1.style({
        opacity: 1,
        transform: 'translateX(0)'
      })), core_1.state('fade', core_1.style({opacity: 1})), core_1.state('slideDown, slideUp', core_1.style({
        opacity: 1,
        transform: 'translateY(0)'
      })), core_1.transition('void => flyRight', [core_1.style({
        opacity: 0,
        transform: 'translateX(100%)'
      }), core_1.animate('0.2s ease-in')]), core_1.transition('flyRight => void', [core_1.animate('0.2s 10 ease-out', core_1.style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))]), core_1.transition('void => flyLeft', [core_1.style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }), core_1.animate('0.2s ease-in')]), core_1.transition('flyLeft => void', [core_1.animate('0.2s 10 ease-out', core_1.style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }))]), core_1.transition('void => fade', [core_1.style({opacity: 0}), core_1.animate('0.3s ease-in')]), core_1.transition('fade => void', [core_1.animate('0.3s 10 ease-out', core_1.style({opacity: 0}))]), core_1.transition('void => slideDown', [core_1.style({
        opacity: 0,
        transform: 'translateY(-200%)'
      }), core_1.animate('0.3s ease-in')]), core_1.transition('slideDown => void', [core_1.animate('0.3s 10 ease-out', core_1.style({
        opacity: 0,
        transform: 'translateY(-200%)'
      }))]), core_1.transition('void => slideUp', [core_1.style({
        opacity: 0,
        transform: 'translateY(200%)'
      }), core_1.animate('0.3s ease-in')]), core_1.transition('slideUp => void', [core_1.animate('0.3s 10 ease-out', core_1.style({
        opacity: 0,
        transform: 'translateY(200%)'
      }))])])]
    }), __param(1, core_1.Optional()), __metadata('design:paramtypes', [platform_browser_1.DomSanitizer, toast_options_1.ToastOptions])], ToastContainer);
    return ToastContainer;
  }());
  exports.ToastContainer = ToastContainer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Toast = (function() {
    function Toast(type, message, title, data) {
      this.type = type;
      this.message = message;
      this.title = title;
      this.data = data;
      this.config = {
        dismiss: 'auto',
        enableHTML: false,
        titleClass: '',
        messageClass: '',
        toastLife: 3000,
        showCloseButton: false
      };
    }
    return Toast;
  }());
  exports.Toast = Toast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast-manager", ["@angular/core", "./toast-container.component", "./toast-options", "./toast", "rxjs/Rx"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('@angular/core');
  var toast_container_component_1 = $__require('./toast-container.component');
  var toast_options_1 = $__require('./toast-options');
  var toast_1 = $__require('./toast');
  var Rx_1 = $__require('rxjs/Rx');
  var ToastsManager = (function() {
    function ToastsManager(componentFactoryResolver, appRef, options) {
      this.componentFactoryResolver = componentFactoryResolver;
      this.appRef = appRef;
      this.options = {};
      this.index = 0;
      this.toastClicked = new Rx_1.Subject();
      if (options) {
        Object.assign(this.options, options);
      }
    }
    ToastsManager.prototype.setRootViewContainerRef = function(vRef) {
      this._rootViewContainerRef = vRef;
    };
    ToastsManager.prototype.onClickToast = function() {
      return this.toastClicked.asObservable();
    };
    ToastsManager.prototype.show = function(toast, options) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        if (!_this.container) {
          if (!_this.appRef['_rootComponents'].length) {
            var err = new Error('Application root component cannot be found. Try accessing application reference in the later life cycle of angular app.');
            console.error(err);
            reject(err);
          }
          if (!_this._rootViewContainerRef) {
            _this._rootViewContainerRef = _this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
          }
          var providers = core_1.ReflectiveInjector.resolve([{
            provide: toast_options_1.ToastOptions,
            useValue: _this.options
          }]);
          var toastFactory = _this.componentFactoryResolver.resolveComponentFactory(toast_container_component_1.ToastContainer);
          var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, _this._rootViewContainerRef.parentInjector);
          _this.container = _this._rootViewContainerRef.createComponent(toastFactory, _this._rootViewContainerRef.length, childInjector);
          _this.container.instance.onToastClicked = function(toast) {
            _this._onToastClicked(toast);
          };
        }
        resolve(_this.setupToast(toast, options));
      });
    };
    ToastsManager.prototype.createTimeout = function(toast) {
      var _this = this;
      var task = setTimeout(function() {
        _this.clearToast(toast);
      }, toast.config.toastLife);
      return task.toString();
    };
    ToastsManager.prototype.setupToast = function(toast, options) {
      var _this = this;
      toast.id = ++this.index;
      Object.keys(toast.config).forEach(function(k) {
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
    ToastsManager.prototype._onToastClicked = function(toast) {
      this.toastClicked.next(toast);
      if (toast.config.dismiss === 'click') {
        this.clearToast(toast);
      }
    };
    ToastsManager.prototype.dismissToast = function(toast) {
      this.clearToast(toast);
    };
    ToastsManager.prototype.clearToast = function(toast) {
      if (this.container) {
        var instance = this.container.instance;
        instance.removeToast(toast);
        if (!instance.anyToast()) {
          this.dispose();
        }
      }
    };
    ToastsManager.prototype.clearAllToasts = function() {
      if (this.container) {
        var instance = this.container.instance;
        instance.removeAllToasts();
        this.dispose();
      }
    };
    ToastsManager.prototype.dispose = function() {
      var _this = this;
      setTimeout(function() {
        if (_this.container && !_this.container.instance.anyToast()) {
          _this.container.destroy();
          _this.container = null;
        }
      }, 2000);
    };
    ToastsManager.prototype.error = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('error', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.info = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('info', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.success = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('success', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.warning = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('warning', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager.prototype.custom = function(message, title, options) {
      var data = options && options.data ? options.data : null;
      var toast = new toast_1.Toast('custom', message, title, data);
      return this.show(toast, options);
    };
    ToastsManager = __decorate([core_1.Injectable(), __param(2, core_1.Optional()), __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ApplicationRef, toast_options_1.ToastOptions])], ToastsManager);
    return ToastsManager;
  }());
  exports.ToastsManager = ToastsManager;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast-options", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var ToastOptions = (function() {
    function ToastOptions(options) {
      this.newestOnTop = false;
      this.animate = 'fade';
      this.enableHTML = false;
      this.showCloseButton = false;
      Object.assign(this, options);
    }
    ToastOptions = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [Object])], ToastOptions);
    return ToastOptions;
  }());
  exports.ToastOptions = ToastOptions;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast.module", ["@angular/core", "@angular/common", "./toast-container.component", "./toast-manager", "./toast-options"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var common_1 = $__require('@angular/common');
  var toast_container_component_1 = $__require('./toast-container.component');
  var toast_manager_1 = $__require('./toast-manager');
  var toast_options_1 = $__require('./toast-options');
  var ToastModule = (function() {
    function ToastModule() {}
    ToastModule.forRoot = function(config) {
      return {
        ngModule: ToastModule,
        providers: [{
          provide: toast_options_1.ToastOptions,
          useValue: config
        }]
      };
    };
    ToastModule = __decorate([core_1.NgModule({
      imports: [common_1.CommonModule],
      declarations: [toast_container_component_1.ToastContainer],
      exports: [toast_container_component_1.ToastContainer],
      providers: [toast_manager_1.ToastsManager],
      entryComponents: [toast_container_component_1.ToastContainer]
    }), __metadata('design:paramtypes', [])], ToastModule);
    return ToastModule;
  }());
  exports.ToastModule = ToastModule;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/ng2-toastr", ["./src/toast", "./src/toast-manager", "./src/toast-container.component", "./src/toast-options", "./src/toast.module"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export($__require('./src/toast'));
  __export($__require('./src/toast-manager'));
  __export($__require('./src/toast-container.component'));
  __export($__require('./src/toast-options'));
  __export($__require('./src/toast.module'));
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=ng2-toastr.js.map