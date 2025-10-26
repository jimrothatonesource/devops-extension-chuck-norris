import * as SDK from "azure-devops-extension-sdk";
import { Build, BuildResult, BuildStatus } from "azure-devops-extension-api/Build";
import $ from "jquery";

export class BuildResultsSection {

    private _element: JQuery;

    constructor() {
        this._element = $(".build-status");
    }

    private quotes: string[] = [
        "When Chuck Norris throws exceptions, it’s across the room.",
        "All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds.",
        "Chuck Norris doesn’t have disk latency because the hard drive knows to hurry the hell up.",
        "Chuck Norris writes code that optimizes itself.",
        "Chuck Norris can’t test for equality because he has no equal.",
        "Chuck Norris doesn’t need garbage collection because he doesn’t call .Dispose(), he calls .DropKick().",
        "Chuck Norris’s first program was kill -9.",
        "Chuck Norris burst the dot com bubble.",
        "All browsers support the hex definitions #chuck and #norris for the colors black and blue.",
        "Chuck Norris can write infinite recursion functions…and have them return.",
        "Chuck Norris can solve the Towers of Hanoi in one move.",
        "The only pattern Chuck Norris knows is God Object.",
        "Chuck Norris finished World of Warcraft.",
        "Project managers never ask Chuck Norris for estimations…ever.",
        "Chuck Norris doesn’t use web standards as the web will conform to him.",
        "“It works on my machine” always holds true for Chuck Norris.",
        "Whiteboards are white because Chuck Norris scared them that way.",
        "Chuck Norris doesn’t do Burn Down charts, he does Smack Down charts.",
        "Chuck Norris can delete the Recycling Bin.",
        "Chuck Norris’s beard can type 140 wpm.",
        "Chuck Norris can unit test entire applications with a single assert.",
        "Chuck Norris doesn’t bug hunt as that signifies a probability of failure, he goes bug killing.",
        "Chuck Norris’s keyboard doesn’t have a Ctrl key because nothing controls Chuck Norris.",
        "Chuck Norris CAN divide by 0.",
        "Chuck Norris’ keyboard has 2 keys: 0 and 1.",
        "Chuck Norris can access private methods.",
        "Chuck Norris can instantiate an abstract class.",
        "Chuck Norris does not need to know about class factory pattern.He can instantiate interfaces.",
        "The class object inherits from Chuck Norris",
        "Chuck Norris doesn’t use strongly-typed languages. He uses strong languages.",
        "Chuck Norris knows the last digit of PI.",
        "Chuck Norris doesn’t pair program.",
        "Chuck Norris can write multi-threaded applications with a single thread",
        "There is no Esc key on Chuck Norris’ keyboard, because no one escapes Chuck Norris.",
        "Visual SourceSafe actually works for Chuck Norris.",
        "Chuck Norris can access the DB from the UI",
        "Chuck Norris’ programs never exit, they terminate!",
        "Chuck Norris programs occupy 150% of CPU, even when they are not executing.",
        "Chuck Norris programs do not accept input.",
        "Chuck Norris can spawn threads that complete before they are started."
    ];

    public async initialize(): Promise<void> {
        try {
            await SDK.init();
            await SDK.ready();

            const config = SDK.getConfiguration();
            const extensionContext = SDK.getExtensionContext();
            
            console.log("--- Extension version: " + extensionContext.version);
            console.log(`--- Publisher.Extension: ${extensionContext.publisherId}.${extensionContext.id}`);

            // Set initial random quote and image
            this._element.find("#quote").text(this.getRandomQuote());
            this._element.find("#status-img").attr("src", "images/chuck-ok.png");

            if (config && config.onBuildChanged) {
                config.onBuildChanged((build: Build) => {
                    this._updateBuildStatus(build);
                });
            }

            SDK.notifyLoadSucceeded();
        } catch (error) {
            console.error("Error initializing Chuck Norris extension:", error);
            SDK.notifyLoadFailed(error);
        }
    }

    private _updateBuildStatus(build: Build) {
        let imgSource = "images/chuck-wait.png";
        
        if (build.status === BuildStatus.InProgress) {
            imgSource = "images/chuck-wait.png";
            this._element.find("#quote").text("Working on it...");
        }
        else if (build.status === BuildStatus.Completed) {
            if (build.result === BuildResult.Succeeded) {
                imgSource = "images/chuck-ok.png";
            }
            else if (build.result === BuildResult.PartiallySucceeded) {
                imgSource = "images/chuck-warning.png";
            }
            else if (build.result === BuildResult.Failed) {
                imgSource = "images/chuck-error.png";
            }
            this._element.find("#quote").text(this.getRandomQuote());
        }
        this._element.find("#status-img").attr("src", imgSource);
    }

    private getRandomQuote(): string {
        const n = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[n];
    }
}

// Initialize the extension
const buildResultsSection = new BuildResultsSection();
buildResultsSection.initialize();