
# Image Content

## Structure

`ImageContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `source` | [`Source`](../../doc/models/source.md) | Required | The image source |
| `type` | [`Type3Enum`](../../doc/models/type-3-enum.md) | Required | The type of content. |
| `cacheControl` | [`CacheControl \| null \| undefined`](../../doc/models/cache-control.md) | Optional | - |

## Example (as JSON)

```json
{
  "source": {
    "type": "base64",
    "media_type": "image/jpeg",
    "data": "data4"
  },
  "type": "image",
  "cache_control": {
    "type": "ephemeral"
  }
}
```

