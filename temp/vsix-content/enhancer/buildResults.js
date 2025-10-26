var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "azure-devops-extension-sdk", "azure-devops-extension-api/Build", "jquery"], function (require, exports, SDK, Build_1, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuildResultsSection = void 0;
    SDK = __importStar(SDK);
    jquery_1 = __importDefault(jquery_1);
    class BuildResultsSection {
        constructor() {
            this.quotes = [
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
            this._element = (0, jquery_1.default)(".build-status");
        }
        initialize() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield SDK.init();
                    yield SDK.ready();
                    const config = SDK.getConfiguration();
                    const extensionContext = SDK.getExtensionContext();
                    console.log("--- Extension version: " + extensionContext.version);
                    console.log(`--- Publisher.Extension: ${extensionContext.publisherId}.${extensionContext.id}`);
                    const n = Math.floor(Math.random() * this.quotes.length);
                    this._quote = this.quotes[n];
                    this._element.find("#quote").text(this._quote);
                    if (config && config.onBuildChanged) {
                        config.onBuildChanged((build) => {
                            this._updateBuildStatus(build);
                        });
                    }
                    SDK.notifyLoadSucceeded();
                }
                catch (error) {
                    console.error("Error initializing Chuck Norris extension:", error);
                    SDK.notifyLoadFailed(error);
                }
            });
        }
        _updateBuildStatus(build) {
            let imgSource = "images/chuck-wait.png";
            if (build.status === Build_1.BuildStatus.InProgress) {
                imgSource = "images/chuck-wait.png";
                this._element.find("#quote").text("Working on it...");
            }
            else if (build.status === Build_1.BuildStatus.Completed) {
                if (build.result === Build_1.BuildResult.Succeeded) {
                    imgSource = "images/chuck-ok.png";
                }
                else if (build.result === Build_1.BuildResult.PartiallySucceeded) {
                    imgSource = "images/chuck-warning.png";
                }
                else if (build.result === Build_1.BuildResult.Failed) {
                    imgSource = "images/chuck-error.png";
                }
                this._element.find("#quote").text(this._quote);
            }
            this._element.find("#status-img").attr("src", imgSource);
        }
    }
    exports.BuildResultsSection = BuildResultsSection;
    // Initialize the extension
    const buildResultsSection = new BuildResultsSection();
    buildResultsSection.initialize();
});
