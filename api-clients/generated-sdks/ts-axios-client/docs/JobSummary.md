# JobSummary

A summary of a job listing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the job. | [optional] [default to undefined]
**title** | **string** | The title of the job. | [optional] [default to undefined]
**company** | **string** | The name of the company posting the job. | [optional] [default to undefined]
**location** | **string** | The location of the job. | [optional] [default to undefined]
**type** | [**JobSummaryJobType**](JobSummaryJobType.md) |  | [optional] [default to undefined]
**remoteOption** | [**JobSummaryRemoteOption**](JobSummaryRemoteOption.md) |  | [optional] [default to undefined]
**postedAt** | **string** | The date the job was posted. | [optional] [default to undefined]

## Example

```typescript
import { JobSummary } from './api';

const instance: JobSummary = {
    id,
    title,
    company,
    location,
    type,
    remoteOption,
    postedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
