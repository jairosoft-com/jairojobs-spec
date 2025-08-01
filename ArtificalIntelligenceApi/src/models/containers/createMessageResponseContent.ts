/**
 * Artifical Intelligence APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  TextContentResponse,
  textContentResponseSchema,
} from '../textContentResponse';
import {
  ToolUseContentResponse,
  toolUseContentResponseSchema,
} from '../toolUseContentResponse';

/** This is a container type for any-of types. */
export type CreateMessageResponseContent =
  | TextContentResponse
  | ToolUseContentResponse;

export const createMessageResponseContentSchema: Schema<CreateMessageResponseContent> = anyOf(
  [textContentResponseSchema, toolUseContentResponseSchema]
);

export namespace CreateMessageResponseContent {
  /**
   * Validation method to narrow down union type to TextContentResponse type case.
   *
   * This is TextContentResponse case.
   */
  export function isTextContentResponse(
    value: unknown
  ): value is TextContentResponse {
    const validationResult = validateAndMap(value, textContentResponseSchema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to ToolUseContentResponse type case.
   *
   * This is ToolUseContentResponse case.
   */
  export function isToolUseContentResponse(
    value: unknown
  ): value is ToolUseContentResponse {
    const validationResult = validateAndMap(
      value,
      toolUseContentResponseSchema
    );
    return validationResult.errors === false;
  }
}
