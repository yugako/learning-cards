import {softwareEngineeringCards} from "../data/software-engineering-cards";
import {resourceManagementCards} from "../data/resource-management-cards";

export const TOPICS_LIST = [
  {
    title: 'Discipline: Software Engineering',
    cards: softwareEngineeringCards,
    path: 'software-engineering'
  },
  {
    title: 'Discipline: Resource Management',
    cards: resourceManagementCards,
    path: 'resource-management'
  }
];

export const TOPICS_MAPPER = {
  'software-engineering': softwareEngineeringCards,
  'resource-management': resourceManagementCards
};
