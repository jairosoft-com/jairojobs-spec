/**
 * Artifical Intelligence APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { ToolChoiceAny, toolChoiceAnySchema } from '../toolChoiceAny';
import { ToolChoiceAuto, toolChoiceAutoSchema } from '../toolChoiceAuto';
import { ToolChoiceTool, toolChoiceToolSchema } from '../toolChoiceTool';

/** This is a container type for one-of types. */
export type CreateMessageRequestToolChoice =
  | ToolChoiceAuto
  | ToolChoiceAny
  | ToolChoiceTool;

export const createMessageRequestToolChoiceSchema: Schema<CreateMessageRequestToolChoice> = oneOf(
  [toolChoiceAutoSchema, toolChoiceAnySchema, toolChoiceToolSchema]
);

export namespace CreateMessageRequestToolChoice {
  /**
   * Validation method to narrow down union type to ToolChoiceAuto type case.
   *
   * This is ToolChoiceAuto case.
   */
  export function isToolChoiceAuto(value: unknown): value is ToolChoiceAuto {
    const validationResult = validateAndMap(value, toolChoiceAutoSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ToolChoiceAny type case.
   *
   * This is ToolChoiceAny case.
   */
  export function isToolChoiceAny(value: unknown): value is ToolChoiceAny {
    const validationResult = validateAndMap(value, toolChoiceAnySchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ToolChoiceTool type case.
   *
   * This is ToolChoiceTool case.
   */
  export function isToolChoiceTool(value: unknown): value is ToolChoiceTool {
    const validationResult = validateAndMap(value, toolChoiceToolSchema);
    return validationResult.errors === false;
  }
}
