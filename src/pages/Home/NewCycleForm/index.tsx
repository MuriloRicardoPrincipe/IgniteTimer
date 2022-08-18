import { FormConteiner, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from 'zod'
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CyclesContext } from "../../../contexts/CycleContext";


export function NewCycleForm(){

    const {activeCycle} = useContext(CyclesContext)
    const {register} = useFormContext()

    return(
        <FormConteiner>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        placeholder="Nome para o seu projeto"
                        list="task-suggestions"
                        disabled={!!activeCycle}
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="React-ts" />
                        <option value="HTML e CSS" />
                        <option value="Back-End com node-js" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        disabled={!!activeCycle}
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutos.</span>
                </FormConteiner>
    )
}