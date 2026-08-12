import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const outputDirectory = new URL("../out/", import.meta.url);
const repositoryPath = "";
const textExtensions = new Set([".css", ".html", ".js", ".json", ".txt", ".xml"]);
const publicAssetRoots = ["favicon.svg", "images/", "interfaces/"];

async function* walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory.pathname, entry.name);
    if (entry.isDirectory()) {
      yield* walk(new URL(`${entry.name}/`, directory));
    } else {
      yield path;
    }
  }
}

function prefixPublicAssets(content) {
  let updated = content;

  for (const assetRoot of publicAssetRoots) {
    updated = updated.replaceAll(`"/${assetRoot}`, `"${repositoryPath}/${assetRoot}`);
    updated = updated.replaceAll(`'/${assetRoot}`, `'${repositoryPath}/${assetRoot}`);
    updated = updated.replaceAll(`url(/${assetRoot}`, `url(${repositoryPath}/${assetRoot}`);
  }

  return updated;
}

for await (const path of walk(outputDirectory)) {
  if (!textExtensions.has(extname(path))) continue;

  const original = await readFile(path, "utf8");
  const updated = prefixPublicAssets(original);

  if (updated !== original) {
    await writeFile(path, updated);
  }
}

await writeFile(new URL(".nojekyll", outputDirectory), "");
