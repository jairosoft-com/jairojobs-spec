/**
 * Artifical Intelligence APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, Schema } from '../schema';

/**
 * Billing and rate-limit usage.
 *  Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.
 *  Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in usage will not match one-to-one with the exact visible content of an API request or response.
 *  For example, output_tokens will be non-zero, even for an empty string response from Claude.
 */
export interface Usage {
  /** The number of input tokens which were used. */
  inputTokens: number;
  /** (prompt caching beta) The number of input tokens used to create the cache entry. */
  cacheCreationInputTokens: number | null;
  /** (prompt caching beta) The number of input tokens used to read the cache. */
  cacheReadInputTokens: number | null;
  /** The number of output tokens which were used. */
  outputTokens: number;
}

export const usageSchema: Schema<Usage> = object({
  inputTokens: ['input_tokens', number()],
  cacheCreationInputTokens: ['cache_creation_input_tokens', nullable(number())],
  cacheReadInputTokens: ['cache_read_input_tokens', nullable(number())],
  outputTokens: ['output_tokens', number()],
});
