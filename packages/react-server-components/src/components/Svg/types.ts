/**
 * Svg fill color
 */
export enum SvgVariantFillColor {
  'none' = 'fill-none',
  'inherit' = 'fill-inherit',
  'current' = 'fill-current',
  'transparent' = 'fill-transparent',
  'black' = 'fill-black',
  'white' = 'fill-white',
  'slate-50' = 'fill-slate-50',
  'slate-100' = 'fill-slate-100',
  'slate-200' = 'fill-slate-200',
  'slate-300' = 'fill-slate-300',
  'slate-400' = 'fill-slate-400',
  'slate-500' = 'fill-slate-500',
  'slate-600' = 'fill-slate-600',
  'slate-700' = 'fill-slate-700',
  'slate-800' = 'fill-slate-800',
  'slate-900' = 'fill-slate-900',
  'slate-950' = 'fill-slate-950',
  'gray-50' = 'fill-gray-50',
  'gray-100' = 'fill-gray-100',
  'gray-200' = 'fill-gray-200',
  'gray-300' = 'fill-gray-300',
  'gray-400' = 'fill-gray-400',
  'gray-500' = 'fill-gray-500',
  'gray-600' = 'fill-gray-600',
  'gray-700' = 'fill-gray-700',
  'gray-800' = 'fill-gray-800',
  'gray-900' = 'fill-gray-900',
  'gray-950' = 'fill-gray-950',
  'zinc-50' = 'fill-zinc-50',
  'zinc-100' = 'fill-zinc-100',
  'zinc-200' = 'fill-zinc-200',
  'zinc-300' = 'fill-zinc-300',
  'zinc-400' = 'fill-zinc-400',
  'zinc-500' = 'fill-zinc-500',
  'zinc-600' = 'fill-zinc-600',
  'zinc-700' = 'fill-zinc-700',
  'zinc-800' = 'fill-zinc-800',
  'zinc-900' = 'fill-zinc-900',
  'zinc-950' = 'fill-zinc-950',
  'neutral-50' = 'fill-neutral-50',
  'neutral-100' = 'fill-neutral-100',
  'neutral-200' = 'fill-neutral-200',
  'neutral-300' = 'fill-neutral-300',
  'neutral-400' = 'fill-neutral-400',
  'neutral-500' = 'fill-neutral-500',
  'neutral-600' = 'fill-neutral-600',
  'neutral-700' = 'fill-neutral-700',
  'neutral-800' = 'fill-neutral-800',
  'neutral-900' = 'fill-neutral-900',
  'neutral-950' = 'fill-neutral-950',
  'stone-50' = 'fill-stone-50',
  'stone-100' = 'fill-stone-100',
  'stone-200' = 'fill-stone-200',
  'stone-300' = 'fill-stone-300',
  'stone-400' = 'fill-stone-400',
  'stone-500' = 'fill-stone-500',
  'stone-600' = 'fill-stone-600',
  'stone-700' = 'fill-stone-700',
  'stone-800' = 'fill-stone-800',
  'stone-900' = 'fill-stone-900',
  'stone-950' = 'fill-stone-950',
  'red-50' = 'fill-red-50',
  'red-100' = 'fill-red-100',
  'red-200' = 'fill-red-200',
  'red-300' = 'fill-red-300',
  'red-400' = 'fill-red-400',
  'red-500' = 'fill-red-500',
  'red-600' = 'fill-red-600',
  'red-700' = 'fill-red-700',
  'red-800' = 'fill-red-800',
  'red-900' = 'fill-red-900',
  'red-950' = 'fill-red-950',
  'orange-50' = 'fill-orange-50',
  'orange-100' = 'fill-orange-100',
  'orange-200' = 'fill-orange-200',
  'orange-300' = 'fill-orange-300',
  'orange-400' = 'fill-orange-400',
  'orange-500' = 'fill-orange-500',
  'orange-600' = 'fill-orange-600',
  'orange-700' = 'fill-orange-700',
  'orange-800' = 'fill-orange-800',
  'orange-900' = 'fill-orange-900',
  'orange-950' = 'fill-orange-950',
  'amber-50' = 'fill-amber-50',
  'amber-100' = 'fill-amber-100',
  'amber-200' = 'fill-amber-200',
  'amber-300' = 'fill-amber-300',
  'amber-400' = 'fill-amber-400',
  'amber-500' = 'fill-amber-500',
  'amber-600' = 'fill-amber-600',
  'amber-700' = 'fill-amber-700',
  'amber-800' = 'fill-amber-800',
  'amber-900' = 'fill-amber-900',
  'amber-950' = 'fill-amber-950',
  'yellow-50' = 'fill-yellow-50',
  'yellow-100' = 'fill-yellow-100',
  'yellow-200' = 'fill-yellow-200',
  'yellow-300' = 'fill-yellow-300',
  'yellow-400' = 'fill-yellow-400',
  'yellow-500' = 'fill-yellow-500',
  'yellow-600' = 'fill-yellow-600',
  'yellow-700' = 'fill-yellow-700',
  'yellow-800' = 'fill-yellow-800',
  'yellow-900' = 'fill-yellow-900',
  'yellow-950' = 'fill-yellow-950',
  'lime-50' = 'fill-lime-50',
  'lime-100' = 'fill-lime-100',
  'lime-200' = 'fill-lime-200',
  'lime-300' = 'fill-lime-300',
  'lime-400' = 'fill-lime-400',
  'lime-500' = 'fill-lime-500',
  'lime-600' = 'fill-lime-600',
  'lime-700' = 'fill-lime-700',
  'lime-800' = 'fill-lime-800',
  'lime-900' = 'fill-lime-900',
  'lime-950' = 'fill-lime-950',
  'green-50' = 'fill-green-50',
  'green-100' = 'fill-green-100',
  'green-200' = 'fill-green-200',
  'green-300' = 'fill-green-300',
  'green-400' = 'fill-green-400',
  'green-500' = 'fill-green-500',
  'green-600' = 'fill-green-600',
  'green-700' = 'fill-green-700',
  'green-800' = 'fill-green-800',
  'green-900' = 'fill-green-900',
  'green-950' = 'fill-green-950',
  'emerald-50' = 'fill-emerald-50',
  'emerald-100' = 'fill-emerald-100',
  'emerald-200' = 'fill-emerald-200',
  'emerald-300' = 'fill-emerald-300',
  'emerald-400' = 'fill-emerald-400',
  'emerald-500' = 'fill-emerald-500',
  'emerald-600' = 'fill-emerald-600',
  'emerald-700' = 'fill-emerald-700',
  'emerald-800' = 'fill-emerald-800',
  'emerald-900' = 'fill-emerald-900',
  'emerald-950' = 'fill-emerald-950',
  'teal-50' = 'fill-teal-50',
  'teal-100' = 'fill-teal-100',
  'teal-200' = 'fill-teal-200',
  'teal-300' = 'fill-teal-300',
  'teal-400' = 'fill-teal-400',
  'teal-500' = 'fill-teal-500',
  'teal-600' = 'fill-teal-600',
  'teal-700' = 'fill-teal-700',
  'teal-800' = 'fill-teal-800',
  'teal-900' = 'fill-teal-900',
  'teal-950' = 'fill-teal-950',
  'cyan-50' = 'fill-cyan-50',
  'cyan-100' = 'fill-cyan-100',
  'cyan-200' = 'fill-cyan-200',
  'cyan-300' = 'fill-cyan-300',
  'cyan-400' = 'fill-cyan-400',
  'cyan-500' = 'fill-cyan-500',
  'cyan-600' = 'fill-cyan-600',
  'cyan-700' = 'fill-cyan-700',
  'cyan-800' = 'fill-cyan-800',
  'cyan-900' = 'fill-cyan-900',
  'cyan-950' = 'fill-cyan-950',
  'sky-50' = 'fill-sky-50',
  'sky-100' = 'fill-sky-100',
  'sky-200' = 'fill-sky-200',
  'sky-300' = 'fill-sky-300',
  'sky-400' = 'fill-sky-400',
  'sky-500' = 'fill-sky-500',
  'sky-600' = 'fill-sky-600',
  'sky-700' = 'fill-sky-700',
  'sky-800' = 'fill-sky-800',
  'sky-900' = 'fill-sky-900',
  'sky-950' = 'fill-sky-950',
  'blue-50' = 'fill-blue-50',
  'blue-100' = 'fill-blue-100',
  'blue-200' = 'fill-blue-200',
  'blue-300' = 'fill-blue-300',
  'blue-400' = 'fill-blue-400',
  'blue-500' = 'fill-blue-500',
  'blue-600' = 'fill-blue-600',
  'blue-700' = 'fill-blue-700',
  'blue-800' = 'fill-blue-800',
  'blue-900' = 'fill-blue-900',
  'blue-950' = 'fill-blue-950',
  'indigo-50' = 'fill-indigo-50',
  'indigo-100' = 'fill-indigo-100',
  'indigo-200' = 'fill-indigo-200',
  'indigo-300' = 'fill-indigo-300',
  'indigo-400' = 'fill-indigo-400',
  'indigo-500' = 'fill-indigo-500',
  'indigo-600' = 'fill-indigo-600',
  'indigo-700' = 'fill-indigo-700',
  'indigo-800' = 'fill-indigo-800',
  'indigo-900' = 'fill-indigo-900',
  'indigo-950' = 'fill-indigo-950',
  'violet-50' = 'fill-violet-50',
  'violet-100' = 'fill-violet-100',
  'violet-200' = 'fill-violet-200',
  'violet-300' = 'fill-violet-300',
  'violet-400' = 'fill-violet-400',
  'violet-500' = 'fill-violet-500',
  'violet-600' = 'fill-violet-600',
  'violet-700' = 'fill-violet-700',
  'violet-800' = 'fill-violet-800',
  'violet-900' = 'fill-violet-900',
  'violet-950' = 'fill-violet-950',
  'purple-50' = 'fill-purple-50',
  'purple-100' = 'fill-purple-100',
  'purple-200' = 'fill-purple-200',
  'purple-300' = 'fill-purple-300',
  'purple-400' = 'fill-purple-400',
  'purple-500' = 'fill-purple-500',
  'purple-600' = 'fill-purple-600',
  'purple-700' = 'fill-purple-700',
  'purple-800' = 'fill-purple-800',
  'purple-900' = 'fill-purple-900',
  'purple-950' = 'fill-purple-950',
  'fuchsia-50' = 'fill-fuchsia-50',
  'fuchsia-100' = 'fill-fuchsia-100',
  'fuchsia-200' = 'fill-fuchsia-200',
  'fuchsia-300' = 'fill-fuchsia-300',
  'fuchsia-400' = 'fill-fuchsia-400',
  'fuchsia-500' = 'fill-fuchsia-500',
  'fuchsia-600' = 'fill-fuchsia-600',
  'fuchsia-700' = 'fill-fuchsia-700',
  'fuchsia-800' = 'fill-fuchsia-800',
  'fuchsia-900' = 'fill-fuchsia-900',
  'fuchsia-950' = 'fill-fuchsia-950',
  'pink-50' = 'fill-pink-50',
  'pink-100' = 'fill-pink-100',
  'pink-200' = 'fill-pink-200',
  'pink-300' = 'fill-pink-300',
  'pink-400' = 'fill-pink-400',
  'pink-500' = 'fill-pink-500',
  'pink-600' = 'fill-pink-600',
  'pink-700' = 'fill-pink-700',
  'pink-800' = 'fill-pink-800',
  'pink-900' = 'fill-pink-900',
  'pink-950' = 'fill-pink-950',
  'rose-50' = 'fill-rose-50',
  'rose-100' = 'fill-rose-100',
  'rose-200' = 'fill-rose-200',
  'rose-300' = 'fill-rose-300',
  'rose-400' = 'fill-rose-400',
  'rose-500' = 'fill-rose-500',
  'rose-600' = 'fill-rose-600',
  'rose-700' = 'fill-rose-700',
  'rose-800' = 'fill-rose-800',
  'rose-900' = 'fill-rose-900',
  'rose-950' = 'fill-rose-950',
}

