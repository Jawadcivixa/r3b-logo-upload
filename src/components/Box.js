import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useThree } from "@react-three/fiber";

export const Box = (props) => {
	const mesh = useRef();
	const texture = useLoader(THREE.TextureLoader, props.image);

	return (
		<mesh ref={mesh} {...props}>
			<boxGeometry args={[5, 5, 1]} />
			<meshStandardMaterial map={texture} />
		</mesh>
	);
};
