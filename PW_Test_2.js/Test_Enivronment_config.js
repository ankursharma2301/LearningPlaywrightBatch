// 
function getEnvironmentConfig(environmentName) {

    let config; // will hold final configuration

    switch (environmentName.toLowerCase()) {

        case "dev":
            const devBaseUrl = "https://dev.api.myapp.com";
            const devApiKeyPrefix = "DEV-";
            const devTimeout = 3000;

            config = {
                baseURL: devBaseUrl,
                apiKeyPattern: devApiKeyPrefix + "XXXX",
                timeout: devTimeout,
                description: "Development environment for internal testing"
            };
            break;

        case "staging":
            const stagingBaseUrl = "https://staging.api.myapp.com";
            const stagingApiKeyPrefix = "STG-";
            const stagingTimeout = 5000;

            config = {
                baseURL: stagingBaseUrl,
                apiKeyPattern: stagingApiKeyPrefix + "XXXX",
                timeout: stagingTimeout,
                description: "Pre-production staging environment"
            };
            break;

        case "qa":
            const qaBaseUrl = "https://qa.api.myapp.com";
            const qaApiKeyPrefix = "QA-";
            const qaTimeout = 4000;

            config = {
                baseURL: qaBaseUrl,
                apiKeyPattern: qaApiKeyPrefix + "XXXX",
                timeout: qaTimeout,
                description: "QA testing environment"
            };
            break;

        case "production":
        case "prod":
            const prodBaseUrl = "https://api.myapp.com";
            const prodApiKeyPrefix = "PROD-";
            const prodTimeout = 8000;

            config = {
                baseURL: prodBaseUrl,
                apiKeyPattern: prodApiKeyPrefix + "SECUREKEY",
                timeout: prodTimeout,
                description: "Live production environment"
            };
            break;

        default:
            console.log("Invalid environment name");
            return;
    }

    console.log("----- Environment Configuration -----");
    console.log("Base URL:", config.baseURL);
    console.log("API Key Pattern:", config.apiKeyPattern);
    console.log("Timeout:", config.timeout, "ms");
    console.log("Description:", config.description);
}

// Example Usage
getEnvironmentConfig("qa");