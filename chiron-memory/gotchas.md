# gotcha

A non-obvious pitfall or trap, learned the hard way.

## LayoutProps global type breaks tsc on a fresh clone

What: The Next.js 16 template types the root layout with the global `LayoutProps<"/">`, which only exists after `next dev`/`next build` generates `.next/types`; a standalone `npx tsc --noEmit` on a fresh clone fails with "Cannot find name 'LayoutProps'" · Why: the type comes from Next's typegen output, not from the `next` package typings · Where: app/layout.tsx · Learned: use explicit props (`Readonly<{ children: ReactNode }>`) so the type check passes without a prior build
