# Piriod SDK Documentation

## Installation

To use the Piriod SDK in your project, you need to install it via npm. Run the following command in your project directory:

```bash
npm i piriod-sdk
```

## Getting Started
After installing the SDK, you can start using it by requiring it in your project files.

### Importing the SDK
```js
const piriod = require('piriod-sdk');
```

Or using ES6 imports:
```js
import piriod from 'piriod-sdk';
```

## Usage
The Piriod SDK provides a variety of methods to interact with its services. Below are examples of how to use some of the most common methods.

### Method 1: Resource
Description of what Resource does.
```js
piriod.resource.get(resource, id)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

Method 2: Resource
Description of what Resource does.
```js
async function getResource() {
  try {
    const response = await piriod.resource.get(resource, id);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

Configuration

Some methods may require initial configuration. Here's how you can configure the SDK:
```js
const piriod = new Piriod({
  apiKey: 'YOUR_API_KEY',
  organizationID: 'YOUR_ORGANIZATION_ID'
});
```

## Contributing
Contributions are welcome! Please read the contributing guide for more information.

## License
This project is licensed under the MIT License.