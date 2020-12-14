module.exports = {
compilers: {
    solc: {
      version: "0.7.1"
}},
  // See <http://truffleframework.com/docs/advanced/>
  // to customize your Truffle configuration!
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4710000,
  },
}
};

