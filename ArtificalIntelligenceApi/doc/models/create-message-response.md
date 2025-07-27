
# Create Message Response

## Structure

`CreateMessageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique object identifier.<br>The format and length of IDs may change over time. |
| `type` | [`Type14Enum`](../../doc/models/type-14-enum.md) | Required | For Messages, this is always `message` |
| `role` | [`Role1Enum`](../../doc/models/role-1-enum.md) | Required | Conversational role of the generated message.<br>**Default**: `Role1Enum.Assistant` |
| `content` | [`CreateMessageResponseContent[]`](../../doc/models/containers/create-message-response-content.md) | Required | This is Array of a container for any-of cases. |
| `model` | `string` | Required | The model that handled the request. |
| `stopReason` | [`StopReasonEnum \| null`](../../doc/models/stop-reason-enum.md) | Required | The reason that we stopped.<br>This may be one the following values:<br>`end_turn`: the model reached a natural stopping point<br>`max_tokens`: we exceeded the requested max_tokens or the model's maximum<br>`stop_sequence`: one of your provided custom stop_sequences was generated<br>`tool_use`: the model invoked one or more tools<br>In non-streaming mode this value is always non-null. In streaming mode, it is null in the message_start event and non-null otherwise. |
| `stopSequence` | `string \| null` | Required | Which custom stop sequence was generated, if any.<br>This value will be a non-null string if one of your custom stop sequences was generated. |
| `usage` | [`Usage`](../../doc/models/usage.md) | Required | Billing and rate-limit usage.<br>Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.<br>Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in usage will not match one-to-one with the exact visible content of an API request or response.<br>For example, output_tokens will be non-zero, even for an empty string response from Claude. |

## Example (as JSON)

```json
{
  "content": [
    {
      "text": "Hi! My name is Claude.",
      "type": "text"
    }
  ],
  "id": "msg_013Zva2CMHLNnXjNJJKqJ2EF",
  "model": "claude-3-5-sonnet-20240620",
  "role": "assistant",
  "stop_reason": "end_turn",
  "stop_sequence": "stop_sequence2",
  "type": "message",
  "usage": {
    "input_tokens": 2095,
    "output_tokens": 503,
    "cache_read_input_tokens": 142,
    "cache_creation_input_tokens": 62
  }
}
```

