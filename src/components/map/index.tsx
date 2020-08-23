import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const MapPage = ({ children }: { children: JSX.Element }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        new Map({
            target: mapRef.current!,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [-672.11954868456, 6711488.817310899],
                zoom: 13
            })
        });
    }, []);

    return (
        <div
            ref={mapRef}
            style={{ width: "100%", height: "100vh" }}
        >{children}</div>
    );
};

export default MapPage;