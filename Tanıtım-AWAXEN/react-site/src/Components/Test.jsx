import { OrbitControls, RenderTexture } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';

const Test = () => {
    return(
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <mesh>
                <boxGeometry args={[3,3,3]}/>
                <RenderTexture attach="map">
                    <perspectiveCamera makeDefault position={[0,0,0]}/>
                </RenderTexture>
                
            </mesh>
        </Canvas>
    )
}

export default Test