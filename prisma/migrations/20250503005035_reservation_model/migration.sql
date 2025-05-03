-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "completeName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "finalPrice" TEXT NOT NULL,
    "identificationUser" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "payMethod" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
