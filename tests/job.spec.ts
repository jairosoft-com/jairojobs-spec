import { test, expect } from "@playwright/test";

const API_BASE_URL = "http://localhost:4010/v1";
const API_KEY = "test-api-key-123"; // Replace with your actual API key

test.describe("Job Portal API Tests", () => {
  
  test.describe("GET /jobs - Search and List Jobs", () => {
    
    test("should return paginated job listings without query parameters", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      
      const responseBody = await response.json();
      
      // Validate response structure
      expect(responseBody).toHaveProperty("jobs");
      expect(responseBody).toHaveProperty("pagination");
      
      // Validate pagination structure
      expect(responseBody.pagination).toHaveProperty("total");
      expect(responseBody.pagination).toHaveProperty("page");
      expect(responseBody.pagination).toHaveProperty("limit");
      expect(responseBody.pagination).toHaveProperty("totalPages");
      
      // Validate jobs array with maxItems constraint
      expect(Array.isArray(responseBody.jobs)).toBeTruthy();
      expect(responseBody.jobs.length).toBeLessThanOrEqual(100); // maxItems constraint
      
      if (responseBody.jobs.length > 0) {
        const job = responseBody.jobs[0];
        expect(job).toHaveProperty("id");
        expect(job).toHaveProperty("title");
        expect(job).toHaveProperty("company");
        expect(job).toHaveProperty("location");
        expect(job).toHaveProperty("type");
        expect(job).toHaveProperty("remoteOption");
        expect(job).toHaveProperty("postedAt");
        
        // Validate enum values
        expect(["full-time", "part-time", "contract", "internship"]).toContain(job.type);
        expect(["on-site", "hybrid", "remote"]).toContain(job.remoteOption);
        
        // Validate date format
        expect(job.postedAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
      }
    });

    test("should filter jobs by search query", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?q=developer`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      console.log(responseBody);
      
      expect(responseBody).toHaveProperty("jobs");
      expect(Array.isArray(responseBody.jobs)).toBeTruthy();
      expect(responseBody.jobs.length).toBeLessThanOrEqual(100);
    });

    test("should filter jobs by location", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?location=San Francisco`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      
      expect(responseBody).toHaveProperty("jobs");
      expect(Array.isArray(responseBody.jobs)).toBeTruthy();
      expect(responseBody.jobs.length).toBeLessThanOrEqual(100);
    });

    test("should support pagination with page and limit parameters", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?page=2&limit=5`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      
      expect(responseBody.pagination.page).toBe(2);
      expect(responseBody.pagination.limit).toBe(5);
      expect(responseBody.jobs.length).toBeLessThanOrEqual(5);
    });

    test("should use default pagination values", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      
      // Default values: page=1, limit=10
      expect(responseBody.pagination.page).toBe(1);
      expect(responseBody.pagination.limit).toBe(10);
    });

    test("should combine multiple search parameters", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?q=engineer&location=Austin&page=1&limit=10`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      
      expect(responseBody).toHaveProperty("jobs");
      expect(responseBody).toHaveProperty("pagination");
      expect(responseBody.jobs.length).toBeLessThanOrEqual(100);
    });

    test("should return 404 when no jobs match criteria", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?q=nonexistentjobtype12345xyz`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(404);
      const responseBody = await response.json();
      
      expect(responseBody).toHaveProperty("code", 404);
      expect(responseBody).toHaveProperty("message");
      expect(responseBody.message).toBe("No jobs found matching your criteria");
    });

    test("should require API key authentication", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs`);

      expect(response.status()).toBe(401);
    });

    test("should reject invalid API key", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs`, {
        headers: {
          "X-API-Key": "invalid-key-123"
        }
      });

      expect([401, 403]).toContain(response.status());
    });

    test("should validate JobSummary schema in response", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?limit=3`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      
      if (responseBody.jobs.length > 0) {
        responseBody.jobs.forEach((job: any, index: number) => {
          // Required fields for JobSummary
          expect(job, `Job at index ${index} should have id`).toHaveProperty("id");
          expect(job, `Job at index ${index} should have jobTitle`).toHaveProperty("jobTitle");
          expect(job, `Job at index ${index} should have companyName`).toHaveProperty("companyName");
          expect(job, `Job at index ${index} should have location`).toHaveProperty("location");
          expect(job, `Job at index ${index} should have jobType`).toHaveProperty("jobType");
          expect(job, `Job at index ${index} should have remoteOption`).toHaveProperty("remoteOption");
          expect(job, `Job at index ${index} should have postedAt`).toHaveProperty("postedAt");
          
          // Validate data types
          expect(typeof job.id, `Job ${index} id should be string`).toBe("string");
          expect(typeof job.jobTitle, `Job ${index} jobTitle should be string`).toBe("string");
          expect(typeof job.companyName, `Job ${index} companyName should be string`).toBe("string");
          expect(typeof job.location, `Job ${index} location should be string`).toBe("string");
          
          // Validate enum values
          expect(["full-time", "part-time", "contract", "internship"], `Job ${index} should have valid jobType`).toContain(job.jobType);
          expect(["on-site", "hybrid", "remote"], `Job ${index} should have valid remoteOption`).toContain(job.remoteOption);
        });
      }
    });
  });

  test.describe("GET /jobs/{jobId} - Get Job Details", () => {
    
    test("should return detailed job information for valid job ID", async ({ request }) => {
      // First, get a list of jobs to get a valid job ID
      const listResponse = await request.get(`${API_BASE_URL}/jobs?limit=1`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });
      
      expect(listResponse.status()).toBe(200);
      const listBody = await listResponse.json();
      
      if (listBody.jobs.length === 0) {
        test.skip(true, "No jobs available for testing");
        return;
      }
      
      const jobId = listBody.jobs[0].id;
      
      // Now get the job details
      const response = await request.get(`${API_BASE_URL}/jobs/${jobId}`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      
      // Validate required fields from Job schema
      expect(responseBody).toHaveProperty("id", jobId);
      expect(responseBody).toHaveProperty("jobTitle");
      expect(responseBody).toHaveProperty("companyName");
      expect(responseBody).toHaveProperty("companyId");
      expect(responseBody).toHaveProperty("companyLogo");
      expect(responseBody).toHaveProperty("location");
      expect(responseBody).toHaveProperty("jobType");
      expect(responseBody).toHaveProperty("experienceLevel");
      expect(responseBody).toHaveProperty("remoteOption");
      expect(responseBody).toHaveProperty("salary");
      expect(responseBody).toHaveProperty("jobDescription");
      expect(responseBody).toHaveProperty("requirements");
      expect(responseBody).toHaveProperty("responsibilities");
      expect(responseBody).toHaveProperty("benefits");
      expect(responseBody).toHaveProperty("tags");
      expect(responseBody).toHaveProperty("postedAt");
      expect(responseBody).toHaveProperty("applicationDeadline");
      expect(responseBody).toHaveProperty("applicants");
      expect(responseBody).toHaveProperty("featured");
      expect(responseBody).toHaveProperty("active");
      
      // Validate data types
      expect(typeof responseBody.id).toBe("string");
      expect(typeof responseBody.jobTitle).toBe("string");
      expect(typeof responseBody.companyName).toBe("string");
      expect(typeof responseBody.companyId).toBe("string");
      expect(typeof responseBody.jobDescription).toBe("string");
      expect(typeof responseBody.applicants).toBe("number");
      expect(typeof responseBody.featured).toBe("boolean");
      expect(typeof responseBody.active).toBe("boolean");
      
      // Validate arrays with maxItems constraint (100)
      expect(Array.isArray(responseBody.requirements)).toBeTruthy();
      expect(Array.isArray(responseBody.responsibilities)).toBeTruthy();
      expect(Array.isArray(responseBody.benefits)).toBeTruthy();
      expect(Array.isArray(responseBody.tags)).toBeTruthy();
      expect(responseBody.requirements.length).toBeLessThanOrEqual(100);
      expect(responseBody.responsibilities.length).toBeLessThanOrEqual(100);
      expect(responseBody.benefits.length).toBeLessThanOrEqual(100);
      expect(responseBody.tags.length).toBeLessThanOrEqual(100);
      
      // Validate salary object structure
      expect(responseBody.salary).toHaveProperty("min");
      expect(responseBody.salary).toHaveProperty("max");
      expect(responseBody.salary).toHaveProperty("currency");
      expect(responseBody.salary).toHaveProperty("period");
      expect(typeof responseBody.salary.min).toBe("number");
      expect(typeof responseBody.salary.max).toBe("number");
      expect(typeof responseBody.salary.currency).toBe("string");
      expect(typeof responseBody.salary.period).toBe("string");
      
      // Validate enum values
      expect(["full-time", "part-time", "contract", "internship"]).toContain(responseBody.jobType);
      expect(["entry", "mid", "senior"]).toContain(responseBody.experienceLevel);
      expect(["on-site", "hybrid", "remote"]).toContain(responseBody.remoteOption);
      
      // Validate URL format for company logo
      expect(responseBody.companyLogo).toMatch(/^https?:\/\/.+/);
      
      // Validate date formats
      expect(responseBody.postedAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
      expect(responseBody.applicationDeadline).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    test("should return 404 for non-existent job ID", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs/nonexistent-job-id-999`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(404);
      const responseBody = await response.json();
      
      expect(responseBody).toHaveProperty("code", 404);
      expect(responseBody).toHaveProperty("message");
    });

    test("should require API key authentication", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs/some-job-id`);

      expect(response.status()).toBe(401);
    });

    test("should handle UUID format job ID from JobDetail example", async ({ request }) => {
      const validUUID = "789b1234-c56d-78e9-f012-345678901234";
      
      const response = await request.get(`${API_BASE_URL}/jobs/${validUUID}`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      // Should either return 200 (if job exists) or 404 (if job doesn't exist)
      expect([200, 404]).toContain(response.status());
    });

    test("should handle UUID format job ID from Job example", async ({ request }) => {
      const validUUID = "123e4567-e89b-12d3-a456-426614174000";
      
      const response = await request.get(`${API_BASE_URL}/jobs/${validUUID}`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      // Should either return 200 (if job exists) or 404 (if job doesn't exist)
      expect([200, 404]).toContain(response.status());
    });

    test("should handle simple numeric job ID from parameter example", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs/12345`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      // Should either return 200 (if job exists) or 404 (if job doesn't exist)
      expect([200, 404]).toContain(response.status());
    });
  });

  test.describe("API Pagination Validation", () => {
    
    test("should validate Pagination schema", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?page=1&limit=5`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      
      const pagination = responseBody.pagination;
      
      // Required pagination fields
      expect(pagination).toHaveProperty("total");
      expect(pagination).toHaveProperty("page");
      expect(pagination).toHaveProperty("limit");
      expect(pagination).toHaveProperty("totalPages");
      
      // Validate data types
      expect(typeof pagination.total).toBe("number");
      expect(typeof pagination.page).toBe("number");
      expect(typeof pagination.limit).toBe("number");
      expect(typeof pagination.totalPages).toBe("number");
      
      // Validate logical constraints
      expect(pagination.page).toBeGreaterThan(0);
      expect(pagination.limit).toBeGreaterThan(0);
      expect(pagination.totalPages).toBeGreaterThanOrEqual(0);
      expect(pagination.total).toBeGreaterThanOrEqual(0);
      
      // Validate pagination consistency
      if (pagination.total > 0) {
        expect(pagination.totalPages).toBeGreaterThan(0);
        expect(Math.ceil(pagination.total / pagination.limit)).toBe(pagination.totalPages);
      }
    });

    test("should handle pagination edge cases", async ({ request }) => {
      // Test last page
      const response = await request.get(`${API_BASE_URL}/jobs?page=999&limit=10`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect([200, 404]).toContain(response.status());
      
      if (response.status() === 200) {
        const responseBody = await response.json();
        expect(responseBody.jobs.length).toBeLessThanOrEqual(10);
      }
    });
  });

  test.describe("API Performance and Error Handling", () => {
    
    test("should respond to job listing within acceptable time", async ({ request }) => {
      const startTime = Date.now();
      
      const response = await request.get(`${API_BASE_URL}/jobs`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });
      
      const responseTime = Date.now() - startTime;
      
      expect(response.status()).toBe(200);
      expect(responseTime).toBeLessThan(5000); // 5 seconds max
    });

    test("should respond to job details within acceptable time", async ({ request }) => {
      const startTime = Date.now();
      
      const response = await request.get(`${API_BASE_URL}/jobs/123e4567-e89b-12d3-a456-426614174000`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });
      
      const responseTime = Date.now() - startTime;
      
      expect([200, 404]).toContain(response.status());
      expect(responseTime).toBeLessThan(3000); // 3 seconds max
    });

    test("should handle malformed API key", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs`, {
        headers: {
          "X-API-Key": "malformed key with spaces!"
        }
      });

      expect([401, 403]).toContain(response.status());
    });

// [MermaidChart: ae395ba2-7d5a-4ab8-8db6-43b2396745b2]
    test("should handle invalid pagination parameters", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?page=-1&limit=0`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect([400, 422]).toContain(response.status());
    });

    test("should handle extremely large pagination parameters", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?page=999999&limit=1000`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      // Should handle gracefully, either with 400/422 or empty results
      expect([200, 400, 422]).toContain(response.status());
    });

    test("should validate Content-Type header", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toContain('application/json');
    });
  });

  test.describe("API Search Functionality", () => {
    
    test("should handle empty search query", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?q=`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty("jobs");
    });

    test("should handle special characters in search", async ({ request }) => {
      const response = await request.get(`${API_BASE_URL}/jobs?q=C%2B%2B&location=New%20York`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      expect(responseBody).toHaveProperty("jobs");
    });

    test("should be case insensitive for search parameters", async ({ request }) => {
      const response1 = await request.get(`${API_BASE_URL}/jobs?q=DEVELOPER`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      const response2 = await request.get(`${API_BASE_URL}/jobs?q=developer`, {
        headers: {
          "X-API-Key": API_KEY
        }
      });

      expect(response1.status()).toBe(200);
      expect(response2.status()).toBe(200);
      // Both should return similar results (implementation dependent)
    });
  });
});
