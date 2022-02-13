
-- CreateTable
CREATE TABLE "compra" (
    "id" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,

    CONSTRAINT "compra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "compra" ADD CONSTRAINT "compra_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compra" ADD CONSTRAINT "compra_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

