import {MetaDataPage} from '@types';

import {MetaDataPageAPI} from './apiTypes';

function toMetaDataPage(metaDataPageApi: MetaDataPageAPI): MetaDataPage {
  return {
    total: metaDataPageApi.total,
    perPage: metaDataPageApi.per_page,
    currentPage: metaDataPageApi.current_page,
    lastPage: metaDataPageApi.last_page,
    firstPage: metaDataPageApi.first_page,
    hasNextPage: !!metaDataPageApi.next_page_url,
    hasPreviousPage: !!metaDataPageApi.previous_page_url,
  };
}

export const apiAdapter = {
  toMetaDataPage,
};
