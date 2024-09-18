import {TextField} from "@mui/material";
import {useShapeStore} from "../../state/useShapeStore.tsx";
import {ShapeProperties} from "../../types";
import {Controller, useForm} from "react-hook-form";
import LoadingButton from '@mui/lab/LoadingButton';
import {memo, useState} from "react";
import {BoxService} from "../../api/boxService.ts";
import toast from "react-hot-toast";

const TextFieldMemo = memo(TextField);

export const Form = () => {
    const shapeProps = useShapeStore(state => state.shapeProps);
    const callTrigger = useShapeStore(state => state.callTrigger)
    const {control, handleSubmit, formState: {errors}} = useForm<ShapeProperties>({
        defaultValues: shapeProps,
        mode: "onChange"
    });


    const [loading, setLoading] = useState(false);


    const onSubmit = async (data: ShapeProperties) => {
        setLoading(true);

        try {
            await BoxService.editBox(shapeProps.id, data);
            callTrigger()
        } catch (error: any) {
            toast.error("error")
        } finally {
            setLoading(false);
        }
    };

    return (
        <form action="" className={"form"} onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(shapeProps).map((key, index) => {
                const typedKey = key as keyof ShapeProperties;

                return (
                    <Controller
                        key={index}
                        name={typedKey}
                        control={control}
                        defaultValue={shapeProps[typedKey]}
                        rules={{
                            required: 'true',
                            validate: value => {
                                if (isNaN(value)) {
                                    return "Enter a valid number"
                                }
                                if (Math.abs(value) >= 30) return "The number must be in the range from -30 to 30"
                            }
                        }}
                        render={({field}) => (
                            <TextFieldMemo
                                {...field}
                                fullWidth={true}
                                label={typedKey}
                                size={"small"}
                                variant={"outlined"}
                                type={"text"}
                                helperText={errors[typedKey]?.message}
                                error={!!errors[typedKey]}
                                disabled={typedKey === "id"}
                                inputMode={"numeric"}
                            />
                        )}
                    />
                );
            })}

            <LoadingButton
                type={"submit"}
                variant={"contained"}
                loading={loading}
                disabled={Object.keys(errors).length > 0 || loading}
            >
                Сохранить
            </LoadingButton>
        </form>
    );
};
