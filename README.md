# Blog

![Preview banner](/public/preview/banner.png)

# About blog

This work is a representation of what I could do with [`vanilla-extract`](https://vanilla-extract.style/) bundled with [`next`](https://nextjs.org/) & [`typescript`](https://www.typescriptlang.org/) with the usage of [`firebase`](https://firebase.google.com/) as the database. The site is used to share my writing works.

## Installation

> **Note**: I highly suggest you checking out [this post](https://blog.domin.pro/post/my-blog-and-its-documentation) on setting up the blog due to upcoming deprecations including the correct usage of assets.

To run this project locally, you need to have [Node.js](https://nodejs.org/en/) installed on your machine:

```bash
git clone https://github.com/Domin-MND/blog . # clone the repository into the current directory
npm install # for the dependencies installation
npm run build # for the production build
npm start # start the server
```

else you can deploy it on [Vercel](https://vercel.com/) by using its CLI tool:

```bash
npm i -g vercel # install the Vercel CLI tool
vercel # deploy the project
```

## Configuration

To configure this project you need to setup firebase firestore & create web application in the dashboard. After that you need to rename `.env.local-example` to `.env.local` and assign corresponding credentials from the web application configuration e.g.:

```env
API_KEY=PIxbSyDxZK0hbAQCbeCMKpwmD0BthIir_l3emIY
AUTH_DOMAIN=[...].firebaseapp.com
DATABASE_URL=https://[...].firebasedatabase.app
PROJECT_ID=[...]
STORAGE_BUCKET=[...].appspot.com
MESSAGING_SENDER_ID=68100932522
APP_ID=1:38180972112:web:d0b1d9d3cf722598dab06a
MEASUREMENT_ID=G-JRZDNGLFE0
```

> **Note**: The configuration above presented as the example and is incorrect.

## Credits

Highly inspired by [Katerina Limpitsouni website](https://ninalimpi.com). Illustrations are taken from [Humanities](https://humanities.studio)

## Documentation

All the available documentation regarding the creation & maintainability of the project is stated in JSDocs.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.
