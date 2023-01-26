import {interviewsCards} from "./rm/interviews";
import {onboardingCards} from "./rm/onboarding";
import {pdpCards} from "./rm/pdp";
import {peopleManagement} from "./rm/people-management";
import {generalCards} from "./rm/general";
import {rmRoleCards} from "./rm/rm-role";
import {projectInvolment} from "./rm/project-involment";
import {kpisCards} from "./rm/kpis";

export const RmCards = [
  ...interviewsCards,
  ...onboardingCards,
  ...pdpCards,
  ...peopleManagement,
  ...rmRoleCards,
  ...projectInvolment,
  ...kpisCards,
  ...generalCards,
];
