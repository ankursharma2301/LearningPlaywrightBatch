// 
const envName = "staging";
const env = envName.toLowerCase();

let baseUrl;
let apiKeyPrefix;
let timeoutMs;
let description;

switch (env) {
  case "dev":
    baseUrl = "https://dev-api.testingacademy.com";
    apiKeyPrefix = "dev_key_";
    timeoutMs = 10000;
    description = "Development - Unstable, latest code";
    break;
  case "staging":
    baseUrl = "https://staging-api.testingacademy.com";
    apiKeyPrefix = "stg_key_";
    timeoutMs = 8000;
    description = "Staging - Pre-production mirror";
    break;
  case "qa":
    baseUrl = "https://qa-api.testingacademy.com";
    apiKeyPrefix = "qa_key_";
    timeoutMs = 8000;
    description = "QA - Dedicated test environment";
    break;
  case "production":
  case "prod":
    baseUrl = "https://api.testingacademy.com";
    apiKeyPrefix = "prod_key_";
    timeoutMs = 5000;
    description = "Production - Live (read-only tests only!)";
    break;
  default:
    baseUrl = "UNKNOWN";
    apiKeyPrefix = "UNKNOWN";
    timeoutMs = 0;
    description = "Unknown environment: " + envName;
    console.log("❌ ERROR: Invalid environment '" + envName + "'. Use: dev, staging, qa, prod");
}

if (baseUrl !== "UNKNOWN") {
  console.log("🔧 Environment Config");
  console.log("---------------------");
  console.log("Environment : " + env.toUpperCase());
  console.log("Base URL    : " + baseUrl);
  console.log("API Key     : " + apiKeyPrefix + "xxxx-xxxx");
  console.log("Timeout     : " + timeoutMs + "ms");
  console.log("Description : " + description);
}