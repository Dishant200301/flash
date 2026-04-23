import { Navbar } from "./Navbar";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
};

/**
 * Reusable inner-page hero: navbar + 100dvh banner with mega title.
 */
export function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section
      className="relative w-full overflow-hidden bg-background text-foreground"
      style={{ height: "100dvh" }}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />
      <Navbar />

      <div className="relative z-10 container-x h-full flex flex-col justify-end pb-[6vh]">
        {description && (
          <p className="absolute top-[32%] right-[clamp(1rem,4vw,3.5rem)] max-w-md text-right text-[15px] leading-[24px] text-white uppercase font-normal tracking-tight opacity-90">
            {description}
          </p>
        )}
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-2">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-mega brand-text-fill leading-[0.8]"
          style={{ fontSize: "clamp(5rem, 20vw, 20rem)" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
