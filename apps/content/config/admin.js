module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '22a8a0f8b7c1de796f0efc4c7be618ec'),
  },
});
