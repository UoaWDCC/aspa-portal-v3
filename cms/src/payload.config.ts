// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'

import { HomeContent } from './globals/HomeContent';
import { Footer } from './globals/Footer';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // serverURL: 'https://verbose-lamp-xggqrq6rpgjhp4j-4000.app.github.dev',
	// // 🛠️ Required when running inside GitHub Codespaces to prevent
  // // "Invalid Server Actions request" errors caused by mismatched
  // // `origin` and `x-forwarded-host` headers (e.g., localhost vs *.github.dev).
  // //
  // // ✅ This works in combination with `cms/src/middleware.ts`, which overrides headers for /api/* routes.
  // // 🔄 Be sure to update or remove this when deploying to a production or local environment.
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
	globals: [
		HomeContent,
		Footer
	],
  collections: [Users, Media, Events],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  cors: '*',
})
