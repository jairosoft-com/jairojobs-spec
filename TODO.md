# TODO: Add Developer-Specific Search Variation

## Overview
Add a new variation of the `GET /v1/jobs` endpoint specifically optimized for searching 'developer' jobs. This will provide enhanced search capabilities and better results for developer-specific queries.

## Analysis of Current Implementation

### Current `/v1/jobs` Endpoint
- **Path**: `/v1/jobs`
- **Method**: GET
- **Parameters**:
  - `q` (string, optional): Search query for job title, company, etc.
  - `location` (string, optional): Search for jobs by location
  - `page` (integer, optional, default: 1): Page number
  - `limit` (integer, optional, default: 10): Items per page
- **Response**: `SearchAndListJobsResponse200Json`
- **Operation ID**: `searchAndListJobs`

### Current Test Coverage
- Basic search with `q=developer` (line 54)
- Case-insensitive search (lines 507, 513)
- Location filtering
- Pagination testing
- Error handling

### Existing Developer Jobs in Data
From `data.ts` analysis, there are several developer-related jobs:
- Senior Full Stack Developer
- Junior Backend Developer  
- Mobile Developer
- Frontend Developer
- Junior Developer

## Plan for New Developer-Specific Endpoint

### Option 1: Enhanced Query Parameter Approach
**Path**: `/v1/jobs?role=developer`
**Description**: Add a new `role` parameter to the existing endpoint

#### Changes Required:
1. **OpenAPI Specification Updates** (`openapi.yaml`):
   ```yaml
   parameters:
     - name: role
       in: query
       description: Filter jobs by specific role type (e.g., developer, designer, manager)
       required: false
       schema:
         type: string
         enum: [developer, designer, manager, analyst, engineer]
       example: developer
   ```

2. **Enhanced Response Schema**:
   - Add `role` field to `JobSummary` and `Job` schemas
   - Include role-specific metadata in responses

3. **Test Data Updates** (`data.ts`):
   - Add `role` field to job objects
   - Create role-specific filtering logic
   - Add developer-specific job categories

4. **Test Cases** (`job.spec.ts`):
   ```typescript
   test("should filter jobs by developer role", async ({ request }) => {
     const response = await request.get(`${API_BASE_URL}/jobs?role=developer`, {
       headers: { "X-API-Key": API_KEY }
     });
     // Assertions for developer-specific results
   });
   ```

### Option 2: Dedicated Developer Endpoint
**Path**: `/v1/jobs/developers`
**Description**: Create a specialized endpoint for developer jobs

#### Changes Required:
1. **New OpenAPI Path** (`openapi.yaml`):
   ```yaml
   /v1/jobs/developers:
     get:
       tags: [Jobs]
       summary: Search Developer Jobs
       description: Specialized endpoint for searching developer positions with enhanced filtering
       parameters:
         - name: specialization
           in: query
           description: Developer specialization (frontend, backend, fullstack, mobile, etc.)
           required: false
           schema:
             type: string
             enum: [frontend, backend, fullstack, mobile, devops, data]
         - name: experience
           in: query
           description: Experience level filter
           required: false
           schema:
             type: string
             enum: [junior, mid, senior, lead]
         - name: location
           in: query
           description: Job location
           required: false
           schema:
             type: string
         - name: page
           in: query
           description: Page number
           required: false
           schema:
             type: integer
             default: 1
         - name: limit
           in: query
           description: Items per page
           required: false
           schema:
             type: integer
             default: 10
       responses:
         "200":
           description: List of developer jobs
           content:
             application/json:
               schema:
                 $ref: "#/components/schemas/DeveloperJobsResponse"
         "404":
           description: No developer jobs found
           content:
             application/json:
               schema:
                 $ref: "#/components/schemas/Error"
       operationId: searchDeveloperJobs
   ```

