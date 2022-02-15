import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    /*it('should render proper info about conversion when PLN -> USD', () => {
        //const action = jest.fn();
        const testCases = [
            { amount: '100', from: 'PLN', to: 'USD' },
            { amount: '20', from: 'PLN', to: 'USD' },
            { amount: '200', from: 'PLN', to: 'USD' },
            { amount: '345', from: 'PLN', to: 'USD' },
          ];

        for(let testObj of testCases) {

            render(<ResultBox  testObj={testObj} />)
            //cleanup()
            
        }
        const output = screen.getByTestId('to-format');
        expect(output).toHaveTextContent('PLN 100.00 = $28.57');       
        expect(output).toHaveTextContent('PLN 20.00 = $5.71');
        expect(output).toHaveTextContent('PLN 200.00 = $57.14');
        expect(output).toHaveTextContent('PLN 345.00 = $98.57');
        
    })*/

    it('should return the same value with the same currencies', () => {
        render(<ResultBox from="USD" to="USD" amount={100} />);
        const output = screen.getByTestId('to-format');
        expect(output).toHaveTextContent('$100.00 = $100.00');
    })
})