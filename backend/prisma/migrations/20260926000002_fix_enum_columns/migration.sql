-- Convert role column from TEXT to UserRole enum
DO $$ BEGIN
  CREATE TYPE "UserRole" AS ENUM ('USER', 'MERCHANT', 'ADMIN');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

ALTER TABLE "User"
  ALTER COLUMN "role" TYPE "UserRole" USING "role"::"UserRole",
  ALTER COLUMN "role" SET DEFAULT 'USER'::"UserRole";
