
# Message

## Structure

`Message`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `role` | [`RoleEnum \| undefined`](../../doc/models/role-enum.md) | Optional | The role of the message. |
| `content` | [`MessageContent \| undefined`](../../doc/models/containers/message-content.md) | Optional | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "role": "user",
  "content": "String1"
}
```

