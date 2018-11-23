/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/render3/r3_identifiers", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CORE = '@angular/core';
    var Identifiers = /** @class */ (function () {
        function Identifiers() {
        }
        /* Methods */
        Identifiers.NEW_METHOD = 'factory';
        Identifiers.TRANSFORM_METHOD = 'transform';
        Identifiers.PATCH_DEPS = 'patchedDeps';
        /* Instructions */
        Identifiers.namespaceHTML = { name: 'ɵnamespaceHTML', moduleName: CORE };
        Identifiers.namespaceMathML = { name: 'ɵnamespaceMathML', moduleName: CORE };
        Identifiers.namespaceSVG = { name: 'ɵnamespaceSVG', moduleName: CORE };
        Identifiers.element = { name: 'ɵelement', moduleName: CORE };
        Identifiers.elementStart = { name: 'ɵelementStart', moduleName: CORE };
        Identifiers.elementEnd = { name: 'ɵelementEnd', moduleName: CORE };
        Identifiers.elementProperty = { name: 'ɵelementProperty', moduleName: CORE };
        Identifiers.elementAttribute = { name: 'ɵelementAttribute', moduleName: CORE };
        Identifiers.elementClassProp = { name: 'ɵelementClassProp', moduleName: CORE };
        Identifiers.elementContainerStart = { name: 'ɵEC', moduleName: CORE };
        Identifiers.elementContainerEnd = { name: 'ɵeC', moduleName: CORE };
        Identifiers.elementStyling = { name: 'ɵelementStyling', moduleName: CORE };
        Identifiers.elementStylingMap = { name: 'ɵelementStylingMap', moduleName: CORE };
        Identifiers.elementStyleProp = { name: 'ɵelementStyleProp', moduleName: CORE };
        Identifiers.elementStylingApply = { name: 'ɵelementStylingApply', moduleName: CORE };
        Identifiers.containerCreate = { name: 'ɵcontainer', moduleName: CORE };
        Identifiers.nextContext = { name: 'ɵnextContext', moduleName: CORE };
        Identifiers.templateCreate = { name: 'ɵtemplate', moduleName: CORE };
        Identifiers.text = { name: 'ɵtext', moduleName: CORE };
        Identifiers.textBinding = { name: 'ɵtextBinding', moduleName: CORE };
        Identifiers.bind = { name: 'ɵbind', moduleName: CORE };
        Identifiers.enableBindings = { name: 'ɵenableBindings', moduleName: CORE };
        Identifiers.disableBindings = { name: 'ɵdisableBindings', moduleName: CORE };
        Identifiers.getCurrentView = { name: 'ɵgetCurrentView', moduleName: CORE };
        Identifiers.restoreView = { name: 'ɵrestoreView', moduleName: CORE };
        Identifiers.interpolation1 = { name: 'ɵinterpolation1', moduleName: CORE };
        Identifiers.interpolation2 = { name: 'ɵinterpolation2', moduleName: CORE };
        Identifiers.interpolation3 = { name: 'ɵinterpolation3', moduleName: CORE };
        Identifiers.interpolation4 = { name: 'ɵinterpolation4', moduleName: CORE };
        Identifiers.interpolation5 = { name: 'ɵinterpolation5', moduleName: CORE };
        Identifiers.interpolation6 = { name: 'ɵinterpolation6', moduleName: CORE };
        Identifiers.interpolation7 = { name: 'ɵinterpolation7', moduleName: CORE };
        Identifiers.interpolation8 = { name: 'ɵinterpolation8', moduleName: CORE };
        Identifiers.interpolationV = { name: 'ɵinterpolationV', moduleName: CORE };
        Identifiers.pureFunction0 = { name: 'ɵpureFunction0', moduleName: CORE };
        Identifiers.pureFunction1 = { name: 'ɵpureFunction1', moduleName: CORE };
        Identifiers.pureFunction2 = { name: 'ɵpureFunction2', moduleName: CORE };
        Identifiers.pureFunction3 = { name: 'ɵpureFunction3', moduleName: CORE };
        Identifiers.pureFunction4 = { name: 'ɵpureFunction4', moduleName: CORE };
        Identifiers.pureFunction5 = { name: 'ɵpureFunction5', moduleName: CORE };
        Identifiers.pureFunction6 = { name: 'ɵpureFunction6', moduleName: CORE };
        Identifiers.pureFunction7 = { name: 'ɵpureFunction7', moduleName: CORE };
        Identifiers.pureFunction8 = { name: 'ɵpureFunction8', moduleName: CORE };
        Identifiers.pureFunctionV = { name: 'ɵpureFunctionV', moduleName: CORE };
        Identifiers.pipeBind1 = { name: 'ɵpipeBind1', moduleName: CORE };
        Identifiers.pipeBind2 = { name: 'ɵpipeBind2', moduleName: CORE };
        Identifiers.pipeBind3 = { name: 'ɵpipeBind3', moduleName: CORE };
        Identifiers.pipeBind4 = { name: 'ɵpipeBind4', moduleName: CORE };
        Identifiers.pipeBindV = { name: 'ɵpipeBindV', moduleName: CORE };
        Identifiers.i18nAttribute = { name: 'ɵi18nAttribute', moduleName: CORE };
        Identifiers.i18nExp = { name: 'ɵi18nExp', moduleName: CORE };
        Identifiers.i18nStart = { name: 'ɵi18nStart', moduleName: CORE };
        Identifiers.i18nEnd = { name: 'ɵi18nEnd', moduleName: CORE };
        Identifiers.i18nApply = { name: 'ɵi18nApply', moduleName: CORE };
        Identifiers.load = { name: 'ɵload', moduleName: CORE };
        Identifiers.loadQueryList = { name: 'ɵloadQueryList', moduleName: CORE };
        Identifiers.pipe = { name: 'ɵpipe', moduleName: CORE };
        Identifiers.projection = { name: 'ɵprojection', moduleName: CORE };
        Identifiers.projectionDef = { name: 'ɵprojectionDef', moduleName: CORE };
        Identifiers.reference = { name: 'ɵreference', moduleName: CORE };
        Identifiers.inject = { name: 'inject', moduleName: CORE };
        Identifiers.injectAttribute = { name: 'ɵinjectAttribute', moduleName: CORE };
        Identifiers.directiveInject = { name: 'ɵdirectiveInject', moduleName: CORE };
        Identifiers.templateRefExtractor = { name: 'ɵtemplateRefExtractor', moduleName: CORE };
        Identifiers.defineBase = { name: 'ɵdefineBase', moduleName: CORE };
        Identifiers.BaseDef = {
            name: 'ɵBaseDef',
            moduleName: CORE,
        };
        Identifiers.defineComponent = { name: 'ɵdefineComponent', moduleName: CORE };
        Identifiers.ComponentDefWithMeta = {
            name: 'ɵComponentDefWithMeta',
            moduleName: CORE,
        };
        Identifiers.defineDirective = {
            name: 'ɵdefineDirective',
            moduleName: CORE,
        };
        Identifiers.DirectiveDefWithMeta = {
            name: 'ɵDirectiveDefWithMeta',
            moduleName: CORE,
        };
        Identifiers.InjectorDef = {
            name: 'ɵInjectorDef',
            moduleName: CORE,
        };
        Identifiers.defineInjector = {
            name: 'defineInjector',
            moduleName: CORE,
        };
        Identifiers.NgModuleDefWithMeta = {
            name: 'ɵNgModuleDefWithMeta',
            moduleName: CORE,
        };
        Identifiers.defineNgModule = { name: 'ɵdefineNgModule', moduleName: CORE };
        Identifiers.PipeDefWithMeta = { name: 'ɵPipeDefWithMeta', moduleName: CORE };
        Identifiers.definePipe = { name: 'ɵdefinePipe', moduleName: CORE };
        Identifiers.query = { name: 'ɵquery', moduleName: CORE };
        Identifiers.queryRefresh = { name: 'ɵqueryRefresh', moduleName: CORE };
        Identifiers.registerContentQuery = { name: 'ɵregisterContentQuery', moduleName: CORE };
        Identifiers.NgOnChangesFeature = { name: 'ɵNgOnChangesFeature', moduleName: CORE };
        Identifiers.InheritDefinitionFeature = { name: 'ɵInheritDefinitionFeature', moduleName: CORE };
        Identifiers.PublicFeature = { name: 'ɵPublicFeature', moduleName: CORE };
        Identifiers.listener = { name: 'ɵlistener', moduleName: CORE };
        Identifiers.getFactoryOf = {
            name: 'ɵgetFactoryOf',
            moduleName: CORE,
        };
        Identifiers.getInheritedFactory = {
            name: 'ɵgetInheritedFactory',
            moduleName: CORE,
        };
        // sanitization-related functions
        Identifiers.sanitizeHtml = { name: 'ɵsanitizeHtml', moduleName: CORE };
        Identifiers.sanitizeStyle = { name: 'ɵsanitizeStyle', moduleName: CORE };
        Identifiers.defaultStyleSanitizer = { name: 'ɵdefaultStyleSanitizer', moduleName: CORE };
        Identifiers.sanitizeResourceUrl = { name: 'ɵsanitizeResourceUrl', moduleName: CORE };
        Identifiers.sanitizeScript = { name: 'ɵsanitizeScript', moduleName: CORE };
        Identifiers.sanitizeUrl = { name: 'ɵsanitizeUrl', moduleName: CORE };
        return Identifiers;
    }());
    exports.Identifiers = Identifiers;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvcmVuZGVyMy9yM19pZGVudGlmaWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUlILElBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQztJQUU3QjtRQUFBO1FBNExBLENBQUM7UUEzTEMsYUFBYTtRQUNOLHNCQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLDRCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUMvQixzQkFBVSxHQUFHLGFBQWEsQ0FBQztRQUVsQyxrQkFBa0I7UUFDWCx5QkFBYSxHQUF3QixFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFFaEYsMkJBQWUsR0FBd0IsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBRXBGLHdCQUFZLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFFOUUsbUJBQU8sR0FBd0IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUVwRSx3QkFBWSxHQUF3QixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBRTlFLHNCQUFVLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFFMUUsMkJBQWUsR0FBd0IsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBRXBGLDRCQUFnQixHQUF3QixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFF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QUFlLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQzlFLHlCQUFhLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNoRixpQ0FBcUIsR0FDRixFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDdEUsK0JBQW1CLEdBQ0EsRUFBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3BFLDBCQUFjLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNsRix1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3JGLGtCQUFDO0tBQUEsQUE1TEQsSUE0TEM7SUE1TFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG5jb25zdCBDT1JFID0gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllcnMge1xuICAvKiBNZXRob2RzICovXG4gIHN0YXRpYyBORVdfTUVUSE9EID0gJ2ZhY3RvcnknO1xuICBzdGF0aWMgVFJBTlNGT1JNX01FVEhPRCA9ICd0cmFuc2Zvcm0nO1xuICBzdGF0aWMgUEFUQ0hfREVQUyA9ICdwYXRjaGVkRGVwcyc7XG5cbiAgLyogSW5zdHJ1Y3Rpb25zICovXG4gIHN0YXRpYyBuYW1lc3BhY2VIVE1MOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5hbWVzcGFjZUhUTUwnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgbmFtZXNwYWNlTWF0aE1MOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5hbWVzcGFjZU1hdGhNTCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBuYW1lc3BhY2VTVkc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1bmFtZXNwYWNlU1ZHJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50U3RhcnQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudFN0YXJ0JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnRFbmQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudEVuZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50UHJvcGVydHk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudFByb3BlcnR5JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnRBdHRyaWJ1dGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudEF0dHJpYnV0ZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50Q2xhc3NQcm9wOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZW1lbnRDbGFzc1Byb3AnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZWxlbWVudENvbnRhaW5lclN0YXJ0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUVDJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnRDb250YWluZXJFbmQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZUMnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZWxlbWVudFN0eWxpbmc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudFN0eWxpbmcnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZWxlbWVudFN0eWxpbmdNYXA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudFN0eWxpbmdNYXAnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZWxlbWVudFN0eWxlUHJvcDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVlbGVtZW50U3R5bGVQcm9wJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnRTdHlsaW5nQXBwbHk6XG4gICAgICBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZW1lbnRTdHlsaW5nQXBwbHknLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgY29udGFpbmVyQ3JlYXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWNvbnRhaW5lcicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBuZXh0Q29udGV4dDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVuZXh0Q29udGV4dCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyB0ZW1wbGF0ZUNyZWF0ZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybV0ZW1wbGF0ZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyB0ZXh0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXRleHQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgdGV4dEJpbmRpbmc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dGV4dEJpbmRpbmcnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgYmluZDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybViaW5kJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVuYWJsZUJpbmRpbmdzOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVuYWJsZUJpbmRpbmdzJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGRpc2FibGVCaW5kaW5nczogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVkaXNhYmxlQmluZGluZ3MnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZ2V0Q3VycmVudFZpZXc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1Z2V0Q3VycmVudFZpZXcnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgcmVzdG9yZVZpZXc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cmVzdG9yZVZpZXcnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgaW50ZXJwb2xhdGlvbjE6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGlvbjEnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGludGVycG9sYXRpb24yOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWludGVycG9sYXRpb24yJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpbnRlcnBvbGF0aW9uMzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbnRlcnBvbGF0aW9uMycsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGlvbjQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGlvbjQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGludGVycG9sYXRpb241OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWludGVycG9sYXRpb241JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpbnRlcnBvbGF0aW9uNjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbnRlcnBvbGF0aW9uNicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGlvbjc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGlvbjcnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGludGVycG9sYXRpb244OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWludGVycG9sYXRpb244JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpbnRlcnBvbGF0aW9uVjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbnRlcnBvbGF0aW9uVicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBwdXJlRnVuY3Rpb24wOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXB1cmVGdW5jdGlvbjAnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHB1cmVGdW5jdGlvbjE6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHVyZUZ1bmN0aW9uMScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZUZ1bmN0aW9uMjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwdXJlRnVuY3Rpb24yJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlRnVuY3Rpb24zOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXB1cmVGdW5jdGlvbjMnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHB1cmVGdW5jdGlvbjQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHVyZUZ1bmN0aW9uNCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZUZ1bmN0aW9uNTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwdXJlRnVuY3Rpb241JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlRnVuY3Rpb242OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXB1cmVGdW5jdGlvbjYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHB1cmVGdW5jdGlvbjc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHVyZUZ1bmN0aW9uNycsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZUZ1bmN0aW9uODogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwdXJlRnVuY3Rpb244JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlRnVuY3Rpb25WOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXB1cmVGdW5jdGlvblYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgcGlwZUJpbmQxOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpcGVCaW5kMScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcGlwZUJpbmQyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpcGVCaW5kMicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcGlwZUJpbmQzOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpcGVCaW5kMycsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcGlwZUJpbmQ0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpcGVCaW5kNCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcGlwZUJpbmRWOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpcGVCaW5kVicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBpMThuQXR0cmlidXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWkxOG5BdHRyaWJ1dGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGkxOG5FeHA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aTE4bkV4cCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaTE4blN0YXJ0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWkxOG5TdGFydCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaTE4bkVuZDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpMThuRW5kJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpMThuQXBwbHk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aTE4bkFwcGx5JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGxvYWQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1bG9hZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbG9hZFF1ZXJ5TGlzdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVsb2FkUXVlcnlMaXN0JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIHBpcGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGlwZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBwcm9qZWN0aW9uOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXByb2plY3Rpb24nLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHByb2plY3Rpb25EZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHJvamVjdGlvbkRlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cmVmZXJlbmNlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGluamVjdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnaW5qZWN0JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGluamVjdEF0dHJpYnV0ZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbmplY3RBdHRyaWJ1dGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZGlyZWN0aXZlSW5qZWN0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWRpcmVjdGl2ZUluamVjdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyB0ZW1wbGF0ZVJlZkV4dHJhY3RvcjpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dGVtcGxhdGVSZWZFeHRyYWN0b3InLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZGVmaW5lQmFzZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVkZWZpbmVCYXNlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIEJhc2VEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1QmFzZURlZicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgZGVmaW5lQ29tcG9uZW50OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWRlZmluZUNvbXBvbmVudCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBDb21wb25lbnREZWZXaXRoTWV0YTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVDb21wb25lbnREZWZXaXRoTWV0YScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgZGVmaW5lRGlyZWN0aXZlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWRlZmluZURpcmVjdGl2ZScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgRGlyZWN0aXZlRGVmV2l0aE1ldGE6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1RGlyZWN0aXZlRGVmV2l0aE1ldGEnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG4gIH07XG5cbiAgc3RhdGljIEluamVjdG9yRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtUluamVjdG9yRGVmJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZpbmVJbmplY3Rvcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnZGVmaW5lSW5qZWN0b3InLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG4gIH07XG5cbiAgc3RhdGljIE5nTW9kdWxlRGVmV2l0aE1ldGE6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1TmdNb2R1bGVEZWZXaXRoTWV0YScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgZGVmaW5lTmdNb2R1bGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZGVmaW5lTmdNb2R1bGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgUGlwZURlZldpdGhNZXRhOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtVBpcGVEZWZXaXRoTWV0YScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBkZWZpbmVQaXBlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWRlZmluZVBpcGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgcXVlcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cXVlcnknLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHF1ZXJ5UmVmcmVzaDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVxdWVyeVJlZnJlc2gnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHJlZ2lzdGVyQ29udGVudFF1ZXJ5OlxuICAgICAgby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVyZWdpc3RlckNvbnRlbnRRdWVyeScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBOZ09uQ2hhbmdlc0ZlYXR1cmU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1TmdPbkNoYW5nZXNGZWF0dXJlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIEluaGVyaXREZWZpbml0aW9uRmVhdHVyZTpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIFB1YmxpY0ZlYXR1cmU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1UHVibGljRmVhdHVyZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBsaXN0ZW5lcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVsaXN0ZW5lcicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBnZXRGYWN0b3J5T2Y6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1Z2V0RmFjdG9yeU9mJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuXG4gIHN0YXRpYyBnZXRJbmhlcml0ZWRGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWdldEluaGVyaXRlZEZhY3RvcnknLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG4gIH07XG5cbiAgLy8gc2FuaXRpemF0aW9uLXJlbGF0ZWQgZnVuY3Rpb25zXG4gIHN0YXRpYyBzYW5pdGl6ZUh0bWw6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1c2FuaXRpemVIdG1sJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzYW5pdGl6ZVN0eWxlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXNhbml0aXplU3R5bGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGRlZmF1bHRTdHlsZVNhbml0aXplcjpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZGVmYXVsdFN0eWxlU2FuaXRpemVyJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzYW5pdGl6ZVJlc291cmNlVXJsOlxuICAgICAgby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVzYW5pdGl6ZVJlc291cmNlVXJsJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzYW5pdGl6ZVNjcmlwdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVzYW5pdGl6ZVNjcmlwdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgc2FuaXRpemVVcmw6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1c2FuaXRpemVVcmwnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbn1cbiJdfQ==