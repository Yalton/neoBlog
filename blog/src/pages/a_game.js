import * as React from "react"
import Layout from "../components/layout"
import { useEffect } from 'react';
import Seo from "../components/seo"


const GamePage = ({ pageTitle, pageHeading }) => {
    useEffect(() => {
        const scriptPaths = [
            '/scripts/a_game/constants.js',
            '/scripts/a_game/ascii.js',
            '/scripts/a_game/player.js',
            '/scripts/a_game/event.js?v=2',
            '/scripts/a_game/main.js',
        ];

        const loadScript = (src) => new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });

        const loadAllScripts = async () => {
            for (const src of scriptPaths) {
                await loadScript(src);
            }
        };

        loadAllScripts();

        return () => {
            // Clean up by removing the appended scripts when the component unmounts
            scriptPaths.forEach((src) => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) document.body.removeChild(script);
            });
        };
    }, []);

    return (
        <Layout>
            <Seo title={pageTitle || "a_game"} />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        #terminal {
                            background-color: black;
                            color: limegreen;
                            font-family: "Courier New", monospace;
                            padding: 20px;
                            height: 80vh;
                            overflow-y: scroll;
                            white-space: pre-wrap;
                        }

                        #input,
                        #prompt {
                            background-color: black;
                            color: limegreen;
                            font-family: "Courier New", monospace;
                            border: none;
                            width: 100%;
                            box-sizing: border-box;
                        }

                        #prompt {
                            padding: 0 20px;
                        }

                        body,
                        html {
                            margin: 0;
                            padding: 0;
                            height: 100%;
                        }
                    `,
                }}
            />
            <section className="sec_ctr">
                <div className="content_container">
                    <div className="content_block">
                        <div id="terminal">
                            <div id="output"></div>
                        </div>
                        <div id="prompt"></div>
                        <input id="input" type="text" placeholder="Enter command..." />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="a_game" />

export default GamePage;
