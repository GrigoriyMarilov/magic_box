import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ShapeProperties } from "../types";

interface ShapeStoreState {
    shapeProps: ShapeProperties;
    trigger: number
}

interface ShapeStoreAction {
    setSides: (value: Partial<ShapeProperties>) => void;
    callTrigger: ()=>void
}

export const useShapeStore = create<ShapeStoreState & ShapeStoreAction>()(
    persist(
        (set) => ({
            trigger : 0,
            shapeProps: {
                length: 1,
                width: 1,
                height: 1,
                id: 1,
            },
            callTrigger: ()=>set((state)=>({trigger: state.trigger + 1})),
            setSides: (value) => set((state) => ({
                shapeProps: {
                    ...state.shapeProps,
                    ...value,
                },
            })),
        }),
        {
            name: "shape-storage",
            partialize: (state) => ({ shapeProps: state.shapeProps }), // сохраняем только shapeProps
        }
    )
);
