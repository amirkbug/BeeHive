import InputContainer from "../../ui/molecules/InputContainer";

function DataProviderForm({
  dataProvider,
  selectedTypeInverse,
  errors,
  register,
}) {
  if (dataProvider === "custom_api") {
    return (
      <>
        <InputContainer
          hasError={Boolean(errors.api_endpoint)}
          inputId="api_endpoint"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>API Endpoint</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="https://api.example.com/data"
            {...register("api_endpoint", {
              required: "API endpoint is required.",
              validate: (value) => {
                try {
                  const url = new URL(value);

                  return (
                    ["http:", "https:"].includes(url.protocol) ||
                    "Endpoint must use HTTP or HTTPS."
                  );
                } catch {
                  return "Please enter a valid URL.";
                }
              },
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.api_endpoint?.message ||
              "Enter the URL of the API endpoint that provides your data."}
          </InputContainer.InputTxt>
        </InputContainer>
        <InputContainer
          hasError={Boolean(errors.api_key)}
          inputId="api_key"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>API Key</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            type="password"
            placeholderText="Enter your API key"
            {...register("api_key", {
              required: "API key is required.",
              minLength: {
                value: 8,
                message: "API key must contain at least 8 characters.",
              },
              maxLength: {
                value: 256,
                message: "API key must not exceed 256 characters.",
              },
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.api_key?.message ||
              "Enter the authentication key required to access your API."}
          </InputContainer.InputTxt>
        </InputContainer>{" "}
      </>
    );
  }

  if (dataProvider === "google_analytics") {
    return (
      <InputContainer
        hasError={Boolean(errors.property_id)}
        inputId="property_id"
        type={selectedTypeInverse}
      >
        <InputContainer.InputTxt>Property ID</InputContainer.InputTxt>

        <InputContainer.Input
          LeftIcon={null}
          placeholderText="e.g. 123456789"
          {...register("property_id", {
            required: "Google Analytics Property ID is required.",
            pattern: {
              value: /^\d+$/,
              message: "Property ID must contain only numbers.",
            },
          })}
        />

        <InputContainer.InputTxt classNameOnError="text-destructive-500">
          {errors.property_id?.message ||
            "Enter the Google Analytics 4 Property ID you want to connect."}
        </InputContainer.InputTxt>
      </InputContainer>
    );
  }

  if (dataProvider === "shopify") {
    return (
      <InputContainer
        hasError={Boolean(errors.store_url)}
        inputId="store_url"
        type={selectedTypeInverse}
      >
        <InputContainer.InputTxt>Store URL</InputContainer.InputTxt>

        <InputContainer.Input
          LeftIcon={null}
          placeholderText="your-store.myshopify.com"
          {...register("store_url", {
            required: "Shopify store URL is required.",
            pattern: {
              value: /^(?:https?:\/\/)?[a-zA-Z0-9-]+\.myshopify\.com\/?$/i,
              message: "Please enter a valid Shopify store URL.",
            },
          })}
        />

        <InputContainer.InputTxt classNameOnError="text-destructive-500">
          {errors.store_url?.message ||
            "Enter your Shopify store URL to identify your online store."}
        </InputContainer.InputTxt>
      </InputContainer>
    );
  }

  if (dataProvider === "salesforce") {
    return (
      <InputContainer
        hasError={Boolean(errors.salesforce_url)}
        inputId="salesforce_url"
        type={selectedTypeInverse}
      >
        <InputContainer.InputTxt>
          Salesforce Instance URL
        </InputContainer.InputTxt>

        <InputContainer.Input
          LeftIcon={null}
          placeholderText="https://your-domain.my.salesforce.com"
          {...register("salesforce_url", {
            required: "Salesforce instance URL is required.",
            validate: (value) => {
              try {
                const url = new URL(value);

                return (
                  (url.protocol === "https:" &&
                    /\.salesforce\.com$/i.test(url.hostname)) ||
                  "Please enter a valid Salesforce instance URL."
                );
              } catch {
                return "Please enter a valid Salesforce URL.";
              }
            },
          })}
        />

        <InputContainer.InputTxt classNameOnError="text-destructive-500">
          {errors.salesforce_url?.message ||
            "Enter your Salesforce instance URL."}
        </InputContainer.InputTxt>
      </InputContainer>
    );
  }

  if (dataProvider === "hubspot") {
    return (
      <InputContainer
        hasError={Boolean(errors.portal_id)}
        inputId="portal_id"
        type={selectedTypeInverse}
      >
        <InputContainer.InputTxt>Portal ID</InputContainer.InputTxt>

        <InputContainer.Input
          LeftIcon={null}
          placeholderText="e.g. 12345678"
          {...register("portal_id", {
            required: "HubSpot Portal ID is required.",
            pattern: {
              value: /^\d+$/,
              message: "Portal ID must contain only numbers.",
            },
          })}
        />

        <InputContainer.InputTxt classNameOnError="text-destructive-500">
          {errors.portal_id?.message ||
            "Enter your HubSpot Portal ID to identify your account."}
        </InputContainer.InputTxt>
      </InputContainer>
    );
  }

  if (dataProvider === "mysql") {
    return (
      <>
        <InputContainer
          hasError={Boolean(errors.host)}
          inputId="host"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Host</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="e.g. localhost"
            {...register("host", {
              required: "Database host is required.",
              maxLength: {
                value: 255,
                message: "Host must not exceed 255 characters.",
              },
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.host?.message ||
              "Enter the hostname or IP address of your database."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.port)}
          inputId="port"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Port</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            type="number"
            placeholderText="3306"
            {...register("port", {
              required: "Database port is required.",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Port must be at least 1.",
              },
              max: {
                value: 65535,
                message: "Port cannot exceed 65535.",
              },
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.port?.message ||
              "Enter your MySQL database port. Default: 3306."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.database_name)}
          inputId="database_name"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Database Name</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="e.g. sales_db"
            {...register("database_name", {
              required: "Database name is required.",
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.database_name?.message ||
              "Enter the name of your MySQL database."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.username)}
          inputId="username"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Username</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="Enter database username"
            {...register("username", {
              required: "Database username is required.",
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.username?.message || "Enter your database username."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.password)}
          inputId="password"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Password</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            type="password"
            placeholderText="Enter database password"
            {...register("password", {
              required: "Database password is required.",
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.password?.message || "Enter your MySQL database password."}
          </InputContainer.InputTxt>
        </InputContainer>
      </>
    );
  }

  if (dataProvider === "postgresql") {
    return (
      <>
        <InputContainer
          hasError={Boolean(errors.host)}
          inputId="host"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Host</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="e.g. localhost"
            {...register("host", {
              required: "Database host is required.",
              maxLength: {
                value: 255,
                message: "Host must not exceed 255 characters.",
              },
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.host?.message ||
              "Enter the hostname or IP address of your database."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.port)}
          inputId="port"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Port</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            type="number"
            placeholderText="5432"
            {...register("port", {
              required: "Database port is required.",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Port must be at least 1.",
              },
              max: {
                value: 65535,
                message: "Port cannot exceed 65535.",
              },
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.port?.message ||
              "Enter your MySQL database port. Default: 3306."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.database_name)}
          inputId="database_name"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Database Name</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="e.g. sales_db"
            {...register("database_name", {
              required: "Database name is required.",
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.database_name?.message ||
              "Enter the name of your MySQL database."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.username)}
          inputId="username"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Username</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="Enter database username"
            {...register("username", {
              required: "Database username is required.",
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.username?.message || "Enter your database username."}
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer
          hasError={Boolean(errors.password)}
          inputId="password"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Password</InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            type="password"
            placeholderText="Enter database password"
            {...register("password", {
              required: "Database password is required.",
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors.password?.message || "Enter your MySQL database password."}
          </InputContainer.InputTxt>
        </InputContainer>
      </>
    );
  }
}

export default DataProviderForm;
