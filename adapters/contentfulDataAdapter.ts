import {
  CardEntry,
  Card,
  DataFormatted,
  SectionEntry,
  Item,
  ItemEntry,
} from '../models/data';

const contentfulDataAdapter = (data: Array<SectionEntry>) => {
  const formattedData = data.reduce<DataFormatted>(
    (acc: DataFormatted, section: SectionEntry) => {
      const cards = section.fields.cards
        ? section.fields.cards.reduce<Card[]>(
            (acc: Card[], card: CardEntry) => {
              const rest = { ...card.fields, id: card.sys.id };
              return [...acc, rest];
            },
            []
          )
        : null;
      const items = section.fields.items
        ? section.fields.items.reduce<Item[]>(
            (acc: Item[], item: ItemEntry) => {
              const rest = { ...item.fields, id: item.sys.id };
              return [...acc, rest];
            },
            []
          )
        : null;
      const rest = { ...section.fields, cards, items, id: section.sys.id };
      return { ...acc, [section.fields.key]: rest };
    },
    {}
  );
  return formattedData;
};

export default contentfulDataAdapter;
