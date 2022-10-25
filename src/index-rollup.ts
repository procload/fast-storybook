
import {
  fastProgress,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";


import { triProgress } from './my-progress';

provideFASTDesignSystem().register(
  fastProgress(),
  triProgress()
);