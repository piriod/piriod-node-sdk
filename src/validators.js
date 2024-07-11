
/**
 * Validates the given resource against a list of valid resources.
 * Throws an error if the resource is invalid.
 *
 * @param {string} resource - The resource to validate.
 * @throws {Error} If the resource is invalid.
 */
const validateResource = (resource) => {
  const validResources = [
    'bulks/invoices',
    'bulks/retentions',
    'customers',
    'invoices',
    'payments',
    'sources'
  ]

  if (!validResources.includes(resource)) {
    throw new Error(
      `Invalid resource: ${resource}. Valid resources are: ${validResources.join(
        ', '
      )}`
    )
  }
}

module.exports = {
  validateResource
}
