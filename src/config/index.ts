import dotenv from 'dotenv';
import args from 'args';

dotenv.config();

const options = [
  {
    name: 'port',
    description: 'The port on which the app runs',
  },
  {
    name: 'faceId',
    description: 'Facebook app ID',
  },
  {
    name: 'faceSecret',
    description: 'Facebook app secret',
  },
  {
    name: 'mode',
    description: 'run in fork or cluster mode',
  },
  {
    name: 'run',
    description: 'forever or pm2',
  },
];

args.options(options);

const flags = args.parse(process.argv);

const env = {
  MONGO_ATLAS_URL: process.env.MONGO || 'mongoSRV',
  PORT: process.env.PORT || process.env.NODE_PORT || flags.port,
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || flags.faceId || 'faceId',
  FACEBOOK_APP_SECRET:
    process.env.FACEBOOK_APP_SECRET || flags.faceSecret || 'faceSecret',
};

console.log('ID del proceso =>', process.pid);

export default env;
