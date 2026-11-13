export default function Home() {
  return (
    <main>
      <section
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden px-6 py-24 sm:py-32"
      >
        {/* Decorative background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-[80%] rounded-full bg-indigo-600/30 blur-3xl sm:h-[36rem] sm:w-[36rem]" />
          <div className="absolute top-1/3 left-1/2 h-[24rem] w-[24rem] translate-x-[5%] rounded-full bg-fuchsia-500/20 blur-3xl sm:h-[32rem] sm:w-[32rem]" />
          <div className="absolute -bottom-40 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400" />
            Now in public beta
          </p>

          <h1
            id="hero-heading"
            className="mt-8 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Ship ideas at the{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              speed of thought
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-slate-300 sm:text-lg">
            Aurora gives your team a calm, fast workspace to plan, build and
            launch — without the busywork getting in the way.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-500/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Get started free
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-slate-100 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              See how it works
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            No credit card required · Free for small teams
          </p>
        </div>
      </section>
    </main>
  );
}
