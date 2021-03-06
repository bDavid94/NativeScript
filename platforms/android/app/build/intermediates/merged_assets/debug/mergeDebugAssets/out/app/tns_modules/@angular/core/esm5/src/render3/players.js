/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import './ng_dev_mode';
import { getContext } from './context_discovery';
import { getRootContext } from './discovery_utils';
import { scheduleTick } from './instructions';
import { HEADER_OFFSET } from './interfaces/view';
import { addPlayerInternal, getOrCreatePlayerContext, getPlayerContext, getPlayersInternal, getStylingContext, throwInvalidRefError } from './styling/util';
/**
 * Adds a player to an element, directive or component instance that will later be
 * animated once change detection has passed.
 *
 * When a player is added to a reference it will stay active until `player.destroy()`
 * is called. Once called then the player will be removed from the active players
 * present on the associated ref instance.
 *
 * To get a list of all the active players on an element see [getPlayers].
 *
 * @param ref The element, directive or component that the player will be placed on.
 * @param player The player that will be triggered to play once change detection has run.
 */
export function addPlayer(ref, player) {
    var context = getContext(ref);
    if (!context) {
        ngDevMode && throwInvalidRefError();
        return;
    }
    var element = context.native;
    var lViewData = context.lViewData;
    var playerContext = getOrCreatePlayerContext(element, context);
    var rootContext = getRootContext(lViewData);
    addPlayerInternal(playerContext, rootContext, element, player, 0, ref);
    scheduleTick(rootContext, 2 /* FlushPlayers */);
}
/**
 * Returns a list of all the active players present on the provided ref instance (which can
 * be an instance of a directive, component or element).
 *
 * This function will only return players that have been added to the ref instance using
 * `addPlayer` or any players that are active through any template styling bindings
 * (`[style]`, `[style.prop]`, `[class]` and `[class.name]`).
 */
