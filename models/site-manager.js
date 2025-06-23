import { Schema } from 'mongoose';
import Identity from './identity';

/**
 * Site managers are identities who have extended permissions
 */
const name = 'site-manager';
const schema = new Schema(
  {
    active: {
      type: Boolean,
      default: true,
    },
  },
  { autoCreate: false }
);

export default Identity.discriminator(name, schema);
