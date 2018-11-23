/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '../output/output_ast';
import { jitStatements } from '../output/output_jit';
/**
 * Implementation of `CompileReflector` which resolves references to @angular/core
 * symbols at runtime, according to a consumer-provided mapping.
 *
 * Only supports `resolveExternalReference`, all other methods throw.
 */
class R3JitReflector {
    constructor(context) {
        this.context = context;
    }
    resolveExternalReference(ref) {
        // This reflector only handles @angular/core imports.
        if (ref.moduleName !== '@angular/core') {
            throw new Error(`Cannot resolve external reference to ${ref.moduleName}, only references to @angular/core are supported.`);
        }
        if (!this.context.hasOwnProperty(ref.name)) {
            throw new Error(`No value provided for @angular/core symbol '${ref.name}'.`);
        }
        return this.context[ref.name];
    }
    parameters(typeOrFunc) { throw new Error('Not implemented.'); }
    annotations(typeOrFunc) { throw new Error('Not implemented.'); }
    shallowAnnotations(typeOrFunc) { throw new Error('Not implemented.'); }
    tryAnnotations(typeOrFunc) { throw new Error('Not implemented.'); }
    propMetadata(typeOrFunc) { throw new Error('Not implemented.'); }
    hasLifecycleHook(type, lcProperty) { throw new Error('Not implemented.'); }
    guards(typeOrFunc) { throw new Error('Not implemented.'); }
    componentModuleUrl(type, cmpMetadata) { throw new Error('Not implemented.'); }
}
/**
 * JIT compiles an expression and returns the result of executing that expression.
 *
 * @param def the definition which will be compiled and executed to get the value to patch
 * @param context an object map of @angular/core symbol names to symbols which will be available in
 * the context of the compiled expression
 * @param sourceUrl a URL to use for the source map of the compiled expression
 * @param constantPool an optional `ConstantPool` which contains constants used in the expression
 */
