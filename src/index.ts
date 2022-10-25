export * from './my-counter';
export * from './my-progress';
export * from './my-search';

import { triProgress } from './my-progress';

import {
  fastProgress,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";


provideFASTDesignSystem().register(
  fastProgress(),
  // triProgress()
);