import Script from 'next/script';

export default function JsonLd() {
  return (
    <Script
      id="json-ld-person"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Christopher Bartha',
          alternateName: 'Chris Bartha',
          url: 'https://chrisbartha.com',
          jobTitle: 'Software Engineer',
          description:
            'Full-Stack Software Engineer focused on backend systems, data pipelines, and applied machine learning.',
          knowsAbout: [
            'Backend Engineering',
            'Distributed Systems',
            'Machine Learning',
            'Data Engineering',
            'APIs',
            'Cloud Infrastructure',
          ],
          sameAs: [
            'https://www.linkedin.com/in/chrisbartha',
            'https://github.com/chrisbartha',
          ],
        }),
      }}
    />
  );
}
