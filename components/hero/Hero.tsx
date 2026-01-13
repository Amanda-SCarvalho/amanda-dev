import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Desenvolvendo interfaces
            <span className="block text-violet-400">
              que fazem sentido
            </span>
            para pessoas e negócios
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Sou <strong>Amanda Carvalho</strong>, desenvolvedora frontend/fullstack.
            Crio aplicações modernas, performáticas e bem estruturadas,
            focadas em experiência e resultado.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-xl bg-violet-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-violet-600"
            >
              Ver projetos
            </Link>

            <Link
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Falar comigo
            </Link>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-3 text-sm uppercase tracking-wide">
            <span className="rounded-md bg-white/5 px-3 py-1 text-muted-foreground">
              UI moderna
            </span>
            <span className="rounded-md bg-white/5 px-3 py-1 text-muted-foreground">
              Código limpo
            </span>
            <span className="rounded-md bg-white/5 px-3 py-1 text-muted-foreground">
              Performance
            </span>
            <span className="rounded-md bg-white/5 px-3 py-1 text-muted-foreground">
              UX & acessibilidade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
