
# Tool

## Structure

`Tool`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `description` | `string \| undefined` | Optional | Description of what this tool does.<br>Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema. |
| `inputSchema` | [`InputSchema`](../../doc/models/input-schema.md) | Required | - |
| `cacheControl` | [`CacheControl \| null \| undefined`](../../doc/models/cache-control.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "description": "description0",
  "input_schema": {
    "type": "object",
    "properties": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "cache_control": {
    "type": "ephemeral"
  }
}
```

