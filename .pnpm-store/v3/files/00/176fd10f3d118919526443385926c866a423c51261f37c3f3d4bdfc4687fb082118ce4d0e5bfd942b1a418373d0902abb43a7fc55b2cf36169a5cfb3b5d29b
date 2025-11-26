import { IDeliveryClientConfig } from '../config';
import { Contracts } from '../contracts';
import { IContentItem, IContentItemsContainer, IContentItemWithRawDataContainer } from '../models';
export interface IMapItemResult<TContentItem extends IContentItem = IContentItem> {
    item: TContentItem;
    processedItems: IContentItemsContainer;
    preparedItems: IContentItemWithRawDataContainer;
    processingStartedForCodenames: string[];
}
export interface IMultipleItemsMapResult<TContentItem extends IContentItem = IContentItem> {
    items: TContentItem[];
    linkedItems: IContentItemsContainer;
}
export interface ISingleItemMapResult<TContentItem extends IContentItem = IContentItem> {
    item: TContentItem;
    linkedItems: IContentItemsContainer;
}
export declare class ItemMapper {
    readonly config: IDeliveryClientConfig;
    private readonly elementMapper;
    constructor(config: IDeliveryClientConfig);
    /**
     * Maps single item to its proper strongly typed model from the given response
     * @param response Response used to map the item
     * @param queryConfig Query configuration
     */
    mapSingleItemFromResponse<TContentItem extends IContentItem = IContentItem>(response: Contracts.IViewContentItemContract): ISingleItemMapResult<TContentItem>;
    /**
     * Maps multiple items to their strongly typed model from the given  response
     * @param response Response used to map the item
     * @param queryConfig Query configuration
     */
    mapMultipleItemsFromResponse<TContentItem extends IContentItem = IContentItem>(response: Contracts.IItemsWithModularContentContract): IMultipleItemsMapResult<TContentItem>;
    /**
     * Maps item contracts to full models
     */
    mapItems<TContentItem extends IContentItem = IContentItem>(data: {
        mainItems: Contracts.IContentItemContract[];
        linkedItems: Contracts.IContentItemContract[];
    }): IMultipleItemsMapResult<TContentItem>;
    /**
     * Maps item contract to full model
     */
    private mapItem;
    private createContentItem;
}
