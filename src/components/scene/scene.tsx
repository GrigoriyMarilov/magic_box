import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {RotatingBox} from "./rotatingBox.tsx";
import {useRemoteShapeProps} from "../../hooks/useRemoteShapeProps.ts";
import {CircularProgress} from "@mui/material";


export const Scene = () => {
    const {data: sides, isPending} = useRemoteShapeProps()

    return (
        <div id="canvas-container">
            {isPending ?
                <CircularProgress/>
                :
                <Canvas>
                    <ambientLight/>
                    <RotatingBox sides={sides}/>
                    <OrbitControls/>
                </Canvas>
            }

        </div>
    )


}