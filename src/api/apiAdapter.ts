import {MetaDataPage, Page} from '@types';

import {MetaDataPageAPI, PageAPI} from './apiTypes';

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

function toPageModel<ApiType, ModelType>(
  page: PageAPI<ApiType>,
  adapterToModel: (api: ApiType) => ModelType,
): Page<ModelType> {
  return {
    meta: toMetaDataPage(page.meta),
    data: page.data.map(adapterToModel),
  };
}

export const apiAdapter = {
  toMetaDataPage,
  toPageModel,
};
