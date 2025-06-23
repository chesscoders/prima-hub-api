import { Schema } from 'mongoose';
import Identity from './identity';

/**
 * Project managers are identities who have extended permissions
 */
const name = 'project-manager';
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
