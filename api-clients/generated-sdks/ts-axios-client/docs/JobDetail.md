# JobDetail

Detailed information about a job posting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the job. | [optional] [default to undefined]
**title** | **string** | The title of the job. | [optional] [default to undefined]
**company** | **string** | The name of the company posting the job. | [optional] [default to undefined]
**companyId** | **string** | Unique identifier for the company. | [optional] [default to undefined]
**companyLogo** | **string** | URL to the company\&#39;s logo. | [optional] [default to undefined]
**location** | **string** | The location of the job. | [optional] [default to undefined]
**type** | [**JobJobType**](JobJobType.md) |  | [optional] [default to undefined]
**experienceLevel** | [**JobExperienceLevel**](JobExperienceLevel.md) |  | [optional] [default to undefined]
**remoteOption** | [**JobRemoteOption**](JobRemoteOption.md) |  | [optional] [default to undefined]
**salary** | [**JobSalary**](JobSalary.md) |  | [optional] [default to undefined]
**description** | **string** | The full description of the job. | [optional] [default to undefined]
**requirements** | **Array&lt;string&gt;** | List of requirements for the job. | [optional] [default to undefined]
**responsibilities** | **Array&lt;string&gt;** | List of responsibilities for the job. | [optional] [default to undefined]
**benefits** | **Array&lt;string&gt;** | List of benefits for the job. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | List of tags for the job. | [optional] [default to undefined]
**postedAt** | **string** | The date the job was posted. | [optional] [default to undefined]
**applicationDeadline** | **string** | The deadline for applying for the job. | [optional] [default to undefined]
**applicants** | **number** | The number of applicants for the job. | [optional] [default to undefined]
**featured** | **boolean** | Whether the job is featured or not. | [optional] [default to undefined]
**active** | **boolean** | Whether the job is active or not. | [optional] [default to undefined]

## Example

```typescript
import { JobDetail } from './api';

const instance: JobDetail = {
    id,
    title,
    company,
    companyId,
    companyLogo,
    location,
    type,
    experienceLevel,
    remoteOption,
    salary,
    description,
    requirements,
    responsibilities,
    benefits,
    tags,
    postedAt,
    applicationDeadline,
    applicants,
    featured,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
