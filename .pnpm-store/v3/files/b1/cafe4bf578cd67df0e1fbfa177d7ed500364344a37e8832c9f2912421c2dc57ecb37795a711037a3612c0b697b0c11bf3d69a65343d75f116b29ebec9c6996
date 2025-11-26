import { SharedModels } from '../shared/shared-models';
import { CollectionContracts } from '../../contracts';
export declare namespace CollectionModels {
    class Collection implements SharedModels.IBaseModel<CollectionContracts.ICollectionContract> {
        id: string;
        name: string;
        codename: string;
        _raw: CollectionContracts.ICollectionContract;
        constructor(data: {
            id: string;
            name: string;
            codename: string;
            _raw: CollectionContracts.ICollectionContract;
        });
    }
    interface ISetCollectionData {
        op: 'addInto' | 'replace' | 'move' | 'remove';
        value?: string | {
            name: string;
            codename?: string;
            externalId?: string;
        };
        after?: SharedModels.IReferenceObject;
        before?: SharedModels.IReferenceObject;
        reference?: SharedModels.IReferenceObject;
        property_name?: string;
    }
}
