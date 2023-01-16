import {
  ICardEntry,
  IDataFormatted,
  ISectionEntry,
  ICardFormatted,
} from '../models/data';

const contentfulDataAdapter = (data: Array<ISectionEntry>) => {
  const formattedData = data.reduce<IDataFormatted>(
    (acc: IDataFormatted, section: ISectionEntry) => {
      const cards = section.fields.cards?.reduce<ICardFormatted[]>(
        (acc: ICardFormatted[], card: ICardEntry) => {
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
          : { ...restBase, menu: cards }
        : restBase;

      if (section.fields.key === 'header' || section.fields.key === 'footer') {
        const { cards, ...newRest } = rest;
        return { ...acc, [section.fields.key]: newRest };
      }

      return { ...acc, [section.fields.key]: rest };
    },
    {} as IDataFormatted
  );
  return formattedData;
};

export default contentfulDataAdapter;