/**
 * Svg stroke color
 */
export enum SvgVariantStrokeColor {
  'none' = 'stroke-none',
  'inherit' = 'stroke-inherit',
  'current' = 'stroke-current',
  'transparent' = 'stroke-transparent',
  'black' = 'stroke-black',
  'white' = 'stroke-white',
  'slate-50' = 'stroke-slate-50',
  'slate-100' = 'stroke-slate-100',
  'slate-200' = 'stroke-slate-200',
  'slate-300' = 'stroke-slate-300',
  'slate-400' = 'stroke-slate-400',
  'slate-500' = 'stroke-slate-500',
  'slate-600' = 'stroke-slate-600',
  'slate-700' = 'stroke-slate-700',
  'slate-800' = 'stroke-slate-800',
  'slate-900' = 'stroke-slate-900',
  'slate-950' = 'stroke-slate-950',
  'gray-50' = 'stroke-gray-50',
  'gray-100' = 'stroke-gray-100',
  'gray-200' = 'stroke-gray-200',
  'gray-300' = 'stroke-gray-300',
  'gray-400' = 'stroke-gray-400',
  'gray-500' = 'stroke-gray-500',
  'gray-600' = 'stroke-gray-600',
  'gray-700' = 'stroke-gray-700',
  'gray-800' = 'stroke-gray-800',
  'gray-900' = 'stroke-gray-900',
  'gray-950' = 'stroke-gray-950',
  'zinc-50' = 'stroke-zinc-50',
  'zinc-100' = 'stroke-zinc-100',
  'zinc-200' = 'stroke-zinc-200',
  'zinc-300' = 'stroke-zinc-300',
  'zinc-400' = 'stroke-zinc-400',
  'zinc-500' = 'stroke-zinc-500',
  'zinc-600' = 'stroke-zinc-600',
  'zinc-700' = 'stroke-zinc-700',
  'zinc-800' = 'stroke-zinc-800',
  'zinc-900' = 'stroke-zinc-900',
  'zinc-950' = 'stroke-zinc-950',
  'neutral-50' = 'stroke-neutral-50',
  'neutral-100' = 'stroke-neutral-100',
  'neutral-200' = 'stroke-neutral-200',
  'neutral-300' = 'stroke-neutral-300',
  'neutral-400' = 'stroke-neutral-400',
  'neutral-500' = 'stroke-neutral-500',
  'neutral-600' = 'stroke-neutral-600',
  'neutral-700' = 'stroke-neutral-700',
  'neutral-800' = 'stroke-neutral-800',
  'neutral-900' = 'stroke-neutral-900',
  'neutral-950' = 'stroke-neutral-950',
  'stone-50' = 'stroke-stone-50',
  'stone-100' = 'stroke-stone-100',
  'stone-200' = 'stroke-stone-200',
  'stone-300' = 'stroke-stone-300',
  'stone-400' = 'stroke-stone-400',
  'stone-500' = 'stroke-stone-500',
  'stone-600' = 'stroke-stone-600',
  'stone-700' = 'stroke-stone-700',
  'stone-800' = 'stroke-stone-800',
  'stone-900' = 'stroke-stone-900',
  'stone-950' = 'stroke-stone-950',
  'red-50' = 'stroke-red-50',
  'red-100' = 'stroke-red-100',
  'red-200' = 'stroke-red-200',
  'red-300' = 'stroke-red-300',
  'red-400' = 'stroke-red-400',
  'red-500' = 'stroke-red-500',
  'red-600' = 'stroke-red-600',
  'red-700' = 'stroke-red-700',
  'red-800' = 'stroke-red-800',
  'red-900' = 'stroke-red-900',
  'red-950' = 'stroke-red-950',
  'orange-50' = 'stroke-orange-50',
  'orange-100' = 'stroke-orange-100',
  'orange-200' = 'stroke-orange-200',
  'orange-300' = 'stroke-orange-300',
  'orange-400' = 'stroke-orange-400',
  'orange-500' = 'stroke-orange-500',
  'orange-600' = 'stroke-orange-600',
  'orange-700' = 'stroke-orange-700',
  'orange-800' = 'stroke-orange-800',
  'orange-900' = 'stroke-orange-900',
  'orange-950' = 'stroke-orange-950',
  'amber-50' = 'stroke-amber-50',
  'amber-100' = 'stroke-amber-100',
  'amber-200' = 'stroke-amber-200',
  'amber-300' = 'stroke-amber-300',
  'amber-400' = 'stroke-amber-400',
  'amber-500' = 'stroke-amber-500',
  'amber-600' = 'stroke-amber-600',
  'amber-700' = 'stroke-amber-700',
  'amber-800' = 'stroke-amber-800',
  'amber-900' = 'stroke-amber-900',
  'amber-950' = 'stroke-amber-950',
  'yellow-50' = 'stroke-yellow-50',
  'yellow-100' = 'stroke-yellow-100',
  'yellow-200' = 'stroke-yellow-200',
  'yellow-300' = 'stroke-yellow-300',
  'yellow-400' = 'stroke-yellow-400',
  'yellow-500' = 'stroke-yellow-500',
  'yellow-600' = 'stroke-yellow-600',
  'yellow-700' = 'stroke-yellow-700',
  'yellow-800' = 'stroke-yellow-800',
  'yellow-900' = 'stroke-yellow-900',
  'yellow-950' = 'stroke-yellow-950',
  'lime-50' = 'stroke-lime-50',
  'lime-100' = 'stroke-lime-100',
  'lime-200' = 'stroke-lime-200',
  'lime-300' = 'stroke-lime-300',
  'lime-400' = 'stroke-lime-400',
  'lime-500' = 'stroke-lime-500',
  'lime-600' = 'stroke-lime-600',
  'lime-700' = 'stroke-lime-700',
  'lime-800' = 'stroke-lime-800',
  'lime-900' = 'stroke-lime-900',
  'lime-950' = 'stroke-lime-950',
  'green-50' = 'stroke-green-50',
  'green-100' = 'stroke-green-100',
  'green-200' = 'stroke-green-200',
  'green-300' = 'stroke-green-300',
  'green-400' = 'stroke-green-400',
  'green-500' = 'stroke-green-500',
  'green-600' = 'stroke-green-600',
  'green-700' = 'stroke-green-700',
  'green-800' = 'stroke-green-800',
  'green-900' = 'stroke-green-900',
  'green-950' = 'stroke-green-950',
  'emerald-50' = 'stroke-emerald-50',
  'emerald-100' = 'stroke-emerald-100',
  'emerald-200' = 'stroke-emerald-200',
  'emerald-300' = 'stroke-emerald-300',
  'emerald-400' = 'stroke-emerald-400',
  'emerald-500' = 'stroke-emerald-500',
  'emerald-600' = 'stroke-emerald-600',
  'emerald-700' = 'stroke-emerald-700',
  'emerald-800' = 'stroke-emerald-800',
  'emerald-900' = 'stroke-emerald-900',
  'emerald-950' = 'stroke-emerald-950',
  'teal-50' = 'stroke-teal-50',
  'teal-100' = 'stroke-teal-100',
  'teal-200' = 'stroke-teal-200',
  'teal-300' = 'stroke-teal-300',
  'teal-400' = 'stroke-teal-400',
  'teal-500' = 'stroke-teal-500',
  'teal-600' = 'stroke-teal-600',
  'teal-700' = 'stroke-teal-700',
  'teal-800' = 'stroke-teal-800',
  'teal-900' = 'stroke-teal-900',
  'teal-950' = 'stroke-teal-950',
  'cyan-50' = 'stroke-cyan-50',
  'cyan-100' = 'stroke-cyan-100',
  'cyan-200' = 'stroke-cyan-200',
  'cyan-300' = 'stroke-cyan-300',
  'cyan-400' = 'stroke-cyan-400',
  'cyan-500' = 'stroke-cyan-500',
  'cyan-600' = 'stroke-cyan-600',
  'cyan-700' = 'stroke-cyan-700',
  'cyan-800' = 'stroke-cyan-800',
  'cyan-900' = 'stroke-cyan-900',
  'cyan-950' = 'stroke-cyan-950',
  'sky-50' = 'stroke-sky-50',
  'sky-100' = 'stroke-sky-100',
  'sky-200' = 'stroke-sky-200',
  'sky-300' = 'stroke-sky-300',
  'sky-400' = 'stroke-sky-400',
  'sky-500' = 'stroke-sky-500',
  'sky-600' = 'stroke-sky-600',
  'sky-700' = 'stroke-sky-700',
  'sky-800' = 'stroke-sky-800',
  'sky-900' = 'stroke-sky-900',
  'sky-950' = 'stroke-sky-950',
  'blue-50' = 'stroke-blue-50',
  'blue-100' = 'stroke-blue-100',
  'blue-200' = 'stroke-blue-200',
  'blue-300' = 'stroke-blue-300',
  'blue-400' = 'stroke-blue-400',
  'blue-500' = 'stroke-blue-500',
  'blue-600' = 'stroke-blue-600',
  'blue-700' = 'stroke-blue-700',
  'blue-800' = 'stroke-blue-800',
  'blue-900' = 'stroke-blue-900',
  'blue-950' = 'stroke-blue-950',
  'indigo-50' = 'stroke-indigo-50',
  'indigo-100' = 'stroke-indigo-100',
  'indigo-200' = 'stroke-indigo-200',
  'indigo-300' = 'stroke-indigo-300',
  'indigo-400' = 'stroke-indigo-400',
  'indigo-500' = 'stroke-indigo-500',
  'indigo-600' = 'stroke-indigo-600',
  'indigo-700' = 'stroke-indigo-700',
  'indigo-800' = 'stroke-indigo-800',
  'indigo-900' = 'stroke-indigo-900',
  'indigo-950' = 'stroke-indigo-950',
  'violet-50' = 'stroke-violet-50',
  'violet-100' = 'stroke-violet-100',
  'violet-200' = 'stroke-violet-200',
  'violet-300' = 'stroke-violet-300',
  'violet-400' = 'stroke-violet-400',
  'violet-500' = 'stroke-violet-500',
  'violet-600' = 'stroke-violet-600',
  'violet-700' = 'stroke-violet-700',
  'violet-800' = 'stroke-violet-800',
  'violet-900' = 'stroke-violet-900',
  'violet-950' = 'stroke-violet-950',
  'purple-50' = 'stroke-purple-50',
  'purple-100' = 'stroke-purple-100',
  'purple-200' = 'stroke-purple-200',
  'purple-300' = 'stroke-purple-300',
  'purple-400' = 'stroke-purple-400',
  'purple-500' = 'stroke-purple-500',
  'purple-600' = 'stroke-purple-600',
  'purple-700' = 'stroke-purple-700',
  'purple-800' = 'stroke-purple-800',
  'purple-900' = 'stroke-purple-900',
  'purple-950' = 'stroke-purple-950',
  'fuchsia-50' = 'stroke-fuchsia-50',
  'fuchsia-100' = 'stroke-fuchsia-100',
  'fuchsia-200' = 'stroke-fuchsia-200',
  'fuchsia-300' = 'stroke-fuchsia-300',
  'fuchsia-400' = 'stroke-fuchsia-400',
  'fuchsia-500' = 'stroke-fuchsia-500',
  'fuchsia-600' = 'stroke-fuchsia-600',
  'fuchsia-700' = 'stroke-fuchsia-700',
  'fuchsia-800' = 'stroke-fuchsia-800',
  'fuchsia-900' = 'stroke-fuchsia-900',
  'fuchsia-950' = 'stroke-fuchsia-950',
  'pink-50' = 'stroke-pink-50',
  'pink-100' = 'stroke-pink-100',
  'pink-200' = 'stroke-pink-200',
  'pink-300' = 'stroke-pink-300',
  'pink-400' = 'stroke-pink-400',
  'pink-500' = 'stroke-pink-500',
  'pink-600' = 'stroke-pink-600',
  'pink-700' = 'stroke-pink-700',
  'pink-800' = 'stroke-pink-800',
  'pink-900' = 'stroke-pink-900',
  'pink-950' = 'stroke-pink-950',
  'rose-50' = 'stroke-rose-50',
  'rose-100' = 'stroke-rose-100',
  'rose-200' = 'stroke-rose-200',
  'rose-300' = 'stroke-rose-300',
  'rose-400' = 'stroke-rose-400',
  'rose-500' = 'stroke-rose-500',
  'rose-600' = 'stroke-rose-600',
  'rose-700' = 'stroke-rose-700',
  'rose-800' = 'stroke-rose-800',
  'rose-900' = 'stroke-rose-900',
  'rose-950' = 'stroke-rose-950',
}

/**
 * Svg stroke width
 */
export const SvgVariantStrokeWidth = {
  0: 'stroke-0',
  1: 'stroke-1',
  2: 'stroke-2',
};