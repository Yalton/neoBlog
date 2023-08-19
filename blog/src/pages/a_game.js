import * as React from "react"
import Layout from "../components/layout"
import { useEffect } from 'react';
import Seo from "../components/seo"

import Constants from "../scripts/a_game/constants";
import asciiArt from "../scripts/a_game/ascii";
import Player from "../scripts/a_game/player";
import { Event, Path } from "../scripts/a_game/event";


const GamePage = ({ pageTitle, pageHeading }) => {
    useEffect(() => {
        const scriptPaths = [
            '/scripts/a_game/constants.js',
            '/scripts/a_game/ascii.js',
            '/scripts/a_game/player.js',
            '/scripts/a_game/event.js?v=2',
            '/scripts/a_game/main.js',
        ];

        scriptPaths.forEach((src) => {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        });

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
