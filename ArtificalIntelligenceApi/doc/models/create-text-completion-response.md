
# Create Text Completion Response

## Structure

`CreateTextCompletionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type16Enum`](../../doc/models/type-16-enum.md) | Required | Object type.<br>For Text Completions, this is always `completion`. |
| `id` | `string` | Required | Unique object identifier.<br>The format and length of IDs may change over time. |
| `completion` | `string` | Required | The resulting completion up to and excluding the stop sequences. |
| `stopReason` | [`StopReason1Enum \| null`](../../doc/models/stop-reason-1-enum.md) | Required | The reason that we stopped.<br>This may be one the following values:<br>`stop_sequence`: we reached a stop sequence — either provided by you via the stop_sequences parameter, or a stop sequence built into the model<br>`max_tokens`: we exceeded max_tokens_to_sample or the model's maximum |
| `model` | `string` | Required | The model that handled the request. |

## Example (as JSON)

```json
{
  "completion": " Hello! My name is Claude.",
  "id": "compl_018CKm6gsux7P8yMcwZbeCPw",
  "model": "claude-2.1",
  "stop_reason": "stop_sequence",
  "type": "completion"
}
```

