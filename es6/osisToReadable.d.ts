export = OsisToReadable;
declare function OsisToReadable(): {
    toReadable: (osisString: any, osisContext: any) => string;
    setOptions: (userOptions: any) => void;
    setBooks: (userBooks: any) => void;
};
