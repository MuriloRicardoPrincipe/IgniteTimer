import { Play } from "phosphor-react";
import { CountDownConteiner, FormConteiner, HomeConteiner, MinutesAmountInput, Separator, StartButtonCountDown, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeConteiner>
            <form action="">
                <FormConteiner>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        placeholder="Nome para o seu projeto"
                        list="task-suggestions" 
                    />

                    <datalist id="task-suggestions">
                        <option value="React-ts"/>
                        <option value="HTML e CSS"/>
                        <option value="Back-End com node-js"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutos.</span>
                </FormConteiner>
                <CountDownConteiner>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownConteiner>
                <StartButtonCountDown disabled type="submit">
                    <Play size={24} />
                    Começar
                </StartButtonCountDown>
            </form>


        </HomeConteiner>
    )
}