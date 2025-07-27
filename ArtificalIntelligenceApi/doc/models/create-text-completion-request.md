
# Create Text Completion Request

## Structure

`CreateTextCompletionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `model` | `string` | Required | The model that will complete your prompt. |
| `prompt` | `string` | Required | The prompt that you want Claude to complete.<br>For proper response generation you will need to format your prompt using alternating<br><br>Human: and<br><br>Assistant: conversational turns. |
| `maxTokensToSample` | `number` | Required | The maximum number of tokens to generate before stopping.<br>Note that our models may stop before reaching this maximum. This parameter only specifies the absolute maximum number of tokens to generate. |
| `stopSequences` | `string[] \| undefined` | Optional | Sequences that will cause the model to stop generating.<br>Our models stop on `<br><br>Human:`, and may include additional built-in stop sequences in the future. By providing the stop_sequences parameter, you may include additional strings that will cause the model to stop generating. |
| `temperature` | `number \| undefined` | Optional | Amount of randomness injected into the response.<br>Defaults to 1.0. Ranges from 0.0 to 1.0. Use temperature closer to 0.0 for analytical / multiple choice, and closer to 1.0 for creative and generative tasks.<br>Note that even with temperature of 0.0, the results will not be fully deterministic<br>**Default**: `1` |
| `topP` | `number \| undefined` | Optional | Use nucleus sampling.<br>In nucleus sampling, we compute the cumulative distribution over all the options for each subsequent token in decreasing probability order and cut it off once it reaches a particular probability specified by top_p. You should either alter temperature or top_p, but not both.<br>Recommended for advanced use cases only. You usually only need to use temperature |
| `topK` | `number \| undefined` | Optional | Only sample from the top K options for each subsequent token.<br>Used to remove `long tail` low probability responses. Learn more technical details here.<br>Recommended for advanced use cases only. You usually only need to use temperature. |
| `metadata` | [`Metadata \| undefined`](../../doc/models/metadata.md) | Optional | An object describing metadata about the request. |
| `stream` | `boolean \| undefined` | Optional | Whether to incrementally stream the response using server-sent events. |

## Example (as JSON)

```json
{
  "model": "claude-2.1",
  "max_tokens_to_sample": 1024,
  "prompt": "\n\nHuman: Hello, Claude\n\nAssistant:",
  "stop_sequences": [
    "stop_sequences7"
  ],
  "temperature": 174.5,
  "top_p": 113.32,
  "top_k": 144,
  "metadata": {
    "user_id": "user_id4"
  }
}
```

