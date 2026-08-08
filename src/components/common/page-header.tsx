import Container from "./container";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-blue-700 py-24 text-white">
      <Container>
        <h1 className="text-5xl font-black">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-blue-100">
          {description}
        </p>
      </Container>
    </section>
  );
}