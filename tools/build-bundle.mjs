// Builds stylus-import.json: every style in styles/ as a Stylus backup entry, so all of them can be
// installed at once via Stylus > Manage > Import. Stylus compiles each entry from sourceCode on import.
import {createHash} from 'node:crypto';
import {readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const {createParser} = require('usercss-meta');

const root = new URL('..', import.meta.url);
const parser = createParser();

const styles = readdirSync(new URL('styles/', root))
  .filter(f => /\.user\.(less|css|styl)$/.test(f))
  .sort()
  .map(file => {
    const sourceCode = readFileSync(new URL(`styles/${file}`, root), 'utf8').replace(/\r\n?/g, '\n');
    const meta = sourceCode.match(/\/\*\s*==UserStyle==[\s\S]*?==\/UserStyle==\s*\*\//)[0];
    const {metadata} = parser.parse(meta);
    return {
      name: metadata.name,
      enabled: true,
      author: metadata.author,
      description: metadata.description,
      url: metadata.homepageURL,
      updateUrl: metadata.updateURL,
      installDate: Date.now(),
      // Stylus only auto-updates a style whose digest matches its code (SHA-1 of the source for usercss).
      originalDigest: createHash('sha1').update(sourceCode).digest('hex'),
      sourceCode,
      usercssData: metadata,
      sections: [],
    };
  });

writeFileSync(new URL('stylus-import.json', root), JSON.stringify(styles, null, 2) + '\n');
console.log(`stylus-import.json: ${styles.length} styles`);
