import { formatEmail, hashPasswords, paginate, validate } from 'express-goodies/mongoose';
import { model, Schema } from 'mongoose';
import { isEmail } from 'validator';

/**
 * Identities manage login related operations
 */
const name = 'identity';
const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: isEmail,
      },
    },
    role: {
      type: String,
    },
    companyRole: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    permissions: {
      type: [String],
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirmedAt: {
      type: Date,
    },
    lastLoginAt: {
      type: Date,
    },
  },
  { autoCreate: false, timestamps: true }
);

// Set schema plugins
schema.plugin(formatEmail);
schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

export default model(name, schema);
