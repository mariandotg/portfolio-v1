import {
  CardEntry,
  DataFormatted,
  SectionEntry,
  CardFormatted,
} from '../models/data';

const contentfulDataAdapter = (data: Array<SectionEntry>) => {
  const formattedData = data.reduce<DataFormatted>(
    (acc: DataFormatted, section: SectionEntry) => {
      const cards = section.fields.cards?.reduce<CardFormatted[]>(
        (acc: CardFormatted[], card: CardEntry) => {
          const image = card.fields.image
            ? card.fields.image.fields.file.url
            : null;
          const rest = image
            ? { ...card.fields, image, id: card.sys.id }
            : { ...card.fields, id: card.sys.id };
          return [...acc, rest];
        },
        []
      );

      const restBase = { ...section.fields, id: section.sys.id };

      const rest = cards
        ? section.fields.key !== 'header'
          ? section.fields.key !== 'footer'
            ? {
                ...restBase,
                cards,
              }
            : { ...restBase, socialMedia: cards }
          : { ...restBase, languagesList: cards }
        : restBase;

      if (section.fields.key === 'header' || section.fields.key === 'footer') {
        const { cards, ...newRest } = rest;
        return { ...acc, [section.fields.key]: newRest };
      }

      return { ...acc, [section.fields.key]: rest };
    },
    {} as DataFormatted
  );
  return formattedData;
};

export default contentfulDataAdapter;
