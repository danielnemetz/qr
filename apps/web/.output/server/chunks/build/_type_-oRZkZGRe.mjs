import { defineComponent, ref, watch, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelText, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot, ssrGetDynamicModelProps } from 'vue/server-renderer';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import { Primitive, Label, useForwardPropsEmits, SelectRoot, useForwardProps, SelectTrigger, SelectIcon, SelectValue, SelectPortal, SelectContent, SelectViewport, SelectItem, SelectItemIndicator, SelectItemText, CheckboxRoot, CheckboxIndicator, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, SliderRoot, SliderTrack, SliderRange, SliderThumb, SelectScrollUpButton, SelectScrollDownButton, SelectGroup, SelectLabel, SelectSeparator } from 'reka-ui';
import { reactiveOmit, useVModel } from '@vueuse/core';
import { Sun, Moon, Eye, EyeOff, Loader2, QrCode, Download, Shuffle, ChevronDown, Check, ChevronUp } from 'lucide-vue-next';
import { g as useRoute, n as navigateTo, f as useState } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "card",
        class: unref(cn)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/Card.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "CardAction",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "card-action",
        class: unref(cn)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardAction.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "CardContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "card-content",
        class: unref(cn)("px-6", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardContent.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "CardDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        "data-slot": "card-description",
        class: unref(cn)("text-muted-foreground text-sm", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardDescription.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "CardFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "card-footer",
        class: unref(cn)("flex items-center px-6 [.border-t]:pt-6", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardFooter.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "card-header",
        class: unref(cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardHeader.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        "data-slot": "card-title",
        class: unref(cn)("leading-none font-semibold", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardTitle.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "button",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/Button.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        "default": "h-9 px-4 py-2 has-[>svg]:px-3",
        "sm": "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        "lg": "h-10 rounded-md px-6 has-[>svg]:px-4",
        "icon": "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Label), mergeProps({ "data-slot": "label" }, unref(delegatedProps), {
        class: unref(cn)(
          "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/label/Label.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectRoot), mergeProps({ "data-slot": "select" }, unref(forwarded), _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/Select.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SelectContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SelectContent), mergeProps({ "data-slot": "select-content" }, { ..._ctx.$attrs, ...unref(forwarded) }, {
              class: unref(cn)(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
                __props.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SelectViewport), {
                    class: unref(cn)("p-1", __props.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$b)),
                    createVNode(unref(SelectViewport), {
                      class: unref(cn)("p-1", __props.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1")
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"]),
                    createVNode(unref(_sfc_main$c))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SelectContent), mergeProps({ "data-slot": "select-content" }, { ..._ctx.$attrs, ...unref(forwarded) }, {
                class: unref(cn)(
                  "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
                  __props.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$b)),
                  createVNode(unref(SelectViewport), {
                    class: unref(cn)("p-1", __props.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1")
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  createVNode(unref(_sfc_main$c))
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectContent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SelectGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectGroup), mergeProps({ "data-slot": "select-group" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectGroup.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SelectItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectItem), mergeProps({ "data-slot": "select-item" }, unref(forwardedProps), {
        class: unref(cn)(
          "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute right-2 flex size-3.5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SelectItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "indicator-icon", {}, () => {
                    _push3(ssrRenderComponent(unref(Check), { class: "size-4" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "indicator-icon", {}, () => [
                      createVNode(unref(Check), { class: "size-4" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(SelectItemText), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "absolute right-2 flex size-3.5 items-center justify-center" }, [
                createVNode(unref(SelectItemIndicator), null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "indicator-icon", {}, () => [
                      createVNode(unref(Check), { class: "size-4" })
                    ])
                  ]),
                  _: 3
                })
              ]),
              createVNode(unref(SelectItemText), null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectItem.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "SelectItemText",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectItemText), mergeProps({ "data-slot": "select-item-text" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectItemText.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SelectLabel",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectLabel), mergeProps({
        "data-slot": "select-label",
        class: unref(cn)("text-muted-foreground px-2 py-1.5 text-xs", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectLabel.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollDownButton",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectScrollDownButton), mergeProps({ "data-slot": "select-scroll-down-button" }, unref(forwardedProps), {
        class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronDown), { class: "size-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronDown), { class: "size-4" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectScrollDownButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollUpButton",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectScrollUpButton), mergeProps({ "data-slot": "select-scroll-up-button" }, unref(forwardedProps), {
        class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronUp), { class: "size-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronUp), { class: "size-4" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectScrollUpButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SelectSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectSeparator), mergeProps({ "data-slot": "select-separator" }, unref(delegatedProps), {
        class: unref(cn)("bg-border pointer-events-none -mx-1 my-1 h-px", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectSeparator.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SelectTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    size: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "size");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectTrigger), mergeProps({
        "data-slot": "select-trigger",
        "data-size": __props.size
      }, unref(forwardedProps), {
        class: unref(cn)(
          "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(SelectIcon), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ChevronDown), { class: "size-4 opacity-50" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ChevronDown), { class: "size-4 opacity-50" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(SelectIcon), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(ChevronDown), { class: "size-4 opacity-50" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectTrigger.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SelectValue",
  __ssrInlineRender: true,
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectValue), mergeProps({ "data-slot": "select-value" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectValue.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        "data-slot": "input",
        class: unref(cn)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          props.class
        )
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input/Input.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: [Boolean, String] },
    modelValue: { type: [Boolean, String, null] },
    disabled: { type: Boolean },
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ "data-slot": "checkbox" }, unref(forwarded), {
        class: unref(cn)(
          "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckboxIndicator), {
              "data-slot": "checkbox-indicator",
              class: "grid place-content-center text-current transition-none"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", slotProps, () => {
                    _push3(ssrRenderComponent(unref(Check), { class: "size-3.5" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", slotProps, () => [
                      createVNode(unref(Check), { class: "size-3.5" })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckboxIndicator), {
                "data-slot": "checkbox-indicator",
                class: "grid place-content-center text-current transition-none"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", slotProps, () => [
                    createVNode(unref(Check), { class: "size-3.5" })
                  ])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps({ "data-slot": "tooltip" }, unref(forwarded), _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(TooltipArrow), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(TooltipArrow), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(TooltipArrow), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: { default: 0 },
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps({ "data-slot": "tooltip-trigger" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    inverted: { type: Boolean },
    min: {},
    max: {},
    step: {},
    minStepsBetweenThumbs: {},
    thumbAlignment: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SliderRoot), mergeProps({
        "data-slot": "slider",
        class: unref(cn)(
          "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          props.class
        )
      }, unref(forwarded), _attrs), {
        default: withCtx(({ modelValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SliderTrack), {
              "data-slot": "slider-track",
              class: "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SliderRange), {
                    "data-slot": "slider-range",
                    class: "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SliderRange), {
                      "data-slot": "slider-range",
                      class: "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(modelValue, (_, key) => {
              _push2(ssrRenderComponent(unref(SliderThumb), {
                key,
                "data-slot": "slider-thumb",
                class: "bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(unref(SliderTrack), {
                "data-slot": "slider-track",
                class: "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
              }, {
                default: withCtx(() => [
                  createVNode(unref(SliderRange), {
                    "data-slot": "slider-range",
                    class: "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(modelValue, (_, key) => {
                return openBlock(), createBlock(unref(SliderThumb), {
                  key,
                  "data-slot": "slider-thumb",
                  class: "bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                });
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/slider/Slider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function randRange(min, max) {
  return min + Math.random() * (max - min);
}
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function wrapHue(h) {
  return (h % 360 + 360) % 360;
}
function computeHues(base, strategy) {
  switch (strategy) {
    case "analogous":
      return [base, wrapHue(base + randRange(25, 40)), wrapHue(base - randRange(25, 40))];
    case "complementary":
      return [base, wrapHue(base + 180), wrapHue(base + randRange(15, 30))];
    case "triadic":
      return [base, wrapHue(base + 120), wrapHue(base + 240)];
    case "split-complementary":
      return [base, wrapHue(base + 150), wrapHue(base + 210)];
  }
}
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * Math.max(0, Math.min(1, color))).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function generateColorScheme() {
  const baseHue = Math.random() * 360;
  const strategy = pickRandom([
    "analogous",
    "complementary",
    "triadic",
    "split-complementary"
  ]);
  const [h1, h2, h3] = computeHues(baseHue, strategy);
  return {
    background: hslToHex(h1, randRange(30, 50), randRange(90, 95)),
    dotsStart: hslToHex(h1, randRange(50, 70), randRange(30, 45)),
    dotsEnd: hslToHex(h2, randRange(50, 70), randRange(30, 45)),
    corners: hslToHex(h3, randRange(40, 60), randRange(25, 40)),
    text: hslToHex(h1, randRange(15, 25), randRange(20, 30))
  };
}
var escapeString = (str) => {
  if (!str) return "";
  return str.replace(/([\\;,:"])/g, "\\$1");
};
var buildWifiString = (cfg) => {
  const safeSsid = escapeString(cfg.ssid);
  const safePass = cfg.password ? escapeString(cfg.password) : "";
  return `WIFI:S:${safeSsid};T:${cfg.encryption};P:${safePass};H:${cfg.isHidden};;`;
};
function escapeVcardValue(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
function buildVcardString(p) {
  const lines = ["BEGIN:VCARD", "VERSION:3.0", `FN:${escapeVcardValue(p.name)}`];
  if (p.phone?.trim()) lines.push(`TEL:${p.phone.trim().replace(/\s/g, "")}`);
  if (p.email?.trim()) lines.push(`EMAIL:${p.email.trim()}`);
  if (p.org?.trim()) lines.push(`ORG:${escapeVcardValue(p.org)}`);
  lines.push("END:VCARD");
  return lines.join("\r\n");
}
function buildMailtoString(p) {
  const email = p.email.trim();
  const params = new URLSearchParams();
  if (p.subject?.trim()) params.set("subject", p.subject.trim());
  if (p.body?.trim()) params.set("body", p.body.trim());
  const qs = params.toString();
  return qs ? `mailto:${email}?${qs}` : `mailto:${email}`;
}
function buildSmsString(p) {
  const phone = p.phone.trim().replace(/\s/g, "");
  if (p.body?.trim()) {
    return `sms:${phone}?body=${encodeURIComponent(p.body.trim())}`;
  }
  return `sms:${phone}`;
}
function buildTelString(phone) {
  return `tel:${phone.trim().replace(/\s/g, "")}`;
}
function buildGeoString(p) {
  return `geo:${p.lat},${p.lng}`;
}
var config = {
  // --- Image Dimensions ---
  imageSize: 1200,
  // Total canvas size (px, square)
  maxImageSize: 2400,
  // Cap for API/style overrides (DoS prevention)
  qrSize: 850,
  // QR code area size (px)
  qrOffsetY: -30,
  // Vertical shift of QR code (negative = up)
  qrMargin: 30,
  // Inner padding around QR modules
  // --- Colors ---
  colors: {
    background: "#E4E4F4",
    // Canvas background (lavender)
    dotsStart: "#2B5A8C",
    // QR dot gradient start (dark blue)
    dotsEnd: "#1B6B4A",
    // QR dot gradient end (dark green)
    corners: "#2B4C7E",
    // Corner marker color (dark navy)
    text: "#3A3A50"
    // Password text color
  },
  // --- QR Dot Style ---
  // Options: 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'square'
  dotsType: "rounded",
  // Gradient direction in radians (0 = left→right, π/4 = diagonal ↘)
  dotsGradientRotation: Math.PI / 4,
  // --- Corner Markers ---
  // Outer square options: 'square' | 'extra-rounded' | 'dot'
  cornersSquareType: "extra-rounded",
  // Inner dot options: 'square' | 'dot'
  cornersDotType: "dot",
  // --- Info Text below QR ---
  showInfoInImage: true,
  // Render SSID + password below the QR code
  fontSize: 32,
  fontFamily: '"SF Mono", "Menlo", "Consolas", monospace',
  textTemplateSsid: "Network: {ssid}",
  textTemplatePassword: "Password: {password}"
};
var resolveStyle = (overrides) => {
  const s = {};
  const requestedSize = s.imageSize ?? config.imageSize;
  const imageSize = Math.min(
    Math.max(100, Number(requestedSize) || config.imageSize),
    config.maxImageSize
  );
  return {
    imageSize,
    qrSize: Math.round(imageSize * (config.qrSize / config.imageSize)),
    qrOffsetY: Math.round(imageSize * (config.qrOffsetY / config.imageSize)),
    qrMargin: s.qrMargin ?? config.qrMargin,
    colorBackground: s.colorBackground ?? config.colors.background,
    colorDotsStart: s.colorDotsStart ?? config.colors.dotsStart,
    colorDotsEnd: s.colorDotsEnd ?? config.colors.dotsEnd,
    colorCorners: s.colorCorners ?? config.colors.corners,
    colorText: s.colorText ?? config.colors.text,
    dotsType: s.dotsType ?? config.dotsType,
    dotsGradientRotation: config.dotsGradientRotation,
    cornersSquareType: s.cornersSquareType ?? config.cornersSquareType,
    cornersDotType: s.cornersDotType ?? config.cornersDotType,
    showInfoInImage: s.showInfoInImage === false ? false : s.showInfoInImage ?? config.showInfoInImage,
    fontSize: config.fontSize,
    fontFamily: config.fontFamily,
    textTemplateSsid: config.textTemplateSsid,
    textTemplatePassword: config.textTemplatePassword
  };
};
function buildLabelLines(type, payload) {
  const resolved = resolveStyle();
  if (type === "wifi") {
    const p = payload;
    return [
      resolved.textTemplateSsid.replace("{ssid}", p.ssid),
      ...p.password ? [resolved.textTemplatePassword.replace("{password}", p.password)] : []
    ];
  }
  if (type === "url") return [payload.url];
  if (type === "text") {
    const firstLine = payload.text.split(/\r?\n/)[0]?.trim() || "";
    return firstLine ? [firstLine] : [];
  }
  if (type === "vcard") return [payload.name];
  if (type === "email") return [payload.email];
  if (type === "sms" || type === "tel") return [payload.phone];
  if (type === "geo") {
    const p = payload;
    return [`${p.lat}, ${p.lng}`];
  }
  return [];
}
function buildQrPayload(type, payload) {
  let data;
  const labelLines = buildLabelLines(type, payload);
  let filename;
  if (type === "wifi") {
    const p = payload;
    const cfg = { ...p };
    data = buildWifiString(cfg);
    filename = p.ssid.replace(/[^a-zA-Z0-9_-]/g, "_");
  } else if (type === "url") {
    const p = payload;
    data = p.url;
    try {
      const u = new URL(p.url);
      filename = u.hostname.replace(/[^a-zA-Z0-9_-]/g, "_") || "url";
    } catch {
      filename = "url";
    }
  } else if (type === "text") {
    const p = payload;
    data = p.text;
    const firstLine = p.text.split(/\r?\n/)[0]?.slice(0, 30) || "text";
    filename = firstLine.replace(/[^a-zA-Z0-9_-]/g, "_") || "text";
  } else if (type === "vcard") {
    const p = payload;
    const name = p.name || "Contact";
    data = buildVcardString({
      name,
      phone: p.phone || void 0,
      email: p.email || void 0,
      org: p.org || void 0
    });
    filename = name.replace(/[^a-zA-Z0-9_-]/g, "_") || "vcard";
  } else if (type === "email") {
    const p = payload;
    data = buildMailtoString({
      email: p.email,
      subject: p.subject || void 0,
      body: p.body || void 0
    });
    filename = p.email.replace(/[^a-zA-Z0-9_.@+-]/g, "_") || "email";
  } else if (type === "sms") {
    const p = payload;
    data = buildSmsString({ phone: p.phone, body: p.body || void 0 });
    filename = `sms_${p.phone.replace(/\D/g, "").slice(-8)}` || "sms";
  } else if (type === "tel") {
    const p = payload;
    data = buildTelString(p.phone);
    filename = `tel_${p.phone.replace(/\D/g, "").slice(-8)}` || "tel";
  } else {
    const p = payload;
    data = buildGeoString(p);
    filename = `geo_${p.lat}_${p.lng}`.replace(/[^a-zA-Z0-9_.-]/g, "_") || "geo";
  }
  return { data, labelLines, filename };
}
var QR_TYPE_LABELS = {
  email: "Email",
  geo: "Location",
  sms: "SMS",
  tel: "Phone",
  text: "Text",
  url: "URL",
  vcard: "Contact (vCard)",
  wifi: "Wi‑Fi"
};
[
  { value: "email", label: QR_TYPE_LABELS.email },
  { value: "geo", label: QR_TYPE_LABELS.geo },
  { value: "sms", label: QR_TYPE_LABELS.sms },
  { value: "tel", label: QR_TYPE_LABELS.tel },
  { value: "text", label: QR_TYPE_LABELS.text },
  { value: "url", label: QR_TYPE_LABELS.url },
  { value: "vcard", label: QR_TYPE_LABELS.vcard },
  { value: "wifi", label: QR_TYPE_LABELS.wifi }
];
globalThis.self = globalThis;
const QR_TYPE_CHOICES = [
  { value: "email", label: "Email" },
  { value: "geo", label: "Location" },
  { value: "sms", label: "SMS" },
  { value: "tel", label: "Phone" },
  { value: "text", label: "Text" },
  { value: "url", label: "URL" },
  { value: "vcard", label: "Contact (vCard)" },
  { value: "wifi", label: "Wi‑Fi" }
];
const QR_TYPES_ORDERED = QR_TYPE_CHOICES.map((c) => c.value);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[[type]]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const colorMode = useColorMode();
    const DEFAULT_TYPE = QR_TYPES_ORDERED[0];
    const qrType = ref(DEFAULT_TYPE);
    watch(
      qrType,
      (t) => {
        const path = `/${t}`;
        if (route.path !== path) {
          navigateTo(path, { replace: true });
        }
      },
      { flush: "post" }
    );
    watch(
      () => route.path,
      () => {
        const tParam = route.params.type;
        const s = typeof tParam === "string" ? tParam : Array.isArray(tParam) ? tParam[0] : "";
        const t = s && QR_TYPES_ORDERED.includes(s) ? s : DEFAULT_TYPE;
        if (qrType.value !== t) qrType.value = t;
      },
      { immediate: true }
    );
    const urlContent = ref("");
    const textContent = ref("");
    const vcardName = ref("");
    const vcardPhone = ref("");
    const vcardEmail = ref("");
    const vcardOrg = ref("");
    const emailAddress = ref("");
    const emailSubject = ref("");
    const emailBody = ref("");
    const smsPhone = ref("");
    const smsBody = ref("");
    const telPhone = ref("");
    const geoLat = ref("");
    const geoLng = ref("");
    const ssid = ref("");
    const encryption = ref("WPA");
    const password = ref("");
    const showPassword = ref(false);
    const isHidden = ref(false);
    const colorBackground = ref("#E4E4F4");
    const colorDotsStart = ref("#2B5A8C");
    const colorDotsEnd = ref("#1B6B4A");
    const colorCorners = ref("#2B4C7E");
    const colorText = ref("#3A3A50");
    const dotsType = ref("rounded");
    const cornersSquareType = ref("extra-rounded");
    const cornersDotType = ref("dot");
    const imageSize = ref(1200);
    const qrMargin = ref(30);
    const qrMarginArr = computed({
      get: () => [qrMargin.value],
      set: (v) => {
        qrMargin.value = v[0];
      }
    });
    const showInfoInImage = ref(true);
    const generating = ref(false);
    const previewUrl = ref(null);
    const blobRef = ref(null);
    const generatedFilename = ref("");
    const errorMessage = ref("");
    function getCurrentPayload() {
      const t = qrType.value;
      if (t === "wifi") {
        return {
          ssid: ssid.value.trim(),
          password: encryption.value !== "nopass" ? password.value : void 0,
          encryption: encryption.value,
          isHidden: isHidden.value
        };
      }
      if (t === "url") return { url: urlContent.value.trim() };
      if (t === "text") return { text: textContent.value.trim() };
      if (t === "vcard") {
        return {
          name: vcardName.value.trim() || "Contact",
          phone: vcardPhone.value.trim() || void 0,
          email: vcardEmail.value.trim() || void 0,
          org: vcardOrg.value.trim() || void 0
        };
      }
      if (t === "email") {
        return {
          email: emailAddress.value.trim(),
          subject: emailSubject.value.trim() || void 0,
          body: emailBody.value.trim() || void 0
        };
      }
      if (t === "sms")
        return {
          phone: smsPhone.value.trim(),
          body: smsBody.value.trim() || void 0
        };
      if (t === "tel") return { phone: telPhone.value.trim() };
      return {
        lat: Number(geoLat.value) || 0,
        lng: Number(geoLng.value) || 0
      };
    }
    const emptyStateHint = computed(() => {
      const hints = {
        wifi: "Fill in the network details",
        url: "Enter a URL",
        text: "Enter some text",
        vcard: "Enter contact details",
        email: "Enter an email address",
        sms: "Enter a phone number",
        tel: "Enter a phone number",
        geo: "Enter latitude and longitude"
      };
      return hints[qrType.value] || "";
    });
    const canGenerate = computed(() => {
      if (qrType.value === "wifi") {
        if (!ssid.value.trim()) return false;
        if (encryption.value !== "nopass" && !password.value) return false;
        return true;
      }
      if (qrType.value === "url") return urlContent.value.trim().length > 0;
      if (qrType.value === "text") return textContent.value.trim().length > 0;
      if (qrType.value === "vcard") {
        return !!vcardName.value.trim() || !!vcardPhone.value.trim() || !!vcardEmail.value.trim();
      }
      if (qrType.value === "email") return emailAddress.value.trim().length > 0;
      if (qrType.value === "sms" || qrType.value === "tel")
        return (qrType.value === "sms" ? smsPhone : telPhone).value.trim().length > 0;
      if (qrType.value === "geo")
        return geoLat.value.trim().length > 0 && geoLng.value.trim().length > 0;
      return false;
    });
    async function generate() {
      if (!canGenerate.value) return;
      generating.value = true;
      errorMessage.value = "";
      try {
        const body = {
          type: qrType.value,
          style: {
            colorBackground: colorBackground.value,
            colorDotsStart: colorDotsStart.value,
            colorDotsEnd: colorDotsEnd.value,
            colorCorners: colorCorners.value,
            colorText: colorText.value,
            dotsType: dotsType.value,
            cornersSquareType: cornersSquareType.value,
            cornersDotType: cornersDotType.value,
            imageSize: imageSize.value,
            qrMargin: qrMargin.value,
            showInfoInImage: Boolean(showInfoInImage.value)
          }
        };
        if (qrType.value === "wifi") {
          body.ssid = ssid.value.trim();
          body.encryption = encryption.value;
          body.password = encryption.value !== "nopass" ? password.value : void 0;
          body.isHidden = isHidden.value;
        } else if (qrType.value === "url") {
          body.url = urlContent.value.trim();
        } else if (qrType.value === "text") {
          body.text = textContent.value.trim();
        } else if (qrType.value === "vcard") {
          body.vcardName = vcardName.value.trim();
          body.vcardPhone = vcardPhone.value.trim();
          body.vcardEmail = vcardEmail.value.trim();
          body.vcardOrg = vcardOrg.value.trim();
        } else if (qrType.value === "email") {
          body.email = emailAddress.value.trim();
          body.emailSubject = emailSubject.value.trim();
          body.emailBody = emailBody.value.trim();
        } else if (qrType.value === "sms") {
          body.smsPhone = smsPhone.value.trim();
          body.smsBody = smsBody.value.trim();
        } else if (qrType.value === "tel") {
          body.telPhone = telPhone.value.trim();
        } else if (qrType.value === "geo") {
          body.geoLat = Number(geoLat.value);
          body.geoLng = Number(geoLng.value);
        }
        const response = await $fetch("/api/generate", {
          method: "POST",
          body,
          responseType: "blob"
        });
        if (previewUrl.value) {
          URL.revokeObjectURL(previewUrl.value);
        }
        blobRef.value = response;
        previewUrl.value = URL.createObjectURL(response);
        const payload = getCurrentPayload();
        generatedFilename.value = buildQrPayload(qrType.value, payload).filename;
      } catch (err) {
        errorMessage.value = err?.data?.statusMessage || err?.message || "Generation failed";
      } finally {
        generating.value = false;
      }
    }
    function downloadFilename() {
      return `${generatedFilename.value || "qr"}.png`;
    }
    function downloadImage() {
      if (!blobRef.value || !previewUrl.value) return;
      const a = (void 0).createElement("a");
      a.href = previewUrl.value;
      a.download = downloadFilename();
      a.click();
    }
    function randomizeColors() {
      const scheme = generateColorScheme();
      colorBackground.value = scheme.background;
      colorDotsStart.value = scheme.dotsStart;
      colorDotsEnd.value = scheme.dotsEnd;
      colorCorners.value = scheme.corners;
      colorText.value = scheme.text;
    }
    let debounceTimer = null;
    watch(
      [
        qrType,
        ssid,
        encryption,
        password,
        isHidden,
        urlContent,
        textContent,
        vcardName,
        vcardPhone,
        vcardEmail,
        vcardOrg,
        emailAddress,
        emailSubject,
        emailBody,
        smsPhone,
        smsBody,
        telPhone,
        geoLat,
        geoLng,
        colorBackground,
        colorDotsStart,
        colorDotsEnd,
        colorCorners,
        colorText,
        dotsType,
        cornersSquareType,
        cornersDotType,
        imageSize,
        qrMargin,
        showInfoInImage
      ],
      () => {
        if (!previewUrl.value) return;
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => generate(), 300);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$r;
      const _component_Button = _sfc_main$k;
      const _component_Label = _sfc_main$j;
      const _component_Select = _sfc_main$i;
      const _component_SelectTrigger = _sfc_main$9;
      const _component_SelectValue = _sfc_main$8;
      const _component_SelectContent = _sfc_main$h;
      const _component_SelectItem = _sfc_main$f;
      const _component_Input = _sfc_main$7;
      const _component_Checkbox = _sfc_main$6;
      const _component_TooltipProvider = _sfc_main$3;
      const _component_Tooltip = _sfc_main$5;
      const _component_TooltipTrigger = _sfc_main$2;
      const _component_TooltipContent = _sfc_main$4;
      const _component_Slider = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-muted flex items-center justify-center p-4 lg:p-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, { class: "w-full max-w-7xl shadow-lg rounded-xl relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: "ghost",
              size: "icon",
              class: "absolute top-3 right-3 h-8 w-8 z-10",
              onClick: ($event) => unref(colorMode).preference = unref(colorMode).value === "dark" ? "light" : "dark"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Sun), { class: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Moon), { class: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Sun), { class: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
                    createVNode(unref(Moon), { class: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"${_scopeId}><div class="p-5 lg:p-6 space-y-4 border-b md:border-b-0 md:border-r border-border flex flex-col"${_scopeId}><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, { for: "qrType" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`QR type`);
                } else {
                  return [
                    createTextVNode("QR type")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: qrType.value,
              "onUpdate:modelValue": ($event) => qrType.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { id: "qrType" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, { placeholder: "Choose type" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue, { placeholder: "Choose type" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(QR_TYPES_ORDERED), (t) => {
                          _push4(ssrRenderComponent(_component_SelectItem, {
                            key: t,
                            value: t
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(QR_TYPE_LABELS)[t])}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(QR_TYPE_LABELS)[t]), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(QR_TYPES_ORDERED), (t) => {
                            return openBlock(), createBlock(_component_SelectItem, {
                              key: t,
                              value: t
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(QR_TYPE_LABELS)[t]), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { id: "qrType" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue, { placeholder: "Choose type" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(QR_TYPES_ORDERED), (t) => {
                          return openBlock(), createBlock(_component_SelectItem, {
                            key: t,
                            value: t
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(QR_TYPE_LABELS)[t]), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (qrType.value === "wifi") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>Network</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "ssid" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`SSID (network name)`);
                  } else {
                    return [
                      createTextVNode("SSID (network name)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "ssid",
                modelValue: ssid.value,
                "onUpdate:modelValue": ($event) => ssid.value = $event,
                placeholder: "e.g. MyNetwork",
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "encryption" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Encryption`);
                  } else {
                    return [
                      createTextVNode("Encryption")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Select, {
                modelValue: encryption.value,
                "onUpdate:modelValue": ($event) => encryption.value = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_SelectTrigger, { id: "encryption" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_SelectValue, { placeholder: "Choose encryption" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_SelectValue, { placeholder: "Choose encryption" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_SelectContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_SelectItem, { value: "WPA" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`WPA / WPA2 / WPA3`);
                              } else {
                                return [
                                  createTextVNode("WPA / WPA2 / WPA3")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_SelectItem, { value: "WEP" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`WEP`);
                              } else {
                                return [
                                  createTextVNode("WEP")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_SelectItem, { value: "nopass" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`None (open)`);
                              } else {
                                return [
                                  createTextVNode("None (open)")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_SelectItem, { value: "WPA" }, {
                              default: withCtx(() => [
                                createTextVNode("WPA / WPA2 / WPA3")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "WEP" }, {
                              default: withCtx(() => [
                                createTextVNode("WEP")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "nopass" }, {
                              default: withCtx(() => [
                                createTextVNode("None (open)")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_SelectTrigger, { id: "encryption" }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectValue, { placeholder: "Choose encryption" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectItem, { value: "WPA" }, {
                            default: withCtx(() => [
                              createTextVNode("WPA / WPA2 / WPA3")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "WEP" }, {
                            default: withCtx(() => [
                              createTextVNode("WEP")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "nopass" }, {
                            default: withCtx(() => [
                              createTextVNode("None (open)")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (encryption.value !== "nopass") {
                _push2(`<div class="space-y-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Label, { for: "password" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Password`);
                    } else {
                      return [
                        createTextVNode("Password")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="relative"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Input, {
                  id: "password",
                  modelValue: password.value,
                  "onUpdate:modelValue": ($event) => password.value = $event,
                  type: showPassword.value ? "text" : "password",
                  placeholder: "Wi‑Fi password",
                  class: "pr-10"
                }, null, _parent2, _scopeId));
                _push2(`<button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"${_scopeId}>`);
                if (!showPassword.value) {
                  _push2(ssrRenderComponent(unref(Eye), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(unref(EyeOff), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                }
                _push2(`</button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Checkbox, {
                id: "hidden",
                modelValue: isHidden.value,
                "onUpdate:modelValue": ($event) => isHidden.value = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Label, {
                for: "hidden",
                class: "text-sm font-normal cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Hidden network `);
                  } else {
                    return [
                      createTextVNode(" Hidden network ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else if (qrType.value === "url") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>URL</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "url" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Address`);
                  } else {
                    return [
                      createTextVNode("Address")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "url",
                modelValue: urlContent.value,
                "onUpdate:modelValue": ($event) => urlContent.value = $event,
                type: "url",
                placeholder: "https://example.com"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else if (qrType.value === "text") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>Text</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "text" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Content`);
                  } else {
                    return [
                      createTextVNode("Content")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<textarea id="text" placeholder="Any text for the QR code …" rows="5" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"${_scopeId}>${ssrInterpolate(textContent.value)}</textarea></div><!--]-->`);
            } else if (qrType.value === "vcard") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>Contact</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "vcardName" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Name`);
                  } else {
                    return [
                      createTextVNode("Name")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "vcardName",
                modelValue: vcardName.value,
                "onUpdate:modelValue": ($event) => vcardName.value = $event,
                placeholder: "John Doe"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "vcardPhone" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Phone`);
                  } else {
                    return [
                      createTextVNode("Phone")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "vcardPhone",
                modelValue: vcardPhone.value,
                "onUpdate:modelValue": ($event) => vcardPhone.value = $event,
                type: "tel",
                placeholder: "+1 234 567890"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "vcardEmail" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Email`);
                  } else {
                    return [
                      createTextVNode("Email")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "vcardEmail",
                modelValue: vcardEmail.value,
                "onUpdate:modelValue": ($event) => vcardEmail.value = $event,
                type: "email",
                placeholder: "john@example.com"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "vcardOrg" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Organization (optional)`);
                  } else {
                    return [
                      createTextVNode("Organization (optional)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "vcardOrg",
                modelValue: vcardOrg.value,
                "onUpdate:modelValue": ($event) => vcardOrg.value = $event,
                placeholder: "Acme Inc."
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else if (qrType.value === "email") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>Email</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "email" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Email address`);
                  } else {
                    return [
                      createTextVNode("Email address")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "email",
                modelValue: emailAddress.value,
                "onUpdate:modelValue": ($event) => emailAddress.value = $event,
                type: "email",
                placeholder: "recipient@example.com"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "emailSubject" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Subject (optional)`);
                  } else {
                    return [
                      createTextVNode("Subject (optional)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "emailSubject",
                modelValue: emailSubject.value,
                "onUpdate:modelValue": ($event) => emailSubject.value = $event,
                placeholder: "Subject line"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "emailBody" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Message (optional)`);
                  } else {
                    return [
                      createTextVNode("Message (optional)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<textarea id="emailBody" placeholder="Pre-filled message …" rows="3" class="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"${_scopeId}>${ssrInterpolate(emailBody.value)}</textarea></div><!--]-->`);
            } else if (qrType.value === "sms") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>SMS</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "smsPhone" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Phone number`);
                  } else {
                    return [
                      createTextVNode("Phone number")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "smsPhone",
                modelValue: smsPhone.value,
                "onUpdate:modelValue": ($event) => smsPhone.value = $event,
                type: "tel",
                placeholder: "+1 234 567890"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "smsBody" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Message (optional)`);
                  } else {
                    return [
                      createTextVNode("Message (optional)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "smsBody",
                modelValue: smsBody.value,
                "onUpdate:modelValue": ($event) => smsBody.value = $event,
                placeholder: "Pre-filled message"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else if (qrType.value === "tel") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>Phone</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "telPhone" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Phone number`);
                  } else {
                    return [
                      createTextVNode("Phone number")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "telPhone",
                modelValue: telPhone.value,
                "onUpdate:modelValue": ($event) => telPhone.value = $event,
                type: "tel",
                placeholder: "+1 234 567890"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else if (qrType.value === "geo") {
              _push2(`<!--[--><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>Location</h2><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "geoLat" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Latitude`);
                  } else {
                    return [
                      createTextVNode("Latitude")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "geoLat",
                modelValue: geoLat.value,
                "onUpdate:modelValue": ($event) => geoLat.value = $event,
                type: "text",
                inputmode: "decimal",
                placeholder: "52.520008"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, { for: "geoLng" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Longitude`);
                  } else {
                    return [
                      createTextVNode("Longitude")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "geoLng",
                modelValue: geoLng.value,
                "onUpdate:modelValue": ($event) => geoLng.value = $event,
                type: "text",
                inputmode: "decimal",
                placeholder: "13.404954"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex-1"${_scopeId}></div>`);
            if (errorMessage.value) {
              _push2(`<p class="text-sm text-destructive"${_scopeId}>${ssrInterpolate(errorMessage.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Button, {
              class: "w-full",
              size: "lg",
              disabled: !canGenerate.value || generating.value,
              onClick: generate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (generating.value) {
                    _push3(ssrRenderComponent(unref(Loader2), { class: "mr-2 h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(QrCode), { class: "mr-2 h-4 w-4" }, null, _parent3, _scopeId2));
                  }
                  _push3(` ${ssrInterpolate(generating.value ? "Generating..." : "Generate QR code")}`);
                } else {
                  return [
                    generating.value ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "mr-2 h-4 w-4 animate-spin"
                    })) : (openBlock(), createBlock(unref(QrCode), {
                      key: 1,
                      class: "mr-2 h-4 w-4"
                    })),
                    createTextVNode(" " + toDisplayString(generating.value ? "Generating..." : "Generate QR code"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="p-5 lg:p-6 flex flex-col items-center justify-center min-h-[350px] border-b md:border-b-0 md:border-r border-border gap-4"${_scopeId}>`);
            if (previewUrl.value) {
              _push2(`<!--[--><img${ssrRenderAttr("src", previewUrl.value)} alt="QR code preview" class="w-full max-w-xs rounded-lg shadow-md"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                variant: "outline",
                onClick: downloadImage
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Download), { class: "mr-2 h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(` Download PNG `);
                  } else {
                    return [
                      createVNode(unref(Download), { class: "mr-2 h-4 w-4" }),
                      createTextVNode(" Download PNG ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<div class="flex flex-col items-center gap-3 text-muted-foreground"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(QrCode), { class: "h-16 w-16 opacity-20" }, null, _parent2, _scopeId));
              _push2(`<p class="text-sm text-center"${_scopeId}>${ssrInterpolate(emptyStateHint.value)} and click<br${_scopeId}><strong${_scopeId}>Generate QR code</strong>. </p></div>`);
            }
            _push2(`</div><div class="p-5 lg:p-6 space-y-4 md:col-span-2 lg:col-span-1"${_scopeId}><h2 class="text-lg font-semibold tracking-tight"${_scopeId}>Style</h2><div class="space-y-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, { class: "text-sm text-muted-foreground" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Colors`);
                } else {
                  return [
                    createTextVNode("Colors")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipProvider, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Tooltip, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, {
                                variant: "ghost",
                                size: "icon",
                                class: "h-7 w-7",
                                onClick: randomizeColors
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Shuffle), { class: "h-3.5 w-3.5" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Shuffle), { class: "h-3.5 w-3.5" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, {
                                  variant: "ghost",
                                  size: "icon",
                                  class: "h-7 w-7",
                                  onClick: randomizeColors
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Shuffle), { class: "h-3.5 w-3.5" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TooltipContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>Random color scheme</p>`);
                            } else {
                              return [
                                createVNode("p", null, "Random color scheme")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, {
                                variant: "ghost",
                                size: "icon",
                                class: "h-7 w-7",
                                onClick: randomizeColors
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Shuffle), { class: "h-3.5 w-3.5" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TooltipContent, null, {
                            default: withCtx(() => [
                              createVNode("p", null, "Random color scheme")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Tooltip, null, {
                      default: withCtx(() => [
                        createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              variant: "ghost",
                              size: "icon",
                              class: "h-7 w-7",
                              onClick: randomizeColors
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Shuffle), { class: "h-3.5 w-3.5" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TooltipContent, null, {
                          default: withCtx(() => [
                            createVNode("p", null, "Random color scheme")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-5 gap-2"${_scopeId}><div class="space-y-1"${_scopeId}><label for="colorBg" class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer" style="${ssrRenderStyle({ backgroundColor: colorBackground.value })}"${_scopeId}><input id="colorBg"${ssrRenderAttr("value", colorBackground.value)} type="color" class="sr-only"${_scopeId}></label><span class="text-[10px] text-muted-foreground text-center block"${_scopeId}>Background</span></div><div class="space-y-1"${_scopeId}><label for="colorDs" class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer" style="${ssrRenderStyle({ backgroundColor: colorDotsStart.value })}"${_scopeId}><input id="colorDs"${ssrRenderAttr("value", colorDotsStart.value)} type="color" class="sr-only"${_scopeId}></label><span class="text-[10px] text-muted-foreground text-center block"${_scopeId}>Dots 1</span></div><div class="space-y-1"${_scopeId}><label for="colorDe" class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer" style="${ssrRenderStyle({ backgroundColor: colorDotsEnd.value })}"${_scopeId}><input id="colorDe"${ssrRenderAttr("value", colorDotsEnd.value)} type="color" class="sr-only"${_scopeId}></label><span class="text-[10px] text-muted-foreground text-center block"${_scopeId}>Dots 2</span></div><div class="space-y-1"${_scopeId}><label for="colorCo" class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer" style="${ssrRenderStyle({ backgroundColor: colorCorners.value })}"${_scopeId}><input id="colorCo"${ssrRenderAttr("value", colorCorners.value)} type="color" class="sr-only"${_scopeId}></label><span class="text-[10px] text-muted-foreground text-center block"${_scopeId}>Corners</span></div><div class="space-y-1"${_scopeId}><label for="colorTx" class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer" style="${ssrRenderStyle({ backgroundColor: colorText.value })}"${_scopeId}><input id="colorTx"${ssrRenderAttr("value", colorText.value)} type="color" class="sr-only"${_scopeId}></label><span class="text-[10px] text-muted-foreground text-center block"${_scopeId}>Text</span></div></div></div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, { for: "dotsType" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Dot style`);
                } else {
                  return [
                    createTextVNode("Dot style")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: dotsType.value,
              "onUpdate:modelValue": ($event) => dotsType.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { id: "dotsType" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "rounded" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Rounded`);
                            } else {
                              return [
                                createTextVNode("Rounded")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "dots" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dots`);
                            } else {
                              return [
                                createTextVNode("Dots")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "extra-rounded" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Extra Rounded`);
                            } else {
                              return [
                                createTextVNode("Extra Rounded")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "classy" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Classy`);
                            } else {
                              return [
                                createTextVNode("Classy")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "classy-rounded" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Classy Rounded`);
                            } else {
                              return [
                                createTextVNode("Classy Rounded")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "square" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Square`);
                            } else {
                              return [
                                createTextVNode("Square")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectItem, { value: "rounded" }, {
                            default: withCtx(() => [
                              createTextVNode("Rounded")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "dots" }, {
                            default: withCtx(() => [
                              createTextVNode("Dots")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "extra-rounded" }, {
                            default: withCtx(() => [
                              createTextVNode("Extra Rounded")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "classy" }, {
                            default: withCtx(() => [
                              createTextVNode("Classy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "classy-rounded" }, {
                            default: withCtx(() => [
                              createTextVNode("Classy Rounded")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "square" }, {
                            default: withCtx(() => [
                              createTextVNode("Square")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { id: "dotsType" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectItem, { value: "rounded" }, {
                          default: withCtx(() => [
                            createTextVNode("Rounded")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "dots" }, {
                          default: withCtx(() => [
                            createTextVNode("Dots")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "extra-rounded" }, {
                          default: withCtx(() => [
                            createTextVNode("Extra Rounded")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "classy" }, {
                          default: withCtx(() => [
                            createTextVNode("Classy")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "classy-rounded" }, {
                          default: withCtx(() => [
                            createTextVNode("Classy Rounded")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "square" }, {
                          default: withCtx(() => [
                            createTextVNode("Square")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, { for: "cornersSquare" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Outer corners`);
                } else {
                  return [
                    createTextVNode("Outer corners")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: cornersSquareType.value,
              "onUpdate:modelValue": ($event) => cornersSquareType.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { id: "cornersSquare" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "extra-rounded" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Extra Rounded`);
                            } else {
                              return [
                                createTextVNode("Extra Rounded")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "square" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Square`);
                            } else {
                              return [
                                createTextVNode("Square")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "dot" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dot`);
                            } else {
                              return [
                                createTextVNode("Dot")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectItem, { value: "extra-rounded" }, {
                            default: withCtx(() => [
                              createTextVNode("Extra Rounded")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "square" }, {
                            default: withCtx(() => [
                              createTextVNode("Square")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "dot" }, {
                            default: withCtx(() => [
                              createTextVNode("Dot")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { id: "cornersSquare" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectItem, { value: "extra-rounded" }, {
                          default: withCtx(() => [
                            createTextVNode("Extra Rounded")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "square" }, {
                          default: withCtx(() => [
                            createTextVNode("Square")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "dot" }, {
                          default: withCtx(() => [
                            createTextVNode("Dot")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, { for: "cornersDot" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Inner corners`);
                } else {
                  return [
                    createTextVNode("Inner corners")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: cornersDotType.value,
              "onUpdate:modelValue": ($event) => cornersDotType.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { id: "cornersDot" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "dot" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dot`);
                            } else {
                              return [
                                createTextVNode("Dot")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "square" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Square`);
                            } else {
                              return [
                                createTextVNode("Square")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectItem, { value: "dot" }, {
                            default: withCtx(() => [
                              createTextVNode("Dot")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "square" }, {
                            default: withCtx(() => [
                              createTextVNode("Square")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { id: "cornersDot" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectItem, { value: "dot" }, {
                          default: withCtx(() => [
                            createTextVNode("Dot")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "square" }, {
                          default: withCtx(() => [
                            createTextVNode("Square")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, { for: "imageSize" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Image size`);
                } else {
                  return [
                    createTextVNode("Image size")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Select, {
              modelValue: imageSize.value,
              "onUpdate:modelValue": ($event) => imageSize.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectTrigger, { id: "imageSize" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SelectContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectItem, { value: 600 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`600 px`);
                            } else {
                              return [
                                createTextVNode("600 px")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: 900 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`900 px`);
                            } else {
                              return [
                                createTextVNode("900 px")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: 1200 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`1200 px`);
                            } else {
                              return [
                                createTextVNode("1200 px")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: 1500 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`1500 px`);
                            } else {
                              return [
                                createTextVNode("1500 px")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectItem, { value: 600 }, {
                            default: withCtx(() => [
                              createTextVNode("600 px")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: 900 }, {
                            default: withCtx(() => [
                              createTextVNode("900 px")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: 1200 }, {
                            default: withCtx(() => [
                              createTextVNode("1200 px")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: 1500 }, {
                            default: withCtx(() => [
                              createTextVNode("1500 px")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectTrigger, { id: "imageSize" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectItem, { value: 600 }, {
                          default: withCtx(() => [
                            createTextVNode("600 px")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: 900 }, {
                          default: withCtx(() => [
                            createTextVNode("900 px")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: 1200 }, {
                          default: withCtx(() => [
                            createTextVNode("1200 px")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: 1500 }, {
                          default: withCtx(() => [
                            createTextVNode("1500 px")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Padding: ${ssrInterpolate(qrMargin.value)}`);
                } else {
                  return [
                    createTextVNode("Padding: " + toDisplayString(qrMargin.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Slider, {
              modelValue: qrMarginArr.value,
              "onUpdate:modelValue": ($event) => qrMarginArr.value = $event,
              min: 0,
              max: 80,
              step: 1,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkbox, {
              id: "showInfo",
              modelValue: showInfoInImage.value,
              "onUpdate:modelValue": ($event) => showInfoInImage.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Label, {
              for: "showInfo",
              class: "text-sm font-normal cursor-pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Show info text`);
                } else {
                  return [
                    createTextVNode("Show info text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(_component_Button, {
                variant: "ghost",
                size: "icon",
                class: "absolute top-3 right-3 h-8 w-8 z-10",
                onClick: ($event) => unref(colorMode).preference = unref(colorMode).value === "dark" ? "light" : "dark"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Sun), { class: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
                  createVNode(unref(Moon), { class: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }, [
                createVNode("div", { class: "p-5 lg:p-6 space-y-4 border-b md:border-b-0 md:border-r border-border flex flex-col" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(_component_Label, { for: "qrType" }, {
                      default: withCtx(() => [
                        createTextVNode("QR type")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: qrType.value,
                      "onUpdate:modelValue": ($event) => qrType.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, { id: "qrType" }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue, { placeholder: "Choose type" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(QR_TYPES_ORDERED), (t) => {
                              return openBlock(), createBlock(_component_SelectItem, {
                                key: t,
                                value: t
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(QR_TYPE_LABELS)[t]), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  qrType.value === "wifi" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "Network"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "ssid" }, {
                        default: withCtx(() => [
                          createTextVNode("SSID (network name)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "ssid",
                        modelValue: ssid.value,
                        "onUpdate:modelValue": ($event) => ssid.value = $event,
                        placeholder: "e.g. MyNetwork",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "encryption" }, {
                        default: withCtx(() => [
                          createTextVNode("Encryption")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: encryption.value,
                        "onUpdate:modelValue": ($event) => encryption.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, { id: "encryption" }, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Choose encryption" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "WPA" }, {
                                default: withCtx(() => [
                                  createTextVNode("WPA / WPA2 / WPA3")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "WEP" }, {
                                default: withCtx(() => [
                                  createTextVNode("WEP")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "nopass" }, {
                                default: withCtx(() => [
                                  createTextVNode("None (open)")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    encryption.value !== "nopass" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-2"
                    }, [
                      createVNode(_component_Label, { for: "password" }, {
                        default: withCtx(() => [
                          createTextVNode("Password")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_Input, {
                          id: "password",
                          modelValue: password.value,
                          "onUpdate:modelValue": ($event) => password.value = $event,
                          type: showPassword.value ? "text" : "password",
                          placeholder: "Wi‑Fi password",
                          class: "pr-10"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                        createVNode("button", {
                          type: "button",
                          class: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                          onClick: ($event) => showPassword.value = !showPassword.value
                        }, [
                          !showPassword.value ? (openBlock(), createBlock(unref(Eye), {
                            key: 0,
                            class: "h-4 w-4"
                          })) : (openBlock(), createBlock(unref(EyeOff), {
                            key: 1,
                            class: "h-4 w-4"
                          }))
                        ], 8, ["onClick"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_Checkbox, {
                        id: "hidden",
                        modelValue: isHidden.value,
                        "onUpdate:modelValue": ($event) => isHidden.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Label, {
                        for: "hidden",
                        class: "text-sm font-normal cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hidden network ")
                        ]),
                        _: 1
                      })
                    ])
                  ], 64)) : qrType.value === "url" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "URL"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "url" }, {
                        default: withCtx(() => [
                          createTextVNode("Address")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "url",
                        modelValue: urlContent.value,
                        "onUpdate:modelValue": ($event) => urlContent.value = $event,
                        type: "url",
                        placeholder: "https://example.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ], 64)) : qrType.value === "text" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "Text"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "text" }, {
                        default: withCtx(() => [
                          createTextVNode("Content")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode("textarea", {
                        id: "text",
                        "onUpdate:modelValue": ($event) => textContent.value = $event,
                        placeholder: "Any text for the QR code …",
                        rows: "5",
                        class: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, textContent.value]
                      ])
                    ])
                  ], 64)) : qrType.value === "vcard" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "Contact"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "vcardName" }, {
                        default: withCtx(() => [
                          createTextVNode("Name")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "vcardName",
                        modelValue: vcardName.value,
                        "onUpdate:modelValue": ($event) => vcardName.value = $event,
                        placeholder: "John Doe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "vcardPhone" }, {
                        default: withCtx(() => [
                          createTextVNode("Phone")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "vcardPhone",
                        modelValue: vcardPhone.value,
                        "onUpdate:modelValue": ($event) => vcardPhone.value = $event,
                        type: "tel",
                        placeholder: "+1 234 567890"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "vcardEmail" }, {
                        default: withCtx(() => [
                          createTextVNode("Email")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "vcardEmail",
                        modelValue: vcardEmail.value,
                        "onUpdate:modelValue": ($event) => vcardEmail.value = $event,
                        type: "email",
                        placeholder: "john@example.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "vcardOrg" }, {
                        default: withCtx(() => [
                          createTextVNode("Organization (optional)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "vcardOrg",
                        modelValue: vcardOrg.value,
                        "onUpdate:modelValue": ($event) => vcardOrg.value = $event,
                        placeholder: "Acme Inc."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ], 64)) : qrType.value === "email" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "Email"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "email" }, {
                        default: withCtx(() => [
                          createTextVNode("Email address")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "email",
                        modelValue: emailAddress.value,
                        "onUpdate:modelValue": ($event) => emailAddress.value = $event,
                        type: "email",
                        placeholder: "recipient@example.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "emailSubject" }, {
                        default: withCtx(() => [
                          createTextVNode("Subject (optional)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "emailSubject",
                        modelValue: emailSubject.value,
                        "onUpdate:modelValue": ($event) => emailSubject.value = $event,
                        placeholder: "Subject line"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "emailBody" }, {
                        default: withCtx(() => [
                          createTextVNode("Message (optional)")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode("textarea", {
                        id: "emailBody",
                        "onUpdate:modelValue": ($event) => emailBody.value = $event,
                        placeholder: "Pre-filled message …",
                        rows: "3",
                        class: "flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, emailBody.value]
                      ])
                    ])
                  ], 64)) : qrType.value === "sms" ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "SMS"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "smsPhone" }, {
                        default: withCtx(() => [
                          createTextVNode("Phone number")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "smsPhone",
                        modelValue: smsPhone.value,
                        "onUpdate:modelValue": ($event) => smsPhone.value = $event,
                        type: "tel",
                        placeholder: "+1 234 567890"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "smsBody" }, {
                        default: withCtx(() => [
                          createTextVNode("Message (optional)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "smsBody",
                        modelValue: smsBody.value,
                        "onUpdate:modelValue": ($event) => smsBody.value = $event,
                        placeholder: "Pre-filled message"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ], 64)) : qrType.value === "tel" ? (openBlock(), createBlock(Fragment, { key: 6 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "Phone"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "telPhone" }, {
                        default: withCtx(() => [
                          createTextVNode("Phone number")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "telPhone",
                        modelValue: telPhone.value,
                        "onUpdate:modelValue": ($event) => telPhone.value = $event,
                        type: "tel",
                        placeholder: "+1 234 567890"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ], 64)) : qrType.value === "geo" ? (openBlock(), createBlock(Fragment, { key: 7 }, [
                    createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "Location"),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "geoLat" }, {
                        default: withCtx(() => [
                          createTextVNode("Latitude")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "geoLat",
                        modelValue: geoLat.value,
                        "onUpdate:modelValue": ($event) => geoLat.value = $event,
                        type: "text",
                        inputmode: "decimal",
                        placeholder: "52.520008"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_Label, { for: "geoLng" }, {
                        default: withCtx(() => [
                          createTextVNode("Longitude")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        id: "geoLng",
                        modelValue: geoLng.value,
                        "onUpdate:modelValue": ($event) => geoLng.value = $event,
                        type: "text",
                        inputmode: "decimal",
                        placeholder: "13.404954"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ], 64)) : createCommentVNode("", true),
                  createVNode("div", { class: "flex-1" }),
                  errorMessage.value ? (openBlock(), createBlock("p", {
                    key: 8,
                    class: "text-sm text-destructive"
                  }, toDisplayString(errorMessage.value), 1)) : createCommentVNode("", true),
                  createVNode(_component_Button, {
                    class: "w-full",
                    size: "lg",
                    disabled: !canGenerate.value || generating.value,
                    onClick: generate
                  }, {
                    default: withCtx(() => [
                      generating.value ? (openBlock(), createBlock(unref(Loader2), {
                        key: 0,
                        class: "mr-2 h-4 w-4 animate-spin"
                      })) : (openBlock(), createBlock(unref(QrCode), {
                        key: 1,
                        class: "mr-2 h-4 w-4"
                      })),
                      createTextVNode(" " + toDisplayString(generating.value ? "Generating..." : "Generate QR code"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                createVNode("div", { class: "p-5 lg:p-6 flex flex-col items-center justify-center min-h-[350px] border-b md:border-b-0 md:border-r border-border gap-4" }, [
                  previewUrl.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("img", {
                      src: previewUrl.value,
                      alt: "QR code preview",
                      class: "w-full max-w-xs rounded-lg shadow-md"
                    }, null, 8, ["src"]),
                    createVNode(_component_Button, {
                      variant: "outline",
                      onClick: downloadImage
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Download), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" Download PNG ")
                      ]),
                      _: 1
                    })
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col items-center gap-3 text-muted-foreground"
                  }, [
                    createVNode(unref(QrCode), { class: "h-16 w-16 opacity-20" }),
                    createVNode("p", { class: "text-sm text-center" }, [
                      createTextVNode(toDisplayString(emptyStateHint.value) + " and click", 1),
                      createVNode("br"),
                      createVNode("strong", null, "Generate QR code"),
                      createTextVNode(". ")
                    ])
                  ]))
                ]),
                createVNode("div", { class: "p-5 lg:p-6 space-y-4 md:col-span-2 lg:col-span-1" }, [
                  createVNode("h2", { class: "text-lg font-semibold tracking-tight" }, "Style"),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode(_component_Label, { class: "text-sm text-muted-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode("Colors")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TooltipProvider, null, {
                        default: withCtx(() => [
                          createVNode(_component_Tooltip, null, {
                            default: withCtx(() => [
                              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-7 w-7",
                                    onClick: randomizeColors
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Shuffle), { class: "h-3.5 w-3.5" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TooltipContent, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, "Random color scheme")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "grid grid-cols-5 gap-2" }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          for: "colorBg",
                          class: "block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer",
                          style: { backgroundColor: colorBackground.value }
                        }, [
                          withDirectives(createVNode("input", {
                            id: "colorBg",
                            "onUpdate:modelValue": ($event) => colorBackground.value = $event,
                            type: "color",
                            class: "sr-only"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, colorBackground.value]
                          ])
                        ], 4),
                        createVNode("span", { class: "text-[10px] text-muted-foreground text-center block" }, "Background")
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          for: "colorDs",
                          class: "block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer",
                          style: { backgroundColor: colorDotsStart.value }
                        }, [
                          withDirectives(createVNode("input", {
                            id: "colorDs",
                            "onUpdate:modelValue": ($event) => colorDotsStart.value = $event,
                            type: "color",
                            class: "sr-only"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, colorDotsStart.value]
                          ])
                        ], 4),
                        createVNode("span", { class: "text-[10px] text-muted-foreground text-center block" }, "Dots 1")
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          for: "colorDe",
                          class: "block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer",
                          style: { backgroundColor: colorDotsEnd.value }
                        }, [
                          withDirectives(createVNode("input", {
                            id: "colorDe",
                            "onUpdate:modelValue": ($event) => colorDotsEnd.value = $event,
                            type: "color",
                            class: "sr-only"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, colorDotsEnd.value]
                          ])
                        ], 4),
                        createVNode("span", { class: "text-[10px] text-muted-foreground text-center block" }, "Dots 2")
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          for: "colorCo",
                          class: "block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer",
                          style: { backgroundColor: colorCorners.value }
                        }, [
                          withDirectives(createVNode("input", {
                            id: "colorCo",
                            "onUpdate:modelValue": ($event) => colorCorners.value = $event,
                            type: "color",
                            class: "sr-only"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, colorCorners.value]
                          ])
                        ], 4),
                        createVNode("span", { class: "text-[10px] text-muted-foreground text-center block" }, "Corners")
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          for: "colorTx",
                          class: "block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer",
                          style: { backgroundColor: colorText.value }
                        }, [
                          withDirectives(createVNode("input", {
                            id: "colorTx",
                            "onUpdate:modelValue": ($event) => colorText.value = $event,
                            type: "color",
                            class: "sr-only"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, colorText.value]
                          ])
                        ], 4),
                        createVNode("span", { class: "text-[10px] text-muted-foreground text-center block" }, "Text")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(_component_Label, { for: "dotsType" }, {
                      default: withCtx(() => [
                        createTextVNode("Dot style")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: dotsType.value,
                      "onUpdate:modelValue": ($event) => dotsType.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, { id: "dotsType" }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, { value: "rounded" }, {
                              default: withCtx(() => [
                                createTextVNode("Rounded")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "dots" }, {
                              default: withCtx(() => [
                                createTextVNode("Dots")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "extra-rounded" }, {
                              default: withCtx(() => [
                                createTextVNode("Extra Rounded")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "classy" }, {
                              default: withCtx(() => [
                                createTextVNode("Classy")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "classy-rounded" }, {
                              default: withCtx(() => [
                                createTextVNode("Classy Rounded")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "square" }, {
                              default: withCtx(() => [
                                createTextVNode("Square")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(_component_Label, { for: "cornersSquare" }, {
                      default: withCtx(() => [
                        createTextVNode("Outer corners")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: cornersSquareType.value,
                      "onUpdate:modelValue": ($event) => cornersSquareType.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, { id: "cornersSquare" }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, { value: "extra-rounded" }, {
                              default: withCtx(() => [
                                createTextVNode("Extra Rounded")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "square" }, {
                              default: withCtx(() => [
                                createTextVNode("Square")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "dot" }, {
                              default: withCtx(() => [
                                createTextVNode("Dot")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(_component_Label, { for: "cornersDot" }, {
                      default: withCtx(() => [
                        createTextVNode("Inner corners")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: cornersDotType.value,
                      "onUpdate:modelValue": ($event) => cornersDotType.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, { id: "cornersDot" }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, { value: "dot" }, {
                              default: withCtx(() => [
                                createTextVNode("Dot")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "square" }, {
                              default: withCtx(() => [
                                createTextVNode("Square")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(_component_Label, { for: "imageSize" }, {
                      default: withCtx(() => [
                        createTextVNode("Image size")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, {
                      modelValue: imageSize.value,
                      "onUpdate:modelValue": ($event) => imageSize.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectTrigger, { id: "imageSize" }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectValue)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectItem, { value: 600 }, {
                              default: withCtx(() => [
                                createTextVNode("600 px")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: 900 }, {
                              default: withCtx(() => [
                                createTextVNode("900 px")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: 1200 }, {
                              default: withCtx(() => [
                                createTextVNode("1200 px")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: 1500 }, {
                              default: withCtx(() => [
                                createTextVNode("1500 px")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(_component_Label, null, {
                      default: withCtx(() => [
                        createTextVNode("Padding: " + toDisplayString(qrMargin.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Slider, {
                      modelValue: qrMarginArr.value,
                      "onUpdate:modelValue": ($event) => qrMarginArr.value = $event,
                      min: 0,
                      max: 80,
                      step: 1,
                      class: "mt-2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_Checkbox, {
                      id: "showInfo",
                      modelValue: showInfoInImage.value,
                      "onUpdate:modelValue": ($event) => showInfoInImage.value = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_Label, {
                      for: "showInfo",
                      class: "text-sm font-normal cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Show info text")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[[type]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_type_-oRZkZGRe.mjs.map
