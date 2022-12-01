/** @typedef {typeof __propDef.props}  RowProps */
/** @typedef {typeof __propDef.events}  RowEvents */
/** @typedef {typeof __propDef.slots}  RowSlots */
export default class Row extends SvelteComponentTyped<{
    [x: string]: any;
    form?: boolean | undefined;
    class?: string | undefined;
    noGutters?: boolean | undefined;
    cols?: BreakpointsProps | undefined;
    inner?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RowProps = typeof __propDef.props;
export type RowEvents = typeof __propDef.events;
export type RowSlots = typeof __propDef.slots;
import { BreakpointsProps } from "./utils.js";
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        form?: boolean | undefined;
        class?: string | undefined;
        noGutters?: boolean | undefined;
        cols?: BreakpointsProps | undefined;
        inner?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
