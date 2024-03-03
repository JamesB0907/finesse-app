declare module "@apperate/iexjs" {
type ClientOptions = {
    api_token?: string;
    version: "v1";
    };

    type Dataset = "INCOME";

    type TimeSeriesOptions = {
        key: string;
        id: Dataset;
        subkey?: string;
        range?: string;
        limit?: number;
    };

    type FilingType = "10-K";

    type IncomeDataPoint = {
        costOfRevenue: number;
        currency: number;
        ebit: 16118000000;
        filingType: FilingType;
        fiscalDate: string;
        fiscalQuarter: number;
        fiscalYear: number;
        grossProfit: number;
        incomeTax: number;
        interestIncome: number;
        netIncome: number;
        netIncomeBasic: number;
        operatingExpense: number;
        operatingIncome: number;
        otherIncomeExpenseNet: number;
        pretaxIncome: number;
        reportDate: string;
        researchAndDevelopment: number;
        sellingGeneralAndAdmin: number;
        symbol: string;
        totalRevenue: number;
        id: "INCOME";
        date: number;
        updated: number;
    };

    class Client {
        constructor(options: ClientOptions);

        quote(options: { symbol: string });

        timeSeries(
            options: TimeSeriesOptions & { id: "INCOME" }
        ): Promise<IncomeDataPoint[]>;
    }
}