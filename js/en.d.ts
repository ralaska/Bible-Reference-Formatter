export = OsisFormatter;
declare function OsisFormatter(): {
    format: (osisString: any, osisContext: any) => string;
    tokenize: (osisString: any, osisContext: any) => {
        tokens: any[];
    };
    setOptions: (userOptions: any) => void;
    setBooks: (userBooks: any) => void;
};
