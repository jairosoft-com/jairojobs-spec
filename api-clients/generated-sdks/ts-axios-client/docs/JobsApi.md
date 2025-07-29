# JobsApi

All URIs are relative to *http://localhost:4010*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getJobDetails**](#getjobdetails) | **GET** /v1/jobs/{jobId} | Get Job Details|
|[**searchAndListJobs**](#searchandlistjobs) | **GET** /v1/jobs | Search and List Jobs|

# **getJobDetails**
> JobDetail getJobDetails()

Retrieves the full details for a specific job posting.

### Example

```typescript
import {
    JobsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let jobId: string; //ID of the job to retrieve. (default to undefined)

const { status, data } = await apiInstance.getJobDetails(
    jobId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobId** | [**string**] | ID of the job to retrieve. | defaults to undefined|


### Return type

**JobDetail**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed information about the job. |  -  |
|**404** | Job not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchAndListJobs**
> SearchAndListJobsResponse200Json searchAndListJobs()

Retrieves a paginated list of job postings, with optional filters for search query and location.

### Example

```typescript
import {
    JobsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let q: string; //A search query to filter jobs by title, company, or description. (optional) (default to undefined)
let location: string; //A location to filter jobs by. (optional) (default to undefined)
let page: number; //The page number to retrieve. (optional) (default to 1)
let limit: number; //The number of jobs to return per page. (optional) (default to 10)

const { status, data } = await apiInstance.searchAndListJobs(
    q,
    location,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | A search query to filter jobs by title, company, or description. | (optional) defaults to undefined|
| **location** | [**string**] | A location to filter jobs by. | (optional) defaults to undefined|
| **page** | [**number**] | The page number to retrieve. | (optional) defaults to 1|
| **limit** | [**number**] | The number of jobs to return per page. | (optional) defaults to 10|


### Return type

**SearchAndListJobsResponse200Json**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A paginated list of jobs. |  -  |
|**401** | Unauthorized. Invalid or missing API key. |  -  |
|**403** | Forbidden. |  -  |
|**404** | Not found. |  -  |
|**406** | Not Acceptable. The requested content type is not supported. |  -  |
|**429** | Too Many Requests. |  -  |
|**0** | An unexpected server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

