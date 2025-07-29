import { JobsApi, Configuration } from 'jairojobsapi';
try {
    const configuration = new Configuration({
        apiKey: 'test-api-key-123'
    });
    const jobsApi = new JobsApi(configuration);
    const result = await jobsApi.searchAndListJobs({
        q: 'developer',
        location: 'remote',
        page: 1,
        limit: 10,
    });
    console.log(result);
}
catch (error) {
    console.log(error);
}
