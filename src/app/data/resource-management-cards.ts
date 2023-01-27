import {interviewsCards} from "./resource-management/interviews";
import {onboardingCards} from "./resource-management/onboarding";
import {pdpCards} from "./resource-management/pdp";
import {peopleManagement} from "./resource-management/people-management";
import {generalCards} from "./resource-management/general";
import {rmRoleCards} from "./resource-management/rm-role";
import {projectInvolment} from "./resource-management/project-involment";
import {kpisCards} from "./resource-management/kpis";

export const resourceManagementCards = [
  ...interviewsCards,
  ...onboardingCards,
  ...pdpCards,
  ...peopleManagement,
  ...rmRoleCards,
  ...projectInvolment,
  ...kpisCards,
  ...generalCards,
];
