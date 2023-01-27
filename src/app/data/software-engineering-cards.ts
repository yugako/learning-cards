import {Card} from "../types";
import {programmingParadigmsCards} from "./software-engineering/programming-paradigms";
import {communicationProtocolsCards} from "./software-engineering/communication-protocols";
import {securityCards} from "./software-engineering/security";
import {performanceOptimizationsCards} from "./software-engineering/performance-optimizations";
import {webApplicationDesignCards} from "./software-engineering/web-application-design";
import {angularDeepDiveCards} from "./software-engineering/angular-deep-dive";
import {architectureCards} from "./software-engineering/architecture";
import {patternsCards} from "./software-engineering/patterns";
import {codeQualityCards} from "./software-engineering/code-quality";
import {ciCdGitCards} from "./software-engineering/ci-cd-git";
import {sdlcCards} from "./software-engineering/sdlc";
import {estimationsCards} from "./software-engineering/estimations";

export const softwareEngineeringCards: Array<Card> = [
  ...programmingParadigmsCards,
  ...communicationProtocolsCards,
  ...securityCards,
  ...performanceOptimizationsCards,
  ...webApplicationDesignCards,
  ...angularDeepDiveCards,
  ...architectureCards,
  ...patternsCards,
  ...codeQualityCards,
  ...ciCdGitCards,
  ...sdlcCards,
  ...estimationsCards
];
