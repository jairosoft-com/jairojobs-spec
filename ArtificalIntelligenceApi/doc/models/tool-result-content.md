
# Tool Result Content

## Structure

`ToolResultContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type5Enum`](../../doc/models/type-5-enum.md) | Required | - |
| `toolUseId` | `string` | Required | - |
| `isError` | `boolean \| undefined` | Optional | **Default**: `false` |
| `content` | `string \| undefined` | Optional | - |
| `cacheControl` | [`CacheControl \| null \| undefined`](../../doc/models/cache-control.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "tool_result",
  "tool_use_id": "tool_use_id6",
  "is_error": false,
  "content": "content0",
  "cache_control": {
    "type": "ephemeral"
  }
}
```

