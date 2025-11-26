"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionMapper = exports.SubscriptionMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class SubscriptionMapper extends base_mapper_1.BaseMapper {
    mapSubscriptionProjectsListResponse(response) {
        const subscriptionProjects = response.data.projects.map((m) => this.mapSubscriptionProject(m));
        const pagination = super.mapPagination(response.data.pagination);
        return new responses_1.SubscriptionResponses.SubscriptionProjectsListResponse(super.mapResponseDebug(response), response.data, {
            pagination: pagination,
            items: subscriptionProjects
        });
    }
    mapSubscriptionUsersListResponse(response) {
        const subscriptionProjects = response.data.users.map((m) => this.mapSubscriptionUser(m));
        const pagination = super.mapPagination(response.data.pagination);
        return new responses_1.SubscriptionResponses.SubscriptionUsersListResponse(super.mapResponseDebug(response), response.data, {
            pagination: pagination,
            items: subscriptionProjects
        });
    }
    mapViewSubscriptionProjectResponse(response) {
        return new responses_1.SubscriptionResponses.ViewSubscriptionProjectResponse(super.mapResponseDebug(response), response.data, this.mapSubscriptionProject(response.data));
    }
    mapViewSubscriptionUserResponse(response) {
        return new responses_1.SubscriptionResponses.ViewSubscriptionUserResponse(super.mapResponseDebug(response), response.data, this.mapSubscriptionUser(response.data));
    }
    mapSubscriptionProject(raw) {
        return new models_1.SubscriptionModels.SubscriptionProject({
            environments: raw.environments,
            id: raw.id,
            isActive: raw.is_active,
            name: raw.name,
            _raw: raw
        });
    }
    mapSubscriptionUser(raw) {
        return new models_1.SubscriptionModels.SubscriptionUser({
            email: raw.email,
            hasPendingInvitation: raw.has_pending_invitation,
            id: raw.id,
            firstName: raw.first_name,
            lastName: raw.last_name,
            projects: raw.projects.map((rawProject) => {
                const project = {
                    id: rawProject.id,
                    name: rawProject.name,
                    environments: rawProject.environments.map((rawEnvironment) => {
                        const environment = {
                            id: rawEnvironment.id,
                            name: rawEnvironment.name,
                            isUserActive: rawEnvironment.is_user_active,
                            lastActivityAt: rawEnvironment.last_activity_at
                                ? new Date(rawEnvironment.last_activity_at)
                                : undefined,
                            collectionGroups: rawEnvironment.collection_groups.map((rawCollectionGroup) => {
                                const collectionGroup = {
                                    collections: rawCollectionGroup.collections,
                                    roles: rawCollectionGroup.roles.map((rawRole) => {
                                        const role = {
                                            codename: rawRole.codename,
                                            id: rawRole.id,
                                            languages: rawRole.languages.map((rawLanguage) => {
                                                const language = {
                                                    codename: rawLanguage.codename,
                                                    id: rawLanguage.id,
                                                    isActive: rawLanguage.is_active,
                                                    name: rawLanguage.name
                                                };
                                                return language;
                                            }),
                                            name: rawRole.name
                                        };
                                        return role;
                                    })
                                };
                                return collectionGroup;
                            })
                        };
                        return environment;
                    })
                };
                return project;
            }),
            _raw: raw
        });
    }
}
exports.SubscriptionMapper = SubscriptionMapper;
exports.subscriptionMapper = new SubscriptionMapper();
//# sourceMappingURL=subscription-mapper.js.map