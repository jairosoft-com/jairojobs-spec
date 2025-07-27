
# Content Request

## Structure

`ContentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | The text content. |
| `type` | [`TypeEnum \| undefined`](../../doc/models/type-enum.md) | Optional | The type of content. |
| `cacheControl` | [`CacheControl \| null \| undefined`](../../doc/models/cache-control.md) | Optional | - |
| `source` | [`Source \| undefined`](../../doc/models/source.md) | Optional | The image source |
| `id` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `input` | `unknown \| undefined` | Optional | - |
| `toolUseId` | `string \| undefined` | Optional | - |
| `isError` | `boolean \| undefined` | Optional | **Default**: `false` |
| `content` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "is_error": false,
  "text": "text6",
  "type": "text",
  "cache_control": {
    "type": "ephemeral"
  },
  "source": {
    "type": "base64",
    "media_type": "image/jpeg",
    "data": "data4"
  },
  "id": "id6"
}
```

