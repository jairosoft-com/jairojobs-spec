
# Tool Use Content Response

## Structure

`ToolUseContentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type4Enum`](../../doc/models/type-4-enum.md) | Required | - |
| `id` | `string` | Required | - |
| `name` | `string` | Required | - |
| `input` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "type": "tool_use",
  "id": "id6",
  "name": "name6",
  "input": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

