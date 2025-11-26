import { Filters, Parameters } from '../../models';
import { BaseListingQuery } from './base-listing-query.class';
export class BaseItemListingQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    /**
     * Empty filter condition
     * @param element Element with empty value
     */
    emptyFilter(element) {
        this.parameters.push(new Filters.EmptyFilter(element));
        return this;
    }
    /**
     * Not empty filter condition
     * @param element Element with non-empty value
     */
    notEmptyFilter(element) {
        this.parameters.push(new Filters.NotEmptyFilter(element));
        return this;
    }
    /**
     * Equals filter condition
     * @param element Element to filter. Example: 'elements.movie'
     * @param value Value to match. Example: 'Kingsman'
     */
    equalsFilter(element, value) {
        this.parameters.push(new Filters.EqualsFilter(element, value));
        return this;
    }
    /**
     * Not equals filter condition
     * @param element Element to filter. Example: 'elements.movie'
     * @param value Value to match. Example: 'Kingsman'
     */
    notEqualsFilter(element, value) {
        this.parameters.push(new Filters.NotEqualsFilter(element, value));
        return this;
    }
    /**
     * All filter
     * @param element Element to filter.
     * @param values Values
     */
    allFilter(element, values) {
        this.parameters.push(new Filters.AllFilter(element, values));
        return this;
    }
    /**
     * Any filter
     * @param element Element to filter.
     * @param values Values
     */
    anyFilter(element, values) {
        this.parameters.push(new Filters.AnyFilter(element, values));
        return this;
    }
    /**
     * Contains filter
     * @param element Element to filter.
     * @param values Values
     */
    containsFilter(element, values) {
        this.parameters.push(new Filters.ContainsFilter(element, values));
        return this;
    }
    /**
     * Greater then filter
     * @param element Element to filter.
     * @param value Value
     */
    greaterThanFilter(element, value) {
        this.parameters.push(new Filters.GreaterThanFilter(element, value));
        return this;
    }
    /**
     * Greater then or equals filter
     * @param element Element to filter.
     * @param value Value
     */
    greaterThanOrEqualFilter(element, value) {
        this.parameters.push(new Filters.GreaterThanOrEqualFilter(element, value));
        return this;
    }
    /**
     * In filter
     * @param element Element to filter.
     * @param values Values
     */
    inFilter(element, values) {
        this.parameters.push(new Filters.InFilter(element, values));
        return this;
    }
    /**
     * Not in filter
     * @param element Element to filter.
     * @param values Values
     */
    notInFilter(element, values) {
        this.parameters.push(new Filters.NotInFilter(element, values));
        return this;
    }
    /**
     * Less then filter
     * @param element Element to filter.
     * @param value Value
     */
    lessThanFilter(element, value) {
        this.parameters.push(new Filters.LessThanFilter(element, value));
        return this;
    }
    /**
     * @param element Element to filter.
     * @param value Value
     */
    lessThanOrEqualFilter(element, value) {
        this.parameters.push(new Filters.LessThanOrEqualFilter(element, value));
        return this;
    }
    /**
     * @param element Element to filter.
     * @param lowerValue Lower value of range (e.g. 2)
     * @param higherValue Higher value of range (e.g. 10)
     */
    rangeFilter(element, lowerValue, higherValue) {
        this.parameters.push(new Filters.RangeFilter(element, lowerValue, higherValue));
        return this;
    }
    /**
     * Limits the number of items returned by query
     * @param limit Number of items to load
     */
    limitParameter(limit) {
        this.parameters.push(new Parameters.LimitParameter(limit));
        return this;
    }
    /**
     * Orders query based on given element and sort order
     * @param element Element by which to order
     * @param sortOrder Asc/Desc order type
     */
    orderParameter(element, sortOrder) {
        this.parameters.push(new Parameters.OrderParameter(element, sortOrder));
        return this;
    }
    /**
     * Sets descending order on given element
     * @param element Element by which to order
     */
    orderByDescending(element) {
        this.parameters.push(new Parameters.OrderParameter(element, 'desc'));
        return this;
    }
    /**
     * Sets Ascending order on given element
     * @param element Element by which to order
     */
    orderByAscending(element) {
        this.parameters.push(new Parameters.OrderParameter(element, 'asc'));
        return this;
    }
    /**
     * Skips the selected number of items
     * @param skip Number of items to skip
     */
    skipParameter(skip) {
        this.parameters.push(new Parameters.SkipParameter(skip));
        return this;
    }
}
//# sourceMappingURL=base-item-listing-query.class.js.map