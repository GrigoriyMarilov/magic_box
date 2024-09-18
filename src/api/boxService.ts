import {supabase} from "./supabase.ts";
import {PostgrestSingleResponse, PostgrestError} from "@supabase/supabase-js";
import {ShapeProperties} from "../types";






// Тип для универсального ответа API
interface ApiResponse<T> {
    error: null | PostgrestError;
    data: T | null;  // Данные могут быть массивом, объектом или null
    status: number;
    statusText: string;
}

// Сервис для работы с Box
export class BoxService {

    // Получение данных о коробке
    static async getBox(id: number = 1): Promise<ApiResponse<ShapeProperties>> {
        // Используем массив объектов
        const {data, error, status, statusText}: PostgrestSingleResponse<ShapeProperties> = await supabase
            .from("coords")
            .select("*")
            .eq('id', id)
            .single();

        return {data, error, status, statusText};
    }

    // Редактирование данных коробки
    static async editBox(id: number = 1, updatedBox: Partial<ShapeProperties>): Promise<ApiResponse<ShapeProperties>> {
        // Здесь используется PostgrestSingleResponse, так как мы обновляем один объект
        const {data, error, status, statusText}: PostgrestSingleResponse<ShapeProperties> = await supabase
            .from("coords")
            .update(updatedBox)
            .eq('id', id)
            .single();

        return {data, error, status, statusText};
    }
}
