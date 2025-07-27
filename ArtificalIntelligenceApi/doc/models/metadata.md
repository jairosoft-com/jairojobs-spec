
# Metadata

An object describing metadata about the request.

## Structure

`Metadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| null \| undefined` | Optional | An external identifier for the user who is associated with the request.<br>This should be a uuid, hash value, or other opaque identifier. Anthropic may use this id to help detect abuse. Do not include any identifying information such as name, email address, or phone number. |

## Example (as JSON)

```json
{
  "user_id": "user_id6"
}
```

