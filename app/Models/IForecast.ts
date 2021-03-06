/* IForecast model: generated by json from API in case of 
forecast searching and converted to typescript*/ 

export interface IForecast {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}

export interface Headline {
    EffectiveDate: Date;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: Date;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

export interface Minimum {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Maximum {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Temperature {
    Minimum: Minimum;
    Maximum: Maximum;
}

export interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

export interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

export interface DailyForecast {
    Date: Date;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}




