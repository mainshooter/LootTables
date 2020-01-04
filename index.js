const fs = require('fs');

fs.readFile('LootTables.json', 'utf8', function(err, contents) {
    let parsedJson = JSON.parse(contents);
    let tabels = parsedJson["LootTables"];
    for (let key in tabels) {
      tabels[key]["Enabled"] = true;
      let items = tabels[key]['ItemList'];
      for (let itemKey in items) {
        parsedJson["LootTables"][key]['ItemList'][itemKey]["Min"] *= 2;
        parsedJson["LootTables"][key]['ItemList'][itemKey]["Max"] *= 2;
      }
    }
    fs.writeFile("./fixed.json", JSON.stringify(parsedJson), function() {

    });
});
