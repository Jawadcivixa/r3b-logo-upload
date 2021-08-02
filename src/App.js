import { Suspense, useState } from "react";
// import { Suspense, useRef } from "react";

import "./App.css";
import earth from "./images/earth.png";
import { Box } from "./components/Box";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
	const [baseURL, setBaseURL] = useState(earth);

	const getBase64 = (file) => {
		// Make new FileReader
		let reader = new FileReader();

		// Convert the file to base64 text
		reader.readAsDataURL(file);
		reader.onload = () => setBaseURL(reader.result);
	};

	const handleImageChange = (e) => {
		getBase64(e.target.files[0]);
	};

	const handleImageUpload = (e) => {
		console.log(baseURL);
	};

	return (
		<>
			{/* <input type="file" onChange={handleImageChange} />
			<button onClick={handleImageUpload}>Submit</button>
			<img src={baseURL} alt="img" /> */}
			<div style={{ height: "90vh" }}>
				<Suspense fallback={<h3>Loading...</h3>}>
					<Canvas>
						<OrbitControls enablePan={false} enableRotate={false} />
						<ambientLight />
						<Box image={baseURL} position={[-4, 0, 0]} />
						<Box image={earth} position={[4, 0, -0]} />
					</Canvas>
				</Suspense>
			</div>
			<div>
				<input type="file" onChange={handleImageChange} />
			</div>
		</>
	);
}

export default App;
