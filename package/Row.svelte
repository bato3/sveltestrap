<script>import classnames, { getBreakpointsAttr } from './utils.js';
let className = '';
export { className as class };
export let noGutters = false;
export let form = false;
export let cols = 0;
export let inner = undefined;
$: classes = classnames(className, noGutters ? 'gx-0' : null, form ? 'form-row' : 'row', ...getBreakpointsAttr(cols, 'row-cols'));
</script>

<div {...$$restProps} class={classes} bind:this={inner}>
  <slot />
</div>
