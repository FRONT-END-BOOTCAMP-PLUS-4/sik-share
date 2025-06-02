import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function Tomato(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/tomato.gltf");
  return <primitive object={scene} {...props} />;
}
