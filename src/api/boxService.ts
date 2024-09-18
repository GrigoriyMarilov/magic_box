import { supabase } from "./supabase.ts";
import { PostgrestSingleResponse, PostgrestError } from "@supabase/supabase-js";
import { ShapeProperties } from "../types";

interface ApiResponse<T> {
  error: null | PostgrestError;
  data: T | null;
  status: number;
  statusText: string;
}

export class BoxService {
  static async getBox(id: number = 1): Promise<ApiResponse<ShapeProperties>> {
    const {
      data,
      error,
      status,
      statusText,
    }: PostgrestSingleResponse<ShapeProperties> = await supabase
      .from("coords")
      .select("*")
      .eq("id", id)
      .single();

    return { data, error, status, statusText };
  }

  static async editBox(
    id: number = 1,
    updatedBox: Partial<ShapeProperties>,
  ): Promise<ApiResponse<ShapeProperties>> {
    const {
      data,
      error,
      status,
      statusText,
    }: PostgrestSingleResponse<ShapeProperties> = await supabase
      .from("coords")
      .update(updatedBox)
      .eq("id", id)
      .single();
    return { data, error, status, statusText };
  }
}
