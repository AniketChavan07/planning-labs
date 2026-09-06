import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
}

export default function SEO({ 
  title = 'Planning Labs | Premium Experiential & Digital Marketing', 
  description = 'Planning Labs is an experiential and digital marketing agency that creates memorable brand experiences and powerful digital experiences.',
  type = 'website'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
