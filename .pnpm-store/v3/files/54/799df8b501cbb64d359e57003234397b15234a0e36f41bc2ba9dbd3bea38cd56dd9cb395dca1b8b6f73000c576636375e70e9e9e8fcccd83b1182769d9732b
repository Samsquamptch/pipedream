import { IDeliveryClientConfig } from '../config';
import { IContentItem, IContentItemsContainer, IMapElementsResult, IContentItemWithRawDataContainer, IContentItemWithRawElements } from '../models';
export declare class ElementMapper {
    private readonly config;
    constructor(config: IDeliveryClientConfig);
    mapElements<TContentItem extends IContentItem = IContentItem>(data: {
        dataToMap: IContentItemWithRawElements;
        processedItems: IContentItemsContainer;
        processingStartedForCodenames: string[];
        preparedItems: IContentItemWithRawDataContainer;
    }): IMapElementsResult<TContentItem> | undefined;
    private mapElement;
    private mapRichTextElement;
    private mapDateTimeElement;
    private mapMultipleChoiceElement;
    private mapNumberElement;
    private mapTextElement;
    private mapAssetsElement;
    private mapTaxonomyElement;
    private mapUnknowElement;
    private mapCustomElement;
    private mapUrlSlugElement;
    private mapLinkedItemsElement;
    private getOrSaveLinkedItemForElement;
    private mapRichTextLinks;
    private getRichTextHtml;
    private getRichTextImages;
    private resolveElementMap;
    private buildElement;
    private canMapLinkedItems;
}
