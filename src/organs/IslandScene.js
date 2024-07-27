import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
// import sakura from "../assets/sakura.mp3";
import HomeInfo from "../organs/HomeInfo";
// import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../../models/index.old";
const IslandScene = () => {
    // const audioRef = useRef(new Audio(sakura));
    // audioRef.current.volume = 0.4;
    // audioRef.current.loop = true;
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    // useEffect(() => {
    //   if (isPlayingMusic) {
    //     audioRef.current.play();
    //   }
    //   return () => {
    //     audioRef.current.pause();
    //   };
    // }, [isPlayingMusic]);
    const adjustBiplaneForScreenSize = () => {
        let screenScale, screenPosition;
        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        }
        else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }
        return [screenScale, screenPosition];
    };
    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43.4];
        }
        else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -6.5, -43.4];
        }
        return [screenScale, screenPosition];
    };
    const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    return (_jsxs("section", { className: "w-full h-screen relative", children: [_jsx("div", { className: "absolute top-28 left-0 right-0 z-10 flex items-center justify-center", children: currentStage && _jsx(HomeInfo, { currentStage: currentStage }) }), _jsx(Canvas, { className: `w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`, camera: { near: 0.1, far: 1000 }, children: _jsxs(Suspense, { children: [_jsx("directionalLight", { position: [1, 1, 1], intensity: 2 }), _jsx("ambientLight", { intensity: 0.5 }), _jsx("pointLight", { position: [10, 5, 10], intensity: 2 }), _jsx("spotLight", { position: [0, 50, 10], angle: 0.15, penumbra: 1, intensity: 2 }), _jsx("hemisphereLight", { 
                            // skyColor="#b1e1ff"
                            groundColor: "#000000", intensity: 1 }), _jsx(Bird, {}), _jsx(Sky, { isRotating: isRotating }), _jsx(Island, { isRotating: isRotating, setIsRotating: setIsRotating, setCurrentStage: setCurrentStage, position: islandPosition, rotation: [0.1, 4.7077, 0], scale: islandScale }), _jsx(Plane, { isRotating: isRotating, position: biplanePosition, rotation: [0, 20.1, 0], scale: biplaneScale })] }) })] }));
};
export default IslandScene;
