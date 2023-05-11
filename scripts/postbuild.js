// sourced from https://github.com/yosevu/react-content-script/blob/8f541b5252a2834fea14827e9893e5f8479ff3db/scripts/postbuild.js

const fs = require("fs");
const manifest = require("../public/manifest.json");

/**
 * readFile uses a Regex to filter, match, and return the static file based on
 * the `prefix` and `extension` in the directory based on the `path`.
 *
 * @param {string} path File path relative to the build directory - `'static/js'`
 * @param {string} prefix File prefix for the file name - `'main'`
 * @param {string} extension File extension - 'js'
 * @returns {string} File name - `'main.66848e72.js'`
 */
function readFile(path, prefix, extension) {
  const file = new RegExp(`^${prefix}\.[a-z0-9]+\.${extension}$`);
  return fs
    .readdirSync(`./build/${path}`)
    .filter((filename) => file.test(filename))
    .map((filename) => `${path}/${filename}`)[0];
}

const js = readFile("static/js", "main", "js");
const contentjs = readFile("static/js", "content", "js");
const youbot = readFile("static/media", "youbot", "png");
const closeIcon = readFile("static/media", "close", "svg");

const newManifest = {
  ...manifest,
  content_scripts: [
    {
      ...manifest.content_scripts[0],
      js: [contentjs],
    },
    {
      ...manifest.content_scripts[1],
      js: [js],
    },
  ],
  web_accessible_resources: [
    {
      ...manifest.web_accessible_resources[0],
      resources: [youbot, closeIcon],
    },
  ],
};

fs.writeFileSync("./build/manifest.json", JSON.stringify(newManifest, null, 2));
