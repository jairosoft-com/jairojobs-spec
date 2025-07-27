
# Usage

Billing and rate-limit usage.
Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.
Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in usage will not match one-to-one with the exact visible content of an API request or response.
For example, output_tokens will be non-zero, even for an empty string response from Claude.

## Structure

`Usage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inputTokens` | `number` | Required | The number of input tokens which were used. |
| `cacheCreationInputTokens` | `number \| null` | Required | (prompt caching beta) The number of input tokens used to create the cache entry. |
| `cacheReadInputTokens` | `number \| null` | Required | (prompt caching beta) The number of input tokens used to read the cache. |
| `outputTokens` | `number` | Required | The number of output tokens which were used. |

## Example (as JSON)

```json
{
  "input_tokens": 56,
  "cache_creation_input_tokens": 164,
  "cache_read_input_tokens": 244,
  "output_tokens": 56
}
```

