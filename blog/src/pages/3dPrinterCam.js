import * as React from "react";
import { useEffect } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from 'gatsby';

const CameraStream = ({ pageTitle, pageHeading }) => {
    const imgUrl = 'http://192.168.50.33/html/cam_pic.php';

    useEffect(() => {
        const imgElement = document.getElementById('cameraStream');

        const refreshImage = (interval) => {
            setInterval(() => {
                imgElement.src = imgUrl + '?time=' + new Date().getTime();
            }, interval);
        };

        refreshImage(1000);
    }, [imgUrl]);

    return (
        <Layout>
            <Seo title={pageTitle || "3d Printer Cam"} />
            <div id="heading-div" className="centered">
                <div className="title_header">
                    <div className="page_title">
                        <h2> {pageHeading || "3d Printer Cam"}
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                <p>
                    Live stream of a camera attached to my 3D printer; useful if you'd like to watch what I am building while it builds
                </p>
            </div>

            <div style={{ margin: 0, padding: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    id="cameraStream"
                    src={imgUrl}
                    alt="Raspberry Pi Camera Stream"
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
            </div>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
};

export default CameraStream;
