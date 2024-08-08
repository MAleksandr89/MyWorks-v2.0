import React from 'react';
import { ResultsBlock } from '../ResultsBlock/ResultsBlock';
import { InputBlock } from '../InputBlock/InputBlock';
import styles from './main.module.scss';

export const Main = () => {
    const [value, setValue] = React.useState(0);
    const [result, setResult] = React.useState(0);
    const [checked, setChecked] = React.useState(false);
    const [calculationValue, setCalculationValue] = React.useState();

    const handleSelectNumber = (number) => {
        setValue(prev => prev + number);
    }

    const handleAction = (value) => {
        if (value === 'AC') {
            setValue(0);
            setResult(0);
        } else if (value === '+/-') {
            setValue(String(-viewNumbers))
        } else {
            setValue(String(viewNumbers / 100))
        }
    }

    const calculation = () => {
        if (calculationValue === '=') {
            return
        }
        const values = viewNumbers.split(calculationValue).map(item => Number(item))
        switch (calculationValue) {
            case '÷':
                setResult(result > 0 ? result / values[values.length - 1] : values[0] / values[1])
                break
            case '×':
                setResult(result > 0 ? result * values[values.length - 1] : values[0] * values[1])
                break
            case '-':
                setResult(result > 0 ? result - values[values.length - 1] : values[0] - values[1])
                break
            case '+':
                setResult(result > 0 ? result + values[values.length - 1] : values[0] + values[1])
                break
            default:
                break
        }
    }

    const handleActionsRight = (value) => {
        if (value === '÷') {
            setValue( viewNumbers + ' ÷ ' )
            setCalculationValue('÷')
        } else if (value === '×') {
            setValue( viewNumbers + ' × ' )
            setCalculationValue('×')
        } else if (value === '-') {
            setValue( viewNumbers + ' - ' )
            setCalculationValue('-')
        } else if (value === '+') {
            setValue( viewNumbers + ' + ' )
            setCalculationValue('+')
        } else if (value === '=') {
            calculation()
        }
    }

    let viewNumbers = null;
    if (value) {
        const values = value.split('')
        if (values[0] === '0') {
            values.shift()
        }
        viewNumbers = values.join('');
    }

    return (
        <div
            style={{ backgroundColor: checked ? 'black' : 'white'}}
            className={styles['main-content']}
        >
            <ResultsBlock
                viewNumbers={ viewNumbers }
                result={ result }
                setChecked={ setChecked }
                checked={ checked }
            />
            <InputBlock
                handleSelectNumber={ handleSelectNumber }
                handleAction={ handleAction }
                handleActionsRight={ handleActionsRight }
                checked={ checked }
            />
        </div>
    );
};
