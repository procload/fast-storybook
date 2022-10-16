import {
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

export * from './my-counter';
export * from './my-progress';
export 	* from './my-search';
import { triProgress } from './my-progress';

/**
 * Register with the FAST Design System.
 */
 export const FASTDesignSystem = provideFASTDesignSystem().register(
  triProgress()
);