const { handleError } = require('../errors')
const { validateResource } = require('../validators')

class Resource {
  /**
   * Represents a resource.
   * @constructor
   * @param {Client} client - The client object.
   */

  constructor(client) {
    this.client = client
  }

  /**
   * Creates a new resource.
   *
   * @param {string} resource - The resource endpoint.
   * @param {object} data - The data to be sent for creating the resource.
   * @param {string} [action=null] - The action to perform on the resource.
   * @param {string} [id=null] - The ID of the resource to perform the action on.
   * @returns {Promise<object>} - A promise that resolves to the created resource.
   */
  async create(resource, data, action = null, id = null) {
    validateResource(resource)

    let path = `/${resource}/`

    // if an ID is provided, append it to the path
    // for example, /resource/:id/
    if (id) {
      path += id + '/'
    }

    // if an action is provided, append it to the path
    // for example, /resource/action
    // or /resource/:id/action if an ID is provided
    if (action) {
      path += action + '/'
    }

    try {
      const response = await this.client.post(path, data)
      return response.data
    } catch (error) {
      handleError(error)
    }
  }

  /**
   * Updates a resource with the specified ID.
   *
   * @param {string} resource - The resource name.
   * @param {string} id - The ID of the resource to update.
   * @param {object} data - The data to update the resource with.
   * @returns {Promise<object>} - A promise that resolves to the updated resource data.
   */
  async update(resource, id, data) {
    validateResource(resource)
    try {
      const response = await this.client.put(`/${resource}/${id}/`, data)
      return response.data
    } catch (error) {
      handleError(error)
    }
  }

  /**
   * Deletes a resource by its ID.
   *
   * @param {string} resource - The resource name.
   * @param {string} id - The ID of the resource to delete.
   * @returns {Promise<any>} A promise that resolves to the deleted resource data.
   */
  async delete(resource, id) {
    validateResource(resource)
    try {
      const response = await this.client.delete(`/${resource}/${id}/`)
      return response.data
    } catch (error) {
      handleError(error)
    }
  }

  async get(resource, id = null, action = null) {
    validateResource(resource)

    let path = `/${resource}/`

    // if an ID is provided, append it to the path
    // for example, /resource/:id/
    if (id) {
      path += id + '/'
    }

    // if an action is provided, append it to the path
    // for example, /resource/action
    // or /resource/:id/action if an ID is provided
    if (action) {
      path += action + '/'
    }

    try {
      const response = await this.client.get(path)
      return response.data
    } catch (error) {
      handleError(error)
    }
  }

  /**
   * Retrieves a list of resources.
   *
   * @param {string} resource - The name of the resource.
   * @param {Object} [query={}] - The query parameters for filtering the list.
   * @param {string} [action=null] - The action to perform on the resource.
   * @param {string} [id=null] - The ID of the resource to perform the action on.
   * @returns {Promise<Array>} - A promise that resolves to an array of resources.
   */
  async list(resource, query = {}, action = null, id = null) {
    validateResource(resource)

    let path = `/${resource}/`

    // if an ID is provided, append it to the path
    // for example, /resource/:id/
    if (id) {
      path += id + '/'
    }

    // if an action is provided, append it to the path
    // for example, /resource/action
    // or /resource/:id/action if an ID is provided
    if (action) {
      path += action + '/'
    }

    try {
      const response = await this.client.get(path, { params: query })
      return response.data
    } catch (error) {
      handleError(error)
    }
  }
}

module.exports = Resource
