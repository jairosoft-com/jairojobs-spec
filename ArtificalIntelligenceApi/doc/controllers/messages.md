# Messages

```ts
const messagesController = new MessagesController(client);
```

## Class Name

`MessagesController`


# Create Message

```ts
async createMessage(  anthropicVersion: string,
  body: CreateMessageRequest,
  anthropicBeta?: string | null,
requestOptions?: RequestOptions): Promise<ApiResponse<CreateMessageResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `anthropicVersion` | `string` | Header, Required | The version of the Anthropic API you want to use. |
| `body` | [`CreateMessageRequest`](../../doc/models/create-message-request.md) | Body, Required | - |
| `anthropicBeta` | `string \| null \| undefined` | Header, Optional | Optional header to specify the beta version(s) you want to use. If passing multiple, use a comma separated list without spaces, e.g., beta1,beta2. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateMessageResponse`](../../doc/models/create-message-response.md)

## Example Usage

```ts
const anthropicVersion = 'anthropic-version4';

const body: CreateMessageRequest = {
  model: 'claude-3-5-sonnet-20240620',
  messages: [
    {
      role: RoleEnum.User,
      content: 'Hello, world',
    }
  ],
  maxTokens: 1024,
};

try {
  const { result, ...httpResponse } = await messagesController.createMessage(
  anthropicVersion,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error response | [`ErrorResponseError`](../../doc/models/error-response-error.md) |

