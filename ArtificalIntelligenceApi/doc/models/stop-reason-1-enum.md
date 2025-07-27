
# Stop Reason 1 Enum

The reason that we stopped.
This may be one the following values:
`stop_sequence`: we reached a stop sequence — either provided by you via the stop_sequences parameter, or a stop sequence built into the model
`max_tokens`: we exceeded max_tokens_to_sample or the model's maximum

## Enumeration

`StopReason1Enum`

## Fields

| Name |
|  --- |
| `MaxTokens` |
| `StopSequence` |

