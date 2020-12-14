# release-tag-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that Automatically Copy PR Body to create release tags description draft

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t release-tag-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> release-tag-bot
```

## Contributing

If you have suggestions for how release-tag-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 vilias <vilia_s@hotmail.com>
