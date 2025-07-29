const JobsService = require('./services/JobsService');

async function testJobsService() {
  console.log('Testing JobsService...');
  
  try {
    // Test searchAndListJobs
    console.log('\n1. Testing searchAndListJobs...');
    const searchResult = await JobsService.searchAndListJobs({
      q: 'developer',
      location: 'San Francisco',
      page: 1,
      limit: 5
    });
    console.log('Search result:', JSON.stringify(searchResult, null, 2));
    
    // Test getJobDetails
    console.log('\n2. Testing getJobDetails...');
    const jobDetail = await JobsService.getJobDetails({
      jobId: '123e4567-e89b-12d3-a456-426614174000'
    });
    console.log('Job detail:', JSON.stringify(jobDetail, null, 2));
    
    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testJobsService(); 