import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

import Admins from "./collections/Admins";
import Events from "./collections/Events";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Styles from "./collections/Styles";
import Executives from "./collections/Executives";
import Games from "./collections/Games";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Admins, Events, Users, Media, Executives, Games],
  globals: [Styles],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  admin: {
    user: Admins.slug,
  },
  sharp,
  plugins: [],

});
