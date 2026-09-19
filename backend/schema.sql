CREATE TABLE Users(
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    email TEXT NOT NULL,
    phoneNumber TEXT NOT NULL,
    walletAddress TEXT NOT NULL,
    kycStatus TEXT NOT NULL,

);

CREATE TABLE Merchants(
    businessName TEXT NOT NULL,
    taxNumber TEXT NOT NULL,
    businessRegistration TEXT NOT NULL,
);