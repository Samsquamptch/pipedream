import { ElementType } from '../elements';
export class ParserHelper {
    constructor() {
        this.sdkResolvedAttributeName = 'data-sdk-resolved';
    }
    getLinkedItem(linkedItems, itemCodename) {
        if (!linkedItems) {
            return undefined;
        }
        return linkedItems.find((m) => m.system.codename === itemCodename);
    }
    tryGetImage(inputElement, linkedItems, imageId) {
        const elementImage = inputElement.images.find((m) => m.imageId === imageId);
        if (elementImage) {
            return elementImage;
        }
        // try to find image in all linked items
        if (linkedItems) {
            for (const linkedItem of linkedItems) {
                for (const elementKey of Object.keys(linkedItem.elements)) {
                    const element = linkedItem.elements[elementKey];
                    if (element.type === ElementType.RichText) {
                        const richTextElement = element;
                        const richTextElementImage = richTextElement.images.find((m) => m.imageId === imageId);
                        if (richTextElementImage) {
                            return richTextElementImage;
                        }
                    }
                }
            }
        }
        return undefined;
    }
    tryGetLink(inputElement, linkedItems, linkId) {
        const elementLink = inputElement.links.find((m) => m.linkId === linkId);
        if (elementLink) {
            return elementLink;
        }
        // try to find link in all linked items
        if (linkedItems) {
            for (const linkedItem of linkedItems) {
                for (const elementKey of Object.keys(linkedItem.elements)) {
                    const element = linkedItem.elements[elementKey];
                    if (element.type === ElementType.RichText) {
                        const richTextElement = element;
                        const richTextElementLink = richTextElement.links.find((m) => m.linkId === linkId);
                        if (richTextElementLink) {
                            return richTextElementLink;
                        }
                    }
                }
            }
        }
        return undefined;
    }
    convertToParserElement(element) {
        const attributes = [];
        for (let i = 0; i < element.attributes.length; i++) {
            const attribute = element.attributes[i];
            attributes.push({
                name: attribute.name,
                value: attribute.value
            });
        }
        return {
            tag: element.tagName,
            setAttribute: (attributeName, attributeValue) => {
                const attribute = element.attributes.getNamedItem(attributeName);
                if (attribute) {
                    attribute.value = attributeValue !== null && attributeValue !== void 0 ? attributeValue : '';
                }
                else {
                    element.setAttribute(attributeName, attributeValue !== null && attributeValue !== void 0 ? attributeValue : '');
                }
            },
            setInnerHtml: (newHtml) => (element.innerHTML = newHtml),
            setOuterHtml: (newHtml) => (element.outerHTML = newHtml),
            html: element.innerHTML,
            text: element.textContent ? element.textContent : undefined,
            attributes: attributes,
            parentElement: element.parentElement ? this.convertToParserElement(element.parentElement) : undefined,
            sourceElement: element
        };
    }
}
export const parserHelper = new ParserHelper();
//# sourceMappingURL=parser.helper.js.map