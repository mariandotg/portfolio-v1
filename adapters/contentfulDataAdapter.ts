import { CardEntry, DataFormatted, SectionEntry } from '../models/data';

const contentfulDataAdapter = (data: Array<SectionEntry>) => {
  const formattedData = data.reduce<DataFormatted>(
    (acc: DataFormatted, section: SectionEntry) => {
      const cards = section.fields.cards
        ? section.fields.cards.reduce(
            (acc: object, card: CardEntry, index: number) => {
              const rest = { ...card.fields, id: card.sys.id };
              return { ...acc, [index]: rest };
            },
            {}
          )
        : null;
      const rest = { ...section.fields, cards };
      return { ...acc, [section.fields.id]: rest };
    },
    {}
  );
  return formattedData;
};

export default contentfulDataAdapter;
