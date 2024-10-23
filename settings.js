module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    credentialSecret: "my-secret",
    httpAdminRoot: "/admin",
    httpNodeRoot: "/api",
}