
# Create Message Request

## Structure

`CreateMessageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `model` | `string` | Required | The model that will complete your prompt. |
| `messages` | [`Message[]`](../../doc/models/message.md) | Required | - |
| `maxTokens` | `number` | Required | The maximum number of tokens to generate before stopping. |
| `metadata` | [`Metadata \| undefined`](../../doc/models/metadata.md) | Optional | An object describing metadata about the request. |
| `stopSequence` | `string[] \| undefined` | Optional | Custom text sequences that will cause the model to stop generating.<br>Our models will normally stop when they have naturally completed their turn, which will result in a response stop_reason of `end_turn`.<br>If you want the model to stop generating when it encounters custom strings of text, you can use the stop_sequences parameter. If the model encounters one of the custom sequences, the response stop_reason value will be `stop_sequence` and the response stop_sequence value will contain the matched stop sequence. |
| `stream` | `boolean \| undefined` | Optional | Whether to incrementally stream the response using server-sent events. |
| `system` | [`CreateMessageRequestSystem \| undefined`](../../doc/models/containers/create-message-request-system.md) | Optional | This is a container for one-of cases. |
| `temperature` | `number \| undefined` | Optional | Amount of randomness injected into the response.<br>Defaults to 1.0. Ranges from 0.0 to 1.0. Use temperature closer to 0.0 for analytical / multiple choice, and closer to 1.0 for creative and generative tasks.<br>Note that even with temperature of 0.0, the results will not be fully deterministic<br>**Default**: `1` |
| `toolChoice` | [`CreateMessageRequestToolChoice \| undefined`](../../doc/models/containers/create-message-request-tool-choice.md) | Optional | This is a container for one-of cases. |
| `tools` | [`Tool[] \| undefined`](../../doc/models/tool.md) | Optional | - |
| `topK` | `number \| undefined` | Optional | Only sample from the top K options for each subsequent token.<br>Used to remove `long tail` low probability responses. Learn more technical details here.<br>Recommended for advanced use cases only. You usually only need to use temperature. |
| `topP` | `number \| undefined` | Optional | Use nucleus sampling.<br>In nucleus sampling, we compute the cumulative distribution over all the options for each subsequent token in decreasing probability order and cut it off once it reaches a particular probability specified by top_p. You should either alter temperature or top_p, but not both.<br>Recommended for advanced use cases only. You usually only need to use temperature |

## Example (as JSON)

```json
{
  "model": "claude-3-5-sonnet-20240620",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Hello, world"
    }
  ],
  "metadata": {
    "user_id": "user_id4"
  },
  "stop_sequence": [
    "stop_sequence0",
    "stop_sequence1",
    "stop_sequence2"
  ],
  "stream": false,
  "system": "String9",
  "temperature": 117.26
}
```

