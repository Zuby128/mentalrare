import { memo } from "react";
import Container from "./Container";

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    // <section id={id} className="py-16 sm:py-20">
    <section id={id}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-10 text-center bg-white">
            {subtitle && (
              <p className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export default memo(Section);
