import { useShapeStore } from "../state/useShapeStore.tsx";
import { useEffect, useState } from "react";
import { BoxService } from "../api/boxService.ts";
import { PostgrestError } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { ShapeProperties } from "../types";

export const useRemoteShapeProps = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const setShapeProps = useShapeStore((state) => state.setShapeProps);
  const trigger = useShapeStore((state) => state.trigger);
  //Захотел установить дефолтные значения, для того что бы если сервак отвалится все равно отображать фигуру
  const [data, setData] = useState<ShapeProperties>({
    id: 1,
    width: 1,
    height: 1,
    length: 1,
  });

  const onSuccess = (data: ShapeProperties) => {
    setShapeProps(data);
    setData(data);
    setIsSuccess(true);
    trigger === 0
      ? toast.success("connection established")
      : toast.success("box successfully updated!");
  };
  const onError = (error: PostgrestError) => {
    setIsSuccess(false);
    toast.error(
      `something went wrong, analog state is used, new values may not be saved \n additional : ${error.message}`,
      { duration: 5000 },
    );
    console.error("Error fetching box data:", error);
  };
  useEffect(() => {
    const load = async () => {
      console.log("fetch");
      try {
        setIsPending(true);
        const { data, error } = await BoxService.getBox();
        if (error) {
          onError(error);
        } else {
          if (data) {
            onSuccess(data);
          }
        }
      } catch (err) {
        setIsSuccess(false);
        console.error("Unexpected error:", err);
      } finally {
        setIsPending(false);
      }
    };

    load();
  }, [setShapeProps, trigger]);

  return { isPending, isSuccess, data };
};
