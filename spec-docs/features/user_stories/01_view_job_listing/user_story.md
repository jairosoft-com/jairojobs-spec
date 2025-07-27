# User Stories: Job Viewing

## User Story: View Job Search Results

**As a** Job Seeker, **I want** to view a list of jobs that match my search criteria, **so that** I can quickly scan the available opportunities and identify which ones are interesting to me.

**Acceptance Criteria (Scenario-based):**

* **Scenario: Viewing a list of jobs**
  * **Given** a job seeker has performed a search for "Software Engineer",
  * **When** the search results page loads,
  * **Then** a list of jobs matching the criteria is displayed.
  * **And** each job in the list displays the Job Title, Company Name, and Location.
  * **And** the list is paginated if there are more than 10 results.
* **Scenario: Viewing an empty list of jobs**
  * **Given** a job seeker has performed a search that returns no results,
  * **When** the search results page loads,
  * **Then** a message "No jobs found matching your criteria" is displayed.

## User Story: View Job Details

**As a** Job Seeker, **I want** to view the detailed description of a single job from the list, **so that** I can understand the full requirements and responsibilities to decide if I should apply.

**Acceptance Criteria (Checklist):**

* [ ] When a user clicks on a job from the search results list, they are taken to the job details page.
* [ ] The job details page displays the Job Title, Company Name, and Job Location.
* [ ] The job details page displays the full Job Description.
* [ ] The job details page displays the Job Type (e.g., Full-time, Part-time).
* [ ] An "Apply Now" button is visible and clickable.
* [ ] A "Back to Search Results" link is visible and takes the user back to the previous list.