export function getPlayers(ref) {
    var context = getContext(ref);
    if (!context) {
        ngDevMode && throwInvalidRefError();
        return [];
    }
    var stylingContext = getStylingContext(context.nodeIndex - HEADER_OFFSET, context.lViewData);
    var playerContext = stylingContext ? getPlayerContext(stylingContext) : null;
    return playerContext ? getPlayersInternal(playerContext) : [];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvcGxheWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUMsYUFBYSxFQUFtQixNQUFNLG1CQUFtQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTFKOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQ3JCLEdBQXdELEVBQUUsTUFBYztJQUMxRSxJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLFNBQVMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQ3BDLE9BQU87S0FDUjtJQUVELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFxQixDQUFDO0lBQzlDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDcEMsSUFBTSxhQUFhLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBRyxDQUFDO0lBQ25FLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLFlBQVksQ0FBQyxXQUFXLHVCQUFnQyxDQUFDO0FBQzNELENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxHQUF3RDtJQUNqRixJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLFNBQVMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxJQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0YsSUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgJy4vbmdfZGV2X21vZGUnO1xuXG5pbXBvcnQge2dldENvbnRleHR9IGZyb20gJy4vY29udGV4dF9kaXNjb3ZlcnknO1xuaW1wb3J0IHtnZXRSb290Q29udGV4dH0gZnJvbSAnLi9kaXNjb3ZlcnlfdXRpbHMnO1xuaW1wb3J0IHtzY2hlZHVsZVRpY2t9IGZyb20gJy4vaW5zdHJ1Y3Rpb25zJztcbmltcG9ydCB7Q29tcG9uZW50SW5zdGFuY2UsIERpcmVjdGl2ZUluc3RhbmNlLCBQbGF5ZXJ9IGZyb20gJy4vaW50ZXJmYWNlcy9wbGF5ZXInO1xuaW1wb3J0IHtIRUFERVJfT0ZGU0VULCBSb290Q29udGV4dEZsYWdzfSBmcm9tICcuL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2FkZFBsYXllckludGVybmFsLCBnZXRPckNyZWF0ZVBsYXllckNvbnRleHQsIGdldFBsYXllckNvbnRleHQsIGdldFBsYXllcnNJbnRlcm5hbCwgZ2V0U3R5bGluZ0NvbnRleHQsIHRocm93SW52YWxpZFJlZkVycm9yfSBmcm9tICcuL3N0eWxpbmcvdXRpbCc7XG5cbi8qKlxuICogQWRkcyBhIHBsYXllciB0byBhbiBlbGVtZW50LCBkaXJlY3RpdmUgb3IgY29tcG9uZW50IGluc3RhbmNlIHRoYXQgd2lsbCBsYXRlciBiZVxuICogYW5pbWF0ZWQgb25jZSBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBwYXNzZWQuXG4gKlxuICogV2hlbiBhIHBsYXllciBpcyBhZGRlZCB0byBhIHJlZmVyZW5jZSBpdCB3aWxsIHN0YXkgYWN0aXZlIHVudGlsIGBwbGF5ZXIuZGVzdHJveSgpYFxuICogaXMgY2FsbGVkLiBPbmNlIGNhbGxlZCB0aGVuIHRoZSBwbGF5ZXIgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGFjdGl2ZSBwbGF5ZXJzXG4gKiBwcmVzZW50IG9uIHRoZSBhc3NvY2lhdGVkIHJlZiBpbnN0YW5jZS5cbiAqXG4gKiBUbyBnZXQgYSBsaXN0IG9mIGFsbCB0aGUgYWN0aXZlIHBsYXllcnMgb24gYW4gZWxlbWVudCBzZWUgW2dldFBsYXllcnNdLlxuICpcbiAqIEBwYXJhbSByZWYgVGhlIGVsZW1lbnQsIGRpcmVjdGl2ZSBvciBjb21wb25lbnQgdGhhdCB0aGUgcGxheWVyIHdpbGwgYmUgcGxhY2VkIG9uLlxuICogQHBhcmFtIHBsYXllciBUaGUgcGxheWVyIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgdG8gcGxheSBvbmNlIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1bi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYXllcihcbiAgICByZWY6IENvbXBvbmVudEluc3RhbmNlIHwgRGlyZWN0aXZlSW5zdGFuY2UgfCBIVE1MRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQocmVmKTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgbmdEZXZNb2RlICYmIHRocm93SW52YWxpZFJlZkVycm9yKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZWxlbWVudCA9IGNvbnRleHQubmF0aXZlIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBsVmlld0RhdGEgPSBjb250ZXh0LmxWaWV3RGF0YTtcbiAgY29uc3QgcGxheWVyQ29udGV4dCA9IGdldE9yQ3JlYXRlUGxheWVyQ29udGV4dChlbGVtZW50LCBjb250ZXh0KSAhO1xuICBjb25zdCByb290Q29udGV4dCA9IGdldFJvb3RDb250ZXh0KGxWaWV3RGF0YSk7XG4gIGFkZFBsYXllckludGVybmFsKHBsYXllckNvbnRleHQsIHJvb3RDb250ZXh0LCBlbGVtZW50LCBwbGF5ZXIsIDAsIHJlZik7XG4gIHNjaGVkdWxlVGljayhyb290Q29udGV4dCwgUm9vdENvbnRleHRGbGFncy5GbHVzaFBsYXllcnMpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCB0aGUgYWN0aXZlIHBsYXllcnMgcHJlc2VudCBvbiB0aGUgcHJvdmlkZWQgcmVmIGluc3RhbmNlICh3aGljaCBjYW5cbiAqIGJlIGFuIGluc3RhbmNlIG9mIGEgZGlyZWN0aXZlLCBjb21wb25lbnQgb3IgZWxlbWVudCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIG9ubHkgcmV0dXJuIHBsYXllcnMgdGhhdCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIHJlZiBpbnN0YW5jZSB1c2luZ1xuICogYGFkZFBsYXllcmAgb3IgYW55IHBsYXllcnMgdGhhdCBhcmUgYWN0aXZlIHRocm91Z2ggYW55IHRlbXBsYXRlIHN0eWxpbmcgYmluZGluZ3NcbiAqIChgW3N0eWxlXWAsIGBbc3R5bGUucHJvcF1gLCBgW2NsYXNzXWAgYW5kIGBbY2xhc3MubmFtZV1gKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllcnMocmVmOiBDb21wb25lbnRJbnN0YW5jZSB8IERpcmVjdGl2ZUluc3RhbmNlIHwgSFRNTEVsZW1lbnQpOiBQbGF5ZXJbXSB7XG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KHJlZik7XG4gIGlmICghY29udGV4dCkge1xuICAgIG5nRGV2TW9kZSAmJiB0aHJvd0ludmFsaWRSZWZFcnJvcigpO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHN0eWxpbmdDb250ZXh0ID0gZ2V0U3R5bGluZ0NvbnRleHQoY29udGV4dC5ub2RlSW5kZXggLSBIRUFERVJfT0ZGU0VULCBjb250ZXh0LmxWaWV3RGF0YSk7XG4gIGNvbnN0IHBsYXllckNvbnRleHQgPSBzdHlsaW5nQ29udGV4dCA/IGdldFBsYXllckNvbnRleHQoc3R5bGluZ0NvbnRleHQpIDogbnVsbDtcbiAgcmV0dXJuIHBsYXllckNvbnRleHQgPyBnZXRQbGF5ZXJzSW50ZXJuYWwocGxheWVyQ29udGV4dCkgOiBbXTtcbn1cbiJdfQ==