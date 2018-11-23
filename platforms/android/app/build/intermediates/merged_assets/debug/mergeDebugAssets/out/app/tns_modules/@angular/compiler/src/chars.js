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
        define("@angular/compiler/src/chars", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$EOF = 0;
    exports.$TAB = 9;
    exports.$LF = 10;
    exports.$VTAB = 11;
    exports.$FF = 12;
    exports.$CR = 13;
    exports.$SPACE = 32;
    exports.$BANG = 33;
    exports.$DQ = 34;
    exports.$HASH = 35;
    exports.$$ = 36;
    exports.$PERCENT = 37;
    exports.$AMPERSAND = 38;
    exports.$SQ = 39;
    exports.$LPAREN = 40;
    exports.$RPAREN = 41;
    exports.$STAR = 42;
    exports.$PLUS = 43;
    exports.$COMMA = 44;
    exports.$MINUS = 45;
    exports.$PERIOD = 46;
    exports.$SLASH = 47;
    exports.$COLON = 58;
    exports.$SEMICOLON = 59;
    exports.$LT = 60;
    exports.$EQ = 61;
    exports.$GT = 62;
    exports.$QUESTION = 63;
    exports.$0 = 48;
    exports.$9 = 57;
    exports.$A = 65;
    exports.$E = 69;
    exports.$F = 70;
    exports.$X = 88;
    exports.$Z = 90;
    exports.$LBRACKET = 91;
    exports.$BACKSLASH = 92;
    exports.$RBRACKET = 93;
    exports.$CARET = 94;
    exports.$_ = 95;
    exports.$a = 97;
    exports.$e = 101;
    exports.$f = 102;
    exports.$n = 110;
    exports.$r = 114;
    exports.$t = 116;
    exports.$u = 117;
    exports.$v = 118;
    exports.$x = 120;
    exports.$z = 122;
    exports.$LBRACE = 123;
    exports.$BAR = 124;
    exports.$RBRACE = 125;
    exports.$NBSP = 160;
    exports.$PIPE = 124;
    exports.$TILDA = 126;
    exports.$AT = 64;
    exports.$BT = 96;
    function isWhitespace(code) {
        return (code >= exports.$TAB && code <= exports.$SPACE) || (code == exports.$NBSP);
    }
    exports.isWhitespace = isWhitespace;
    function isDigit(code) {
        return exports.$0 <= code && code <= exports.$9;
    }
    exports.isDigit = isDigit;
    function isAsciiLetter(code) {
        return code >= exports.$a && code <= exports.$z || code >= exports.$A && code <= exports.$Z;
    }
    exports.isAsciiLetter = isAsciiLetter;
    function isAsciiHexDigit(code) {
        return code >= exports.$a && code <= exports.$f || code >= exports.$A && code <= exports.$F || isDigit(code);
    }
    exports.isAsciiHexDigit = isAsciiHexDigit;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvY2hhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFVSxRQUFBLElBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxRQUFBLElBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDWixRQUFBLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDVCxRQUFBLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxRQUFBLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDUixRQUFBLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxRQUFBLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsUUFBQSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ1QsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsUUFBQSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsUUFBQSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osUUFBQSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLFFBQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNULFFBQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNULFFBQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNULFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVmLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFFBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVSLFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLFFBQUEsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixRQUFBLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixRQUFBLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDWixRQUFBLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFUixRQUFBLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDUixRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDVCxRQUFBLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFFVCxRQUFBLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDZCxRQUFBLElBQUksR0FBRyxHQUFHLENBQUM7SUFDWCxRQUFBLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDZCxRQUFBLEtBQUssR0FBRyxHQUFHLENBQUM7SUFFWixRQUFBLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDWixRQUFBLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDYixRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFVCxRQUFBLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFdEIsU0FBZ0IsWUFBWSxDQUFDLElBQVk7UUFDdkMsT0FBTyxDQUFDLElBQUksSUFBSSxZQUFJLElBQUksSUFBSSxJQUFJLGNBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFGRCxvQ0FFQztJQUVELFNBQWdCLE9BQU8sQ0FBQyxJQUFZO1FBQ2xDLE9BQU8sVUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksVUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFGRCwwQkFFQztJQUVELFNBQWdCLGFBQWEsQ0FBQyxJQUFZO1FBQ3hDLE9BQU8sSUFBSSxJQUFJLFVBQUUsSUFBSSxJQUFJLElBQUksVUFBRSxJQUFJLElBQUksSUFBSSxVQUFFLElBQUksSUFBSSxJQUFJLFVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRkQsc0NBRUM7SUFFRCxTQUFnQixlQUFlLENBQUMsSUFBWTtRQUMxQyxPQUFPLElBQUksSUFBSSxVQUFFLElBQUksSUFBSSxJQUFJLFVBQUUsSUFBSSxJQUFJLElBQUksVUFBRSxJQUFJLElBQUksSUFBSSxVQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFGRCwwQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNvbnN0ICRFT0YgPSAwO1xuZXhwb3J0IGNvbnN0ICRUQUIgPSA5O1xuZXhwb3J0IGNvbnN0ICRMRiA9IDEwO1xuZXhwb3J0IGNvbnN0ICRWVEFCID0gMTE7XG5leHBvcnQgY29uc3QgJEZGID0gMTI7XG5leHBvcnQgY29uc3QgJENSID0gMTM7XG5leHBvcnQgY29uc3QgJFNQQUNFID0gMzI7XG5leHBvcnQgY29uc3QgJEJBTkcgPSAzMztcbmV4cG9ydCBjb25zdCAkRFEgPSAzNDtcbmV4cG9ydCBjb25zdCAkSEFTSCA9IDM1O1xuZXhwb3J0IGNvbnN0ICQkID0gMzY7XG5leHBvcnQgY29uc3QgJFBFUkNFTlQgPSAzNztcbmV4cG9ydCBjb25zdCAkQU1QRVJTQU5EID0gMzg7XG5leHBvcnQgY29uc3QgJFNRID0gMzk7XG5leHBvcnQgY29uc3QgJExQQVJFTiA9IDQwO1xuZXhwb3J0IGNvbnN0ICRSUEFSRU4gPSA0MTtcbmV4cG9ydCBjb25zdCAkU1RBUiA9IDQyO1xuZXhwb3J0IGNvbnN0ICRQTFVTID0gNDM7XG5leHBvcnQgY29uc3QgJENPTU1BID0gNDQ7XG5leHBvcnQgY29uc3QgJE1JTlVTID0gNDU7XG5leHBvcnQgY29uc3QgJFBFUklPRCA9IDQ2O1xuZXhwb3J0IGNvbnN0ICRTTEFTSCA9IDQ3O1xuZXhwb3J0IGNvbnN0ICRDT0xPTiA9IDU4O1xuZXhwb3J0IGNvbnN0ICRTRU1JQ09MT04gPSA1OTtcbmV4cG9ydCBjb25zdCAkTFQgPSA2MDtcbmV4cG9ydCBjb25zdCAkRVEgPSA2MTtcbmV4cG9ydCBjb25zdCAkR1QgPSA2MjtcbmV4cG9ydCBjb25zdCAkUVVFU1RJT04gPSA2MztcblxuZXhwb3J0IGNvbnN0ICQwID0gNDg7XG5leHBvcnQgY29uc3QgJDkgPSA1NztcblxuZXhwb3J0IGNvbnN0ICRBID0gNjU7XG5leHBvcnQgY29uc3QgJEUgPSA2OTtcbmV4cG9ydCBjb25zdCAkRiA9IDcwO1xuZXhwb3J0IGNvbnN0ICRYID0gODg7XG5leHBvcnQgY29uc3QgJFogPSA5MDtcblxuZXhwb3J0IGNvbnN0ICRMQlJBQ0tFVCA9IDkxO1xuZXhwb3J0IGNvbnN0ICRCQUNLU0xBU0ggPSA5MjtcbmV4cG9ydCBjb25zdCAkUkJSQUNLRVQgPSA5MztcbmV4cG9ydCBjb25zdCAkQ0FSRVQgPSA5NDtcbmV4cG9ydCBjb25zdCAkXyA9IDk1O1xuXG5leHBvcnQgY29uc3QgJGEgPSA5NztcbmV4cG9ydCBjb25zdCAkZSA9IDEwMTtcbmV4cG9ydCBjb25zdCAkZiA9IDEwMjtcbmV4cG9ydCBjb25zdCAkbiA9IDExMDtcbmV4cG9ydCBjb25zdCAkciA9IDExNDtcbmV4cG9ydCBjb25zdCAkdCA9IDExNjtcbmV4cG9ydCBjb25zdCAkdSA9IDExNztcbmV4cG9ydCBjb25zdCAkdiA9IDExODtcbmV4cG9ydCBjb25zdCAkeCA9IDEyMDtcbmV4cG9ydCBjb25zdCAkeiA9IDEyMjtcblxuZXhwb3J0IGNvbnN0ICRMQlJBQ0UgPSAxMjM7XG5leHBvcnQgY29uc3QgJEJBUiA9IDEyNDtcbmV4cG9ydCBjb25zdCAkUkJSQUNFID0gMTI1O1xuZXhwb3J0IGNvbnN0ICROQlNQID0gMTYwO1xuXG5leHBvcnQgY29uc3QgJFBJUEUgPSAxMjQ7XG5leHBvcnQgY29uc3QgJFRJTERBID0gMTI2O1xuZXhwb3J0IGNvbnN0ICRBVCA9IDY0O1xuXG5leHBvcnQgY29uc3QgJEJUID0gOTY7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1doaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkVEFCICYmIGNvZGUgPD0gJFNQQUNFKSB8fCAoY29kZSA9PSAkTkJTUCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gJDAgPD0gY29kZSAmJiBjb2RlIDw9ICQ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUxldHRlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkeiB8fCBjb2RlID49ICRBICYmIGNvZGUgPD0gJFo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzY2lpSGV4RGlnaXQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID49ICRhICYmIGNvZGUgPD0gJGYgfHwgY29kZSA+PSAkQSAmJiBjb2RlIDw9ICRGIHx8IGlzRGlnaXQoY29kZSk7XG59XG4iXX0=