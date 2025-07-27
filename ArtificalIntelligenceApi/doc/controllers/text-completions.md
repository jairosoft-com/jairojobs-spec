# Text Completions

```ts
const textCompletionsController = new TextCompletionsController(client);
```

## Class Name

`TextCompletionsController`


# Create Text Completion

```ts
async createTextCompletion(  anthropicVersion: string,
  body: CreateTextCompletionRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<CreateTextCompletionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `anthropicVersion` | `string` | Header, Required | The version of the Anthropic API you want to use. |
| `body` | [`CreateTextCompletionRequest`](../../doc/models/create-text-completion-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTextCompletionResponse`](../../doc/models/create-text-completion-response.md)

## Example Usage

```ts
const anthropicVersion = 'anthropic-version4';

const body: CreateTextCompletionRequest = {
  model: 'claude-2.1',
  prompt: '\n\nHuman: Hello, Claude\n\nAssistant:',
  maxTokensToSample: 1024,
};

try {
  const { result, ...httpResponse } = await textCompletionsController.createTextCompletion(
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

