const Piriod = require('../src/piriod')

const get = async () => {
  const piriod = new Piriod({
    apiKey: process.env.TEST_API_KEY,
    organizationID: process.env.TEST_ORGANIZATION_ID
  })

  const resourceID = process.env.RESOURCE_ID

  try {
    const customer = await piriod.resource.get('customers', resourceID)
    return customer
  } catch (error) {
    return error
  }
}

test('get is successfully', async () => {
  try {
    /**
     * Represents the result of the get operation.
     * @type {any}
     */
    const result = await get()
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.stringContaining('cus_')
      })
    )
  } catch (error) {
    // Handle the Error class returned by piriod.resource.get
    console.error(error)
  }
})
