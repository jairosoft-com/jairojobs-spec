const fs = require('fs');
const path = require('path');
const vm = require('vm');

const tsFilePath = path.resolve('/Users/jairo/Projects/open-api-playwright/spec-docs/features/user_stories/01_view_job_listing/data.ts');
const jsonFilePath = path.resolve('/Users/jairo/Projects/open-api-playwright/spec-docs/features/user_stories/01_view_job_listing/data.json');

try {
    const tsContent = fs.readFileSync(tsFilePath, 'utf8');

    // Create a sandbox context to safely evaluate the script
    const sandbox = {
        mockCompanies: undefined,
        mockJobs: undefined,
        // Mock types that are not defined
        Company: {},
        Job: {},
        JobFilters: {},
        SortOption: {},
        // The script uses `export`, which is not valid in a normal script.
        // We can just remove it. We also remove the functions.
        exports: {},
        module: { exports: {} },
        require: require,
        __dirname: path.dirname(tsFilePath),
        __filename: tsFilePath
    };
    
    // Prepare the script by removing imports and helper functions
    let scriptContent = tsContent
        .replace(/import.*from.*;/g, '')
        .replace(/export const/g, 'const')
        .replace(/export function[\s\S]*/, '');

    // Use the vm module to execute the script in the sandbox
    vm.createContext(sandbox);
    vm.runInContext(scriptContent, sandbox);

    const finalJson = {
        companies: sandbox.mockCompanies,
        jobs: sandbox.mockJobs,
    };

    fs.writeFileSync(jsonFilePath, JSON.stringify(finalJson, null, 2), 'utf8');
    console.log('Successfully converted data.ts to data.json');

} catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
}
