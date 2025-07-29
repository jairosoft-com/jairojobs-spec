# ModelError

Error response schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | HTTP status code. | [default to undefined]
**message** | **string** | A human-readable error message. | [default to undefined]

## Example

```typescript
import { ModelError } from './api';

const instance: ModelError = {
    code,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
