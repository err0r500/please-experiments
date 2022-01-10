module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2c8c268b5193cb7d041eccfe29ffea96'),
  },
});
