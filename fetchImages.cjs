const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const prettier = require("prettier");
const path = require("path");

const species = process.argv[2]; // "cats" or "dogs"
if (!["cats", "dogs"].includes(species)) {
  console.error('❌ Please pass "cats" or "dogs" as the first argument.');
  process.exit(1);
}

const inputFile = path.resolve(
  __dirname,
  `./src/Pages/BreedResults/metadata/${species}.ts`
);
const outputFile = path.resolve(
  __dirname,
  `./src/Pages/BreedResults/metadata/${species}.updated.ts`
);

const getWikiImage = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const imageUrl =
      $("table.infobox img").first().attr("src") ||
      $("img").first().attr("src");
    return imageUrl ? `https:${imageUrl}` : null;
  } catch (err) {
    console.error(`Failed to fetch image from ${url}`);
    return null;
  }
};

(async () => {
  const contents = fs.readFileSync(inputFile, "utf-8");
  const jsonMatch = contents.match(
    new RegExp(`export const ${species} = (\\[.*\\]);`, "s")
  );
  if (!jsonMatch) {
    console.error(`❌ Could not parse ${species} array`);
    process.exit(1);
  }

  const dataArray = eval(jsonMatch[1]); // trusted source only

  for (const item of dataArray) {
    if (!item.usefulLink) {
      console.warn(`⚠️  Missing usefulLink for ${item.name}`);
      continue;
    }
    const imageUrl = await getWikiImage(item.usefulLink);
    if (imageUrl) {
      item.image = imageUrl;
      console.log(`✅ ${item.name}: ${imageUrl}`);
    } else {
      console.warn(`⚠️  No image found for ${item.name}`);
    }
  }

  const newContent = `export const ${species} = ${JSON.stringify(dataArray, null, 2)};`;
  const formatted = await prettier.format(newContent, { parser: "typescript" });
  fs.writeFileSync(outputFile, formatted);
  console.log(`🎉 Updated file saved to ${outputFile}`);
})();
