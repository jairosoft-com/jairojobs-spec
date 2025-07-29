# SearchAndListJobsResponse200Json

Response schema for searching and listing jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**Array&lt;JobSummary&gt;**](JobSummary.md) | A list of job summaries. | [optional] [default to undefined]
**pagination** | [**Pagination**](Pagination.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SearchAndListJobsResponse200Json } from './api';

const instance: SearchAndListJobsResponse200Json = {
    jobs,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
