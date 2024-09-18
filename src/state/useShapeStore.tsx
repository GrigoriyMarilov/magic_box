import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ShapeProperties } from "../types";

interface ShapeStoreState {
  shapeProps: ShapeProperties | null;
  trigger: number;
}

interface ShapeStoreAction {
  setShapeProps: (value: ShapeProperties) => void;
  callTrigger: () => void;
}

export const useShapeStore = create<ShapeStoreState & ShapeStoreAction>()(
  persist(
    (set) => ({
      trigger: 0,
      shapeProps: null,
      callTrigger: () => set((state) => ({ trigger: state.trigger + 1 })),
      setShapeProps: (value) =>
        set((state) => ({
          shapeProps: state.shapeProps
            ? {
                ...state.shapeProps,
                ...value,
              }
            : { ...value },
        })),
    }),
    {
      name: "shape-storage",
      partialize: (state) => ({ shapeProps: state.shapeProps }),
    },
  ),
);
