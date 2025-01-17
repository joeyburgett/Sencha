﻿// data/seed.js
(function (seed) {
    seed.initialRecords = [{
        "id": 1,
        "name": "s-and-p-500-companies",
        "title": "S&P 500 Companies with Financial Information",
        "license": "PDDL-1.0",
        "resources": [
            {
                "name": "constituents",
                "path": "data/constituents.csv",
                "format": "csv",
                "mediatype": "text/csv",
                "schema": {
                    "fields": [
                        {
                            "name": "Symbol",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Name",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Sector",
                            "description": "",
                            "type": "string"
                        }
                    ]
                }
            },
            {
                "name": "constituents-financials",
                "path": "data/constituents-financials.csv",
                "format": "csv",
                "mediatype": "text/csv",
                "schema": {
                    "fields": [
                        {
                            "name": "Symbol",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Name",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Sector",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Price",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Dividend Yield",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Price/Earnings",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Earnings/Share",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Book Value",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "52 week low",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "52 week high",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Market Cap",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "EBITDA",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Price/Sales",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Price/Book",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "SEC Filings",
                            "description": "",
                            "format": "url",
                            "type": "string"
                        }
                    ]
                }
            }
        ]
    }, {
        "id": 2,
        "name": "s-and-p-500-companies",
        "title": "S&P 500 Companies with Financial Information",
        "license": "PDDL-1.0",
        "resources": [
            {
                "name": "constituents",
                "path": "data/constituents.csv",
                "format": "csv",
                "mediatype": "text/csv",
                "schema": {
                    "fields": [
                        {
                            "name": "Symbol",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Name",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Sector",
                            "description": "",
                            "type": "string"
                        }
                    ]
                }
            },
            {
                "name": "constituents-financials",
                "path": "data/constituents-financials.csv",
                "format": "csv",
                "mediatype": "text/csv",
                "schema": {
                    "fields": [
                        {
                            "name": "Symbol",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Name",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Sector",
                            "description": "",
                            "type": "string"
                        },
                        {
                            "name": "Price",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Dividend Yield",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Price/Earnings",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Earnings/Share",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Book Value",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "52 week low",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "52 week high",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Market Cap",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "EBITDA",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Price/Sales",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "Price/Book",
                            "description": "",
                            "type": "number"
                        },
                        {
                            "name": "SEC Filings",
                            "description": "",
                            "format": "url",
                            "type": "string"
                        }
                    ]
                }
            }
        ]
    }];
})(module.exports);