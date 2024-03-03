import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

type BoardGameItem = {
  id?: string;
  name?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
};

const baseUrl = 'https://boardgamegeek.com/xmlapi2';

export const boardGameGeekApi = {
  getBoardGame: async (id: string): Promise<undefined | BoardGameItem> => {
    const url = `${baseUrl}/thing?type=boardgame&id=${id}`;
    const result = await axios.get(url);
    const xmlText = result.data;
    const parser = new XMLParser({
      ignoreAttributes: false,
    });
    const xmlData = parser.parse(xmlText);

    return {
      id: xmlData.items.item?.['@_id'],
      name: xmlData.items.item?.['name']?.[0]?.['@_value'],
      imageUrl: xmlData.items.item?.['image'],
      thumbnailUrl: xmlData.items.item?.['thumbnail'],
    };
  },
  searchBoardGame: async (
    text: string
  ): Promise<undefined | BoardGameItem[]> => {
    const url = `${baseUrl}/search?type=boardgame&query=${text.replace(
      /\s+/g,
      '+'
    )}`;
    const result = await axios.get(url);
    const xmlText = result.data;
    const parser = new XMLParser({
      ignoreAttributes: false,
    });
    const xmlData = parser.parse(xmlText);

    return (
      xmlData.items?.item?.map(
        (_item: {
          '@_id'?: string;
          name: Record<'@_value', undefined | string>;
        }) => ({
          id: _item?.['@_id'],
          name: _item?.name?.['@_value'],
        })
      ) ?? []
    );
  },
};
