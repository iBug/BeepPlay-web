const fs = require("fs");
const path = require("path");

const BASE = "public/examples";
const files = fs.readdirSync(BASE).filter((s) => !s.endsWith(".json")).sort();
const index = {
  files: files,
  default: "Stardew Valley Overture (Chord).txt",
};

fs.writeFileSync(path.join(BASE, "index.json"), JSON.stringify(index, null, 2));
