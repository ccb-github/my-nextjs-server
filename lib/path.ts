const pathMap = {
	admin: '/admin',
  users: '/users',
  adminChecker: '/admin/checker',
  adminEnterprise: '/admin/enterprise',
  adminQuery: (schemaKey: string) => `/admin/${schemaKey}`,
  adminInsert: (schemaKey: string) => `/admin/${schemaKey}/insert`
} 

export default pathMap