const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Replace imports starting with ../../ or ../
      // We will look for anything that is importing from our known shared directories
      // like `../ui/`, `../../lib/`, `../Navbar`
      
      const regexes = [
        {
          re: /from\s+["']\.\.\/\.\.\/data\/(.*?)["']/g,
          val: 'from "@/data/$1"'
        },
        {
          re: /from\s+["']\.\.\/\.\.\/lib\/(.*?)["']/g,
          val: 'from "@/lib/$1"'
        },
        {
          re: /from\s+["']\.\.\/ui\/(.*?)["']/g,
          val: 'from "@/components/ui/$1"'
        },
        {
          re: /from\s+["']\.\.\/Navbar["']/g,
          val: 'from "@/components/Navbar"'
        },
        {
          re: /from\s+["']\.\.\/Footer["']/g,
          val: 'from "@/components/Footer"'
        },
        {
          re: /from\s+["']\.\/Navbar["']/g,
          val: 'from "@/components/Navbar"'
        },
        {
          re: /from\s+["']\.\.\/\.\.\/components\/ui\/(.*?)["']/g,
          val: 'from "@/components/ui/$1"'
        }
      ];

      for (const { re, val } of regexes) {
        if (re.test(content)) {
          content = content.replace(re, val);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/modules'));
console.log("Done");
