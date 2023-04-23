
import * as dateFns from 'date-fns'
import * as xlsx from 'xlsx';


export const convertDateObjectToBRDateString = (data: Date): string => {
    return dateFns.format(data, "dd/MM/yyyy")
}

export const  convertDateCelltToBRDateString = (date: any) => {
    const dateParsed = typeof date === "number" ? date : xlsx.SSF.parse_date_code(date);
    const dateFormatted = new Date((dateParsed - (25567 + 1)) * 86400 * 1000);
    return convertDateObjectToBRDateString(dateFormatted)
}