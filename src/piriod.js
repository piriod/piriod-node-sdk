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
    const headers = {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json'
    }

    // if an organization ID is provided, set the workspace header
    if (organizationID) {
      headers['X-Simple-Workspace'] = organizationID
    }

    this.client = axios.create({
      baseURL: baseURL,
      headers: headers
    })

    this.resource = new Resource(this.client)
  }
}

module.exports = Piriod
