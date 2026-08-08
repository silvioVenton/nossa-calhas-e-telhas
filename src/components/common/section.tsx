import { ReactNode } from "react";
import Container from "./container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
}

export default function Section({
  children,
  className = "",
  container = true,
}: SectionProps) {
  return (
    <section className={`py-24 ${className}`}>
      {container ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}