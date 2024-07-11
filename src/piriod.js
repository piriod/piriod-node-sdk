const axios = require('axios')
const Resource = require('./api/resource')

const baseURL = 'https://api.piriod.com'

/**
 * Represents the Piriod SDK.
 * @class
 */
class Piriod {
  /**
   * Creates an instance of Piriod.
   * @constructor
   * @param {Object} options - The options for initializing the Piriod SDK.
   * @param {string} options.apiKey - The API key for authentication.
   * @param {string} options.organizationID - The ID of the organization.
   */
  constructor({ apiKey, organizationID }) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        'Authorization': `Token ${apiKey}`,
        'X-Simple-Workspace': organizationID,
        'Content-Type': 'application/json'
      }
    })

    this.resource = new Resource(this.client)
  }
}

module.exports = Piriod