2. **New Response Schema**:
   ```yaml
   DeveloperJobsResponse:
     type: object
     properties:
       jobs:
         type: array
         items:
           $ref: "#/components/schemas/DeveloperJobSummary"
       pagination:
         $ref: "#/components/schemas/Pagination"
       filters:
         type: object
         properties:
           specializations:
             type: array
             items:
               type: string
           experienceLevels:
             type: array
             items:
               type: string
           locations:
             type: array
             items:
               type: string
   ```

3. **Enhanced Job Schema**:
   ```yaml
   DeveloperJobSummary:
     allOf:
       - $ref: "#/components/schemas/JobSummary"
     properties:
       specialization:
         type: string
         enum: [frontend, backend, fullstack, mobile, devops, data]
       experienceLevel:
         type: string
         enum: [junior, mid, senior, lead]
       techStack:
         type: array
         items:
           type: string
       remoteFriendly:
         type: boolean
   ```

### Option 3: Query Parameter Enhancement (Recommended)
**Path**: `/v1/jobs?q=developer&specialization=frontend&experience=senior`
**Description**: Enhance existing endpoint with developer-specific parameters

#### Changes Required:
1. **Enhanced Parameters** (`openapi.yaml`):
   ```yaml
   parameters:
     # Existing parameters...
     - name: specialization
       in: query
       description: Developer specialization filter
       required: false
       schema:
         type: string
         enum: [frontend, backend, fullstack, mobile, devops, data, ui, ux]
     - name: experience
       in: query
       description: Experience level filter
       required: false
       schema:
         type: string
         enum: [junior, mid, senior, lead, principal]
     - name: remote
       in: query
       description: Remote work preference
       required: false
       schema:
         type: string
         enum: [remote, hybrid, on-site, any]
   ```

2. **Enhanced Response**:
   - Add `specialization` and `experience` fields to job schemas
   - Include tech stack information in job summaries
   - Add remote work indicators

3. **Test Data Updates**:
   - Add specialization and experience fields to existing jobs
   - Create more developer-specific job examples
   - Add tech stack arrays to job objects

4. **Comprehensive Test Suite**:
   ```typescript
   test.describe("Developer-Specific Search", () => {
     test("should filter by frontend specialization", async ({ request }) => {
       const response = await request.get(`${API_BASE_URL}/jobs?q=developer&specialization=frontend`);
       // Assertions
     });
     
     test("should filter by senior experience level", async ({ request }) => {
       const response = await request.get(`${API_BASE_URL}/jobs?q=developer&experience=senior`);
       // Assertions
     });
     
     test("should combine multiple developer filters", async ({ request }) => {
       const response = await request.get(`${API_BASE_URL}/jobs?q=developer&specialization=fullstack&experience=mid&remote=remote`);
       // Assertions
     });
   });
   ```

## Implementation Priority

### Phase 1: Basic Enhancement (Week 1)
1. Add `specialization` and `experience` parameters to existing endpoint
2. Update job schemas with new fields
3. Add basic test cases

### Phase 2: Data Enhancement (Week 2)
1. Update all job data with specialization and experience fields
2. Add tech stack information to job objects
3. Create developer-specific job examples

### Phase 3: Advanced Features (Week 3)
1. Add remote work filtering
2. Implement skill-based matching
3. Add comprehensive test coverage

### Phase 4: Documentation & Validation (Week 4)
1. Update API documentation
2. Add user story for developer search
3. Create acceptance criteria
4. Performance testing

## Success Criteria

1. **Functionality**: Developer search returns relevant results
2. **Performance**: Response time < 500ms for typical queries
3. **Coverage**: 90%+ test coverage for new features
4. **Documentation**: Complete API documentation updates
5. **User Experience**: Intuitive parameter combinations

## Risk Assessment

- **Low Risk**: Parameter enhancement approach
- **Medium Risk**: New endpoint creation (requires more testing)
- **High Risk**: Major schema changes (could break existing clients)

## Recommended Approach

**Option 3 (Query Parameter Enhancement)** is recommended because:
- Maintains backward compatibility
- Leverages existing endpoint structure
- Provides flexibility for future enhancements
- Minimal breaking changes
- Easier to implement and test 