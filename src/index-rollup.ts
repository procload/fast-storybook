import {
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

import { triProgress } from './my-progress';

 export const FASTDesignSystem = provideFASTDesignSystem().register(
  triProgress()
);