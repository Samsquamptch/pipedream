import { IResponse } from '@kontent-ai/core-sdk';
import { SubscriptionContracts } from '../contracts';
import { SubscriptionModels } from '../models';
import { SubscriptionResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class SubscriptionMapper extends BaseMapper {
    mapSubscriptionProjectsListResponse(response: IResponse<SubscriptionContracts.IListSubscriptionProjectsResponseContract>): SubscriptionResponses.SubscriptionProjectsListResponse;
    mapSubscriptionUsersListResponse(response: IResponse<SubscriptionContracts.IListSubscriptionUsersResponseContract>): SubscriptionResponses.SubscriptionUsersListResponse;
    mapViewSubscriptionProjectResponse(response: IResponse<SubscriptionContracts.ISubscriptionProjectContract>): SubscriptionResponses.ViewSubscriptionProjectResponse;
    mapViewSubscriptionUserResponse(response: IResponse<SubscriptionContracts.ISubscriptionUserContract>): SubscriptionResponses.ViewSubscriptionUserResponse;
    mapSubscriptionProject(raw: SubscriptionContracts.ISubscriptionProjectContract): SubscriptionModels.SubscriptionProject;
    mapSubscriptionUser(raw: SubscriptionContracts.ISubscriptionUserContract): SubscriptionModels.SubscriptionUser;
}
export declare const subscriptionMapper: SubscriptionMapper;
