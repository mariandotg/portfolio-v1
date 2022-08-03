import { IRawData } from '../models/data';

export const getContentfulData = (lang?: string) => {
  const contentful = require('contentful');
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  return client
    .getEntries({
      content_type: 'section',
      'fields.language': lang?.toLocaleUpperCase(),
      include: 1,
    })
    .then((response: IRawData) => response.items)
    .catch((error: object) => console.log(error));
};
