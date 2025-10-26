var fs = require('fs');
var path = require('path');

var quotes = [
    "When Chuck Norris throws exceptions, it's across the room.",
    "All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds.",
    "Chuck Norris doesn't have disk latency because the hard drive knows to hurry the hell up.",
    "Chuck Norris writes code that optimizes itself.",
    "Chuck Norris can't test for equality because he has no equal.",
    "Chuck Norris doesn't need garbage collection because he doesn't call .Dispose(), he calls .DropKick().",
    "Chuck Norris's first program was kill -9.",
    "Chuck Norris burst the dot com bubble.",
    "All browsers support the hex definitions #chuck and #norris for the colors black and blue.",
    "Chuck Norris can write infinite recursion functions…and have them return.",
    "Chuck Norris can solve the Towers of Hanoi in one move.",
    "The only pattern Chuck Norris knows is God Object.",
    "Chuck Norris finished World of Warcraft.",
    "Project managers never ask Chuck Norris for estimations…ever.",
    "Chuck Norris doesn't use web standards as the web will conform to him.",
    "It works on my machine always holds true for Chuck Norris.",
    "Whiteboards are white because Chuck Norris scared them that way.",
    "Chuck Norris doesn't do Burn Down charts, he does Smack Down charts.",
    "Chuck Norris can delete the Recycling Bin.",
    "Chuck Norris's beard can type 140 wpm.",
    "Chuck Norris can unit test entire applications with a single assert.",
    "Chuck Norris doesn't bug hunt as that signifies a probability of failure, he goes bug killing.",
    "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris.",
    "Chuck Norris CAN divide by 0.",
    "Chuck Norris' keyboard has 2 keys: 0 and 1.",
    "Chuck Norris can access private methods.",
    "Chuck Norris can instantiate an abstract class.",
    "Chuck Norris does not need to know about class factory pattern. He can instantiate interfaces.",
    "The class object inherits from Chuck Norris",
    "Chuck Norris doesn't use strongly-typed languages. He uses strong languages.",
    "Chuck Norris knows the last digit of PI.",
    "Chuck Norris doesn't pair program.",
    "Chuck Norris can write multi-threaded applications with a single thread",
    "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris.",
    "Visual Studio Code actually works for Chuck Norris.",
    "Chuck Norris can access the DB from the UI",
    "Chuck Norris' programs never exit, they terminate!",
    "Chuck Norris programs occupy 150% of CPU, even when they are not executing.",
    "Chuck Norris programs do not accept input.",
    "Chuck Norris can spawn threads that complete before they are started.",
    "Claude calls Chuck Norris for advice."
];

var randomIndex = Math.floor(Math.random() * quotes.length);
var randomQuote = quotes[randomIndex];

// Output to build log
console.log("Chuck Norris says: " + randomQuote);

// Use external Chuck Norris image URL (Azure DevOps doesn't support base64 images)
var chuckImageUrl = "https://static.wikia.nocookie.net/fiveds/images/d/d7/Chuck_Norris.png";

// Create Markdown content for build summary
var markdownContent = "<div style='display: flex; align-items: center; gap: 20px;'>\n";
markdownContent += "<div style='flex: 1;'>\n\n";
markdownContent += "## *\"" + randomQuote + "\"*\n\n";
markdownContent += "---\n\n";
markdownContent += "✅ **Chuck Norris approved this build!**\n\n";
        markdownContent += "</div>\n";
        markdownContent += "<div style='flex-shrink: 0;'>\n\n";
        markdownContent += "<img src='" + chuckImageUrl + "' alt='Chuck Norris' style='width: 150px; height: auto; border-radius: 8px;' />\n\n";
        markdownContent += "</div>\n";
markdownContent += "</div>";

// Write to temp file
var tempDir = process.env.AGENT_TEMPDIRECTORY || process.env.BUILD_STAGINGDIRECTORY || __dirname;
var summaryFile = path.join(tempDir, "chuck-norris-says.md");

try {
    fs.writeFileSync(summaryFile, markdownContent, 'utf8');
    console.log("##vso[task.uploadsummary]" + summaryFile);
    console.log("Chuck Norris summary uploaded to build results");
} catch (error) {
    console.log("Warning: Could not create Chuck Norris summary file: " + error.message);
}

console.log("##[section]Chuck Norris Build Task completed successfully");
