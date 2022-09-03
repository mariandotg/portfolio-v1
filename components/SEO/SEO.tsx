import Head from 'next/head';

const SEO = () => {
  const settings = {
    meta: {
      title: 'Mariano Guillaume - Fullstack developer',
      url: 'https://marianoguillaume.com',
      description:
        'Hi, my name is Mariano Guillaume and I’m 18 years old. I’m a self taught fullstack developer, especialized on the MERN stack (Mongodb, Express.js, React.js, Node.js).',
      image: 'https://www.marianoguillaume.com/me.webp',
      schemaType: 'AboutPage',
      openGraphType: 'website',
      social: {
        twitter: '@mariandotg',
      },
    },
  };

  const socialTags = ({
    openGraphType,
    url,
    title,
    description,
    image,
    createdAt,
    updatedAt,
  }: any) => {
    const metaTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:site',
        content:
          settings &&
          settings.meta &&
          settings.meta.social &&
          settings.meta.social.twitter,
      },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      {
        name: 'twitter:creator',
        content:
          settings &&
          settings.meta &&
          settings.meta.social &&
          settings.meta.social.twitter,
      },
      { name: 'twitter:image:src', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'og:title', content: title },
      { name: 'og:type', content: openGraphType },
      { name: 'og:url', content: url },
      { name: 'og:image', content: image },
      { name: 'og:description', content: description },
      {
        name: 'og:site_name',
        content: settings && settings.meta && settings.meta.title,
      },
      {
        name: 'og:published_time',
        content: createdAt || new Date().toISOString(),
      },
      {
        name: 'og:modified_time',
        content: updatedAt || new Date().toISOString(),
      },
    ];

    return metaTags;
  };

  return (
    <Head>
      <title>{settings.meta.title}</title>
      <link rel='icon' href='./favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link rel='preconnect' href='https://fonts.googleapis.com/' />
      <meta name='description' content={settings.meta.description} />
      <meta itemProp='name' content={settings.meta.title} />
      <meta itemProp='description' content={settings.meta.description} />
      <meta itemProp='image' content={settings.meta.image} />
      {socialTags(settings).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': settings.meta.schemaType,
            name: settings.meta.title,
            about: settings.meta.description,
            url: settings.meta.url,
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
