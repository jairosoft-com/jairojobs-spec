
# Text Content

## Structure

`TextContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | The text content. |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | The type of content. |
| `cacheControl` | [`CacheControl \| null \| undefined`](../../doc/models/cache-control.md) | Optional | - |

## Example (as JSON)

```json
{
  "text": "text6",
  "type": "text",
  "cache_control": {
    "type": "ephemeral"
  }
}
```

