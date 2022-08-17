export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      uri: 'mongodb+srv://ShazaibSarwar:mongodb123@cluster0.9hsdy.mongodb.net/TFT_LMS',
    },
    jwt: {
      secret: 'ToPsEcReT!@#$%',
      expiresIn: '1d'
    }
  })
  