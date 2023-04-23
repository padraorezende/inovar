import { calculateForecast } from "../utils/calculateForecast";

test('calculateForecast should return the correct value for a given status', () => {
    const register = {
        id: 1,
        plate: 'ABC1234',
        request: 'TRANSFERÊNCIA UF',
        date: '2022-03-10',
        status: ['EM PRODUÇÃO'],
        secondData: '',
        forecast: '',
        responsible: '',
        obesityservation: '',
    };

    expect(calculateForecast(register.status, register.request)).toEqual("5 dias úteis");

    const newRegister = { ...register, status: [...register.status, "CONCLUÍDO"] };
    expect(calculateForecast(newRegister.status, newRegister.request)).toEqual("OK");

    expect(calculateForecast(["valor não cadastrado"], newRegister.request)).toEqual("");
});
