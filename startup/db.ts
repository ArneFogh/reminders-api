import mongoose from 'mongoose';
import config from 'config';

export default () => {
  const db: string = config.get('MONGO_URI');
  
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true, // Enable SSL as it's required by Azure
    retryWrites: false, // Disable retryWrites as it's not supported by Azure Cosmos DB
    maxIdleTimeMS: 120000, // You can set this according to your needs
    appName: '@arnesreminderappfrontend@' // Optional, but good for identifying the app in logs
  };

  mongoose
    .connect(db, options)
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.error('Could not connect to MongoDB...', err));
};
