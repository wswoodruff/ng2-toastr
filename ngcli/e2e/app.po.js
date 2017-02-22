"use strict";
var protractor_1 = require('protractor');
var NgcliPage = (function () {
    function NgcliPage() {
    }
    NgcliPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    NgcliPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return NgcliPage;
}());
exports.NgcliPage = NgcliPage;
//# sourceMappingURL=app.po.js.map