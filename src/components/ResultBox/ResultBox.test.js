import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    it('should render proper info about conversion when PLN -> USD', () => {
        const testCases = [
            { props: { amount: 100, from: 'PLN', to: 'USD' }, expectedText: 'PLN 100.00 = $28.57' },
            { props: { amount: 20, from: 'PLN', to: 'USD' }, expectedText: 'PLN 20.00 = $5.71' },
            { props: { amount: 200, from: 'PLN', to: 'USD' }, expectedText: 'PLN 200.00 = $57.14' },
            { props: { amount: 345, from: 'PLN', to: 'USD' }, expectedText: 'PLN 345.00 = $98.57' },
        ];

        for(let testObj of testCases) {
            render(<ResultBox {...testObj.props} />)
            const output = screen.getByTestId('to-format');
            expect(output).toHaveTextContent(testObj.expectedText);       
            cleanup()
        }
    });       

    it('should render proper info about conversion when USD -> PLN', () => {
        const testCases = [
            { props: { amount: 100, from: 'USD', to: 'PLN' }, expectedText: '$100.00 = PLN 350.00' },
            { props: { amount: 20, from: 'USD', to: 'PLN' }, expectedText: '$20.00 = PLN 70.00' },
            { props: { amount: 200, from: 'USD', to: 'PLN' }, expectedText: '$200.00 = PLN 700.00' },
            { props: { amount: 345, from: 'USD', to: 'PLN' }, expectedText: '$345.00 = PLN 1,207.50' },
        ];

        for(let testObj of testCases) {
            render(<ResultBox {...testObj.props} />)
            const output = screen.getByTestId('to-format');
            expect(output).toHaveTextContent(testObj.expectedText);       
            cleanup()
        }
    });

    it('should return the same value for the same currencies', () => {
        const testCases = [
            { props: { amount: 100, from: 'PLN', to: 'PLN' }, expectedText: 'PLN 100.00 = PLN 100.00' },
            { props: { amount: 100, from: 'USD', to: 'USD' }, expectedText: '$100.00 = $100.00' }
        ];
        for(let testObj of testCases) {
            render(<ResultBox {...testObj.props} />)
            const output = screen.getByTestId('to-format');
            expect(output).toHaveTextContent(testObj.expectedText);
            cleanup()
        }
    })
})