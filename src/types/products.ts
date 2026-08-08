export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  image: string;

  shortDescription: string;

  seoTitle: string;
  seoDescription: string;

  category?: string;
  gallery?: string[];
  longDescription?: string;
  benefits?: string[];
  applications?: string[];
  specifications?: ProductSpecification[];
  faq?: ProductFaq[];
  keywords?: string[];
}