export function jitExpression(def, context, sourceUrl, preStatements) {
    // The ConstantPool may contain Statements which declare variables used in the final expression.
    // Therefore, its statements need to precede the actual JIT operation. The final statement is a
    // declaration of $def which is set to the expression being compiled.
    const statements = [
        ...preStatements,
        new o.DeclareVarStmt('$def', def, undefined, [o.StmtModifier.Exported]),
    ];
    const res = jitStatements(sourceUrl, statements, new R3JitReflector(context), false);
    return res['$def'];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfaml0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvcjNfaml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILE9BQU8sS0FBSyxDQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDMUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRW5EOzs7OztHQUtHO0FBQ0gsTUFBTSxjQUFjO0lBQ2xCLFlBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBQUcsQ0FBQztJQUVyRCx3QkFBd0IsQ0FBQyxHQUF3QjtRQUMvQyxxREFBcUQ7UUFDckQsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLGVBQWUsRUFBRTtZQUN0QyxNQUFNLElBQUksS0FBSyxDQUNYLHdDQUF3QyxHQUFHLENBQUMsVUFBVSxtREFBbUQsQ0FBQyxDQUFDO1NBQ2hIO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFNLENBQUMsRUFBRTtZQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsQ0FBQztTQUMvRTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUFlLElBQWEsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3RSxXQUFXLENBQUMsVUFBZSxJQUFXLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUUsa0JBQWtCLENBQUMsVUFBZSxJQUFXLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkYsY0FBYyxDQUFDLFVBQWUsSUFBVyxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9FLFlBQVksQ0FBQyxVQUFlLElBQTZCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0YsZ0JBQWdCLENBQUMsSUFBUyxFQUFFLFVBQWtCLElBQWEsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRyxNQUFNLENBQUMsVUFBZSxJQUEyQixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZGLGtCQUFrQixDQUFDLElBQVMsRUFBRSxXQUFnQixJQUFZLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakc7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQ3pCLEdBQWlCLEVBQUUsT0FBNkIsRUFBRSxTQUFpQixFQUNuRSxhQUE0QjtJQUM5QixnR0FBZ0c7SUFDaEcsK0ZBQStGO0lBQy9GLHFFQUFxRTtJQUNyRSxNQUFNLFVBQVUsR0FBa0I7UUFDaEMsR0FBRyxhQUFhO1FBQ2hCLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDeEUsQ0FBQztJQUVGLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZVJlZmxlY3Rvcn0gZnJvbSAnLi4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtDb25zdGFudFBvb2x9IGZyb20gJy4uL2NvbnN0YW50X3Bvb2wnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge2ppdFN0YXRlbWVudHN9IGZyb20gJy4uL291dHB1dC9vdXRwdXRfaml0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBgQ29tcGlsZVJlZmxlY3RvcmAgd2hpY2ggcmVzb2x2ZXMgcmVmZXJlbmNlcyB0byBAYW5ndWxhci9jb3JlXG4gKiBzeW1ib2xzIGF0IHJ1bnRpbWUsIGFjY29yZGluZyB0byBhIGNvbnN1bWVyLXByb3ZpZGVkIG1hcHBpbmcuXG4gKlxuICogT25seSBzdXBwb3J0cyBgcmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlYCwgYWxsIG90aGVyIG1ldGhvZHMgdGhyb3cuXG4gKi9cbmNsYXNzIFIzSml0UmVmbGVjdG9yIGltcGxlbWVudHMgQ29tcGlsZVJlZmxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGV4dDoge1trZXk6IHN0cmluZ106IGFueX0pIHt9XG5cbiAgcmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKHJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSk6IGFueSB7XG4gICAgLy8gVGhpcyByZWZsZWN0b3Igb25seSBoYW5kbGVzIEBhbmd1bGFyL2NvcmUgaW1wb3J0cy5cbiAgICBpZiAocmVmLm1vZHVsZU5hbWUgIT09ICdAYW5ndWxhci9jb3JlJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgcmVzb2x2ZSBleHRlcm5hbCByZWZlcmVuY2UgdG8gJHtyZWYubW9kdWxlTmFtZX0sIG9ubHkgcmVmZXJlbmNlcyB0byBAYW5ndWxhci9jb3JlIGFyZSBzdXBwb3J0ZWQuYCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb250ZXh0Lmhhc093blByb3BlcnR5KHJlZi5uYW1lICEpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHZhbHVlIHByb3ZpZGVkIGZvciBAYW5ndWxhci9jb3JlIHN5bWJvbCAnJHtyZWYubmFtZSF9Jy5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dFtyZWYubmFtZSAhXTtcbiAgfVxuXG4gIHBhcmFtZXRlcnModHlwZU9yRnVuYzogYW55KTogYW55W11bXSB7IHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLicpOyB9XG5cbiAgYW5ub3RhdGlvbnModHlwZU9yRnVuYzogYW55KTogYW55W10geyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTsgfVxuXG4gIHNoYWxsb3dBbm5vdGF0aW9ucyh0eXBlT3JGdW5jOiBhbnkpOiBhbnlbXSB7IHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLicpOyB9XG5cbiAgdHJ5QW5ub3RhdGlvbnModHlwZU9yRnVuYzogYW55KTogYW55W10geyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTsgfVxuXG4gIHByb3BNZXRhZGF0YSh0eXBlT3JGdW5jOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55W107fSB7IHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLicpOyB9XG5cbiAgaGFzTGlmZWN5Y2xlSG9vayh0eXBlOiBhbnksIGxjUHJvcGVydHk6IHN0cmluZyk6IGJvb2xlYW4geyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTsgfVxuXG4gIGd1YXJkcyh0eXBlT3JGdW5jOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55O30geyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTsgfVxuXG4gIGNvbXBvbmVudE1vZHVsZVVybCh0eXBlOiBhbnksIGNtcE1ldGFkYXRhOiBhbnkpOiBzdHJpbmcgeyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTsgfVxufVxuXG4vKipcbiAqIEpJVCBjb21waWxlcyBhbiBleHByZXNzaW9uIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgZXhlY3V0aW5nIHRoYXQgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0gZGVmIHRoZSBkZWZpbml0aW9uIHdoaWNoIHdpbGwgYmUgY29tcGlsZWQgYW5kIGV4ZWN1dGVkIHRvIGdldCB0aGUgdmFsdWUgdG8gcGF0Y2hcbiAqIEBwYXJhbSBjb250ZXh0IGFuIG9iamVjdCBtYXAgb2YgQGFuZ3VsYXIvY29yZSBzeW1ib2wgbmFtZXMgdG8gc3ltYm9scyB3aGljaCB3aWxsIGJlIGF2YWlsYWJsZSBpblxuICogdGhlIGNvbnRleHQgb2YgdGhlIGNvbXBpbGVkIGV4cHJlc3Npb25cbiAqIEBwYXJhbSBzb3VyY2VVcmwgYSBVUkwgdG8gdXNlIGZvciB0aGUgc291cmNlIG1hcCBvZiB0aGUgY29tcGlsZWQgZXhwcmVzc2lvblxuICogQHBhcmFtIGNvbnN0YW50UG9vbCBhbiBvcHRpb25hbCBgQ29uc3RhbnRQb29sYCB3aGljaCBjb250YWlucyBjb25zdGFudHMgdXNlZCBpbiB0aGUgZXhwcmVzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaml0RXhwcmVzc2lvbihcbiAgICBkZWY6IG8uRXhwcmVzc2lvbiwgY29udGV4dDoge1trZXk6IHN0cmluZ106IGFueX0sIHNvdXJjZVVybDogc3RyaW5nLFxuICAgIHByZVN0YXRlbWVudHM6IG8uU3RhdGVtZW50W10pOiBhbnkge1xuICAvLyBUaGUgQ29uc3RhbnRQb29sIG1heSBjb250YWluIFN0YXRlbWVudHMgd2hpY2ggZGVjbGFyZSB2YXJpYWJsZXMgdXNlZCBpbiB0aGUgZmluYWwgZXhwcmVzc2lvbi5cbiAgLy8gVGhlcmVmb3JlLCBpdHMgc3RhdGVtZW50cyBuZWVkIHRvIHByZWNlZGUgdGhlIGFjdHVhbCBKSVQgb3BlcmF0aW9uLiBUaGUgZmluYWwgc3RhdGVtZW50IGlzIGFcbiAgLy8gZGVjbGFyYXRpb24gb2YgJGRlZiB3aGljaCBpcyBzZXQgdG8gdGhlIGV4cHJlc3Npb24gYmVpbmcgY29tcGlsZWQuXG4gIGNvbnN0IHN0YXRlbWVudHM6IG8uU3RhdGVtZW50W10gPSBbXG4gICAgLi4ucHJlU3RhdGVtZW50cyxcbiAgICBuZXcgby5EZWNsYXJlVmFyU3RtdCgnJGRlZicsIGRlZiwgdW5kZWZpbmVkLCBbby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRdKSxcbiAgXTtcblxuICBjb25zdCByZXMgPSBqaXRTdGF0ZW1lbnRzKHNvdXJjZVVybCwgc3RhdGVtZW50cywgbmV3IFIzSml0UmVmbGVjdG9yKGNvbnRleHQpLCBmYWxzZSk7XG4gIHJldHVybiByZXNbJyRkZWYnXTtcbn1cbiJdfQ==