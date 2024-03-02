import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const baseUrl = 'https://boardgamegeek.com/xmlapi2';

export const boardGameGeekApi = {
  getBoardGame: async (id: string) => {
    const url = `${baseUrl}/thing?type=boardgame&id=${id}`;

    const result = await axios.get(url);
    const xmlText = result.data;
    const parser = new XMLParser({
      ignoreAttributes: false,
    });
    const xmlData = parser.parse(xmlText);

    return {
      id: xmlData.items.item?.['@_id'] as string,
      name: xmlData.items.item?.['name']?.[0]?.['@_value'] as string,
      imageUrl: xmlData.items.item?.['image'] as string,
      thumbnailUrl: xmlData.items.item?.['thumbnail'] as string,
    };
  },
};
