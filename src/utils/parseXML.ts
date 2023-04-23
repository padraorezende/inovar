import { Registers } from "../types/Registers";
import * as xlsx from 'xlsx';
import { convertDateCelltToBRDateString } from "./date";

const readFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event && event.target && event.target.result) {
                const data = event.target.result;
                if (typeof data === "string") {
                    resolve(data);
                } else {
                    reject(new Error("Invalid file format."));
                }
            } else {
                reject(new Error("Invalid file content."));
            }
        };
        reader.readAsBinaryString(file);
    });
};

const parseSheet = (sheet: xlsx.WorkSheet): Registers[] => {
    const dataArray = xlsx.utils.sheet_to_json(sheet);
    return dataArray.map((item: any) => {
        const plate = item["PLACA"] ?? "";
        const request = item["SOLICITAÇÃO"] ?? "";
        const date = item["DATA"] ?? "";
        const status = item["STATUS"] ?? "";
        const secondData = item["DATA2"] ?? "";
        const forecast = item["PREVISÃO"] ?? "";
        const responsible = item["RESPONSÁVEL"] ?? "";
        const obesityservation = item["OBSERVAÇÃO"] ?? "";
        return {
            plate: plate.trim().toUpperCase(),
            request: request.trim().toUpperCase(),
            date: date === "" ?  "" : convertDateCelltToBRDateString(date),
            status: status.trim().toUpperCase(),
            secondData: secondData === "" ?  "" : convertDateCelltToBRDateString(secondData),
            forecast: forecast.trim().toUpperCase(),
            responsible: responsible.trim().toUpperCase(),
            obesityservation: obesityservation.trim().toUpperCase(),
        };
    });
};

export const parseXML = async (files: File[], registers: Registers[]): Promise<Registers[]> => {
    const singleFile = Array.isArray(files) && files.length === 1;
    const fileArray = singleFile ? [files[0]] : files;
    const promises = fileArray.map(async (file) => {
        const data = await readFile(file);
        const workbook = xlsx.read(data, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const dataFormatted = parseSheet(sheet);
        registers.push(...dataFormatted);
    });
    await Promise.all(promises);
    return registers;
};
