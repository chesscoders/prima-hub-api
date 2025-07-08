const { paginate, validate } = require('express-goodies/mongoose');
const { Schema, model } = require('mongoose');

const name = 'flow';

const schema = new Schema(
  {
    /* e.g. "achizitie-teren" */
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    /* Human-readable – shown in the UI list of flows */
    title: {
      type: String,
      required: true,
      trim: true,
    },

    /* Marks the “main” process map (optional) */
    isPrimary: {
      type: Boolean,
      default: false,
    },

    /* Optional ACL – leave null if the flow is public */
    permission: {
      type: String,
      default: null,
    },
  },
  { timestamps: true, autoCreate: false }
);

/* ─── plugins ────────────────────────────────────────────── */
schema.plugin(paginate);
schema.plugin(validate);

module.exports = model(name, schema);
