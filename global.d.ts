import type { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
  interface Window {
    kakao: unknown;
    Kakao?: {
      isInitialized: () => boolean;
      init: (key?: string) => void;
      Share: {
        sendDefault: (options: unknown) => void;
      };
    };
  }
}
