module.exports = {
  name: 'my-sandbox',
  api: {
    root: './src/api',
    importAliasRoot: '@/my-sandbox/api',
  },
  components: [
    {
      id: 'Components',
      root: './src/components',
      importAliasRoot: '@/my-sandbox/components',
      cssPrefix: 'my-sandbox',
      default: true,
    },
  ],
  containers: {
    root: './src/containers',
    importAliasRoot: '@/my-sandbox/containers',
  },
  schema: {
    endpoint: process.env.ENDPOINT,
    headers: {}
  }
};
