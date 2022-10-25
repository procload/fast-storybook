export * from './my-counter';
export * from './my-progress';
export * from './my-search';

import * as Tri from './index-rollup';
Tri;

import {
  fastProgress,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";


import { triProgress } from './my-progress';

provideFASTDesignSystem().register(
  fastProgress(),
  triProgress()
);