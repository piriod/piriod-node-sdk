
/**
 * Validates the given resource against a list of valid resources.
 * Throws an error if the resource is invalid.
 *
 * @param {string} resource - The resource to validate.
 * @throws {Error} If the resource is invalid.
 */
const validateResource = (resource) => {
  const validResources = [
    'addons',
    'banks',
    'billers/built_in',
    'bulks/invoices',
    'bulks/retentions',
    'contacts',
    'coupons',
    'creditnotes',
    'customers',
    'debitnotes',
    'invoices',
    'ops',
    'orders',
    'orgunits',
    'payments',
    'plans',
    'products',
    'reminders/pendings',
    'reminders/messages',
    'reminders/templates',
    'reminders/rules',
    'retentions',
    'sources',
    'subscriptions',
    'usages'
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
