module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "svEoslzLY1sq9FXfXoaFOABb0DGVwJqMKU4X9pvu7kE",
      sites: [
        {
          name: "earthgrade-api",
          id: "8a124947-4f0b-4ffa-9c27-12df969b428e",
          buildHook:
            "https://api.netlify.com/build_hooks/6446629b435d5505a0c4acf3",
          branch: "master",
        },
      ],
    },
  },
});
