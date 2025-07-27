
# Custom Header Signature



Documentation for accessing and setting credentials for apiKeyAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| x-api-key | `string` | Your unique API key for authentication.<br>This key is required in the header of all API requests, to authenticate your account and access Anthropic's services. Get your API key through the [Console](https://console.anthropic.com/settings/keys). | `xApiKey` |



**Note:** Auth credentials can be set using `customHeaderAuthenticationCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  customHeaderAuthenticationCredentials: {
    'x-api-key': 'x-api-key'
  },
});
```


