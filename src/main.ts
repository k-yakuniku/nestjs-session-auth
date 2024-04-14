import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PUBLIC_PORT;
  const AccessControlAllowHeaders = [
    'X-CSRF-Token',
    'X-Requested-With',
    'Accept',
    'Accept-Version',
    'Content-Length',
    'Content-MD5',
    'Content-Type',
    'Date',
    'X-Api-Version',
    'Authorization',
  ];
  app.enableCors({
    origin: process.env.PUBLIC_ORIGIN,
    allowedHeaders: AccessControlAllowHeaders,
    exposedHeaders: AccessControlAllowHeaders,
  });

  const databaseName = process.env.MONGODB_NAME;
  const databasePass = process.env.MONGODB_PASS;
  mongoose
    .connect(
      `mongodb+srv://mongodb:${databasePass}@clustertest.kcqb7op.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=ClusterTest`,
    )
    .then(() => console.log('Mongodb Connect'))
    .catch((e) => console.log(e));

  await app.listen(PORT, () => console.log(`ServerStart_${PORT}`));
}
bootstrap();
