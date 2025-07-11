const { paginate, validate } = require('express-goodies/mongoose');
const { model } = require('mongoose');
const { Schema } = require('mongoose');

const name = 'node';

/* small sub-schema to keep the main schema tidy */
const positionSchema = new Schema(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
);

const schema = new Schema(
  {
    /* Parent flow reference (REQUIRED) */
    flow: {
      type: Schema.Types.ObjectId,
      ref: 'flow',
      required: true,
    },

    /* Legacy diagram id (e.g. "3", "achizitie") – unique **within** a flow */

    legacyId: {
      type: String,
    },
    /* What the user sees in the UI */
    label: {
      type: String,
      trim: true,
    },

    /* Canvas position saved as plain numbers */
    position: positionSchema,

    /* Tailwind / CSS helper that the client can re-apply */
    cssClass: {
      type: String,
      default: '',
    },
    showIndex: {
      type: Boolean,
    },
    /* Where the node should navigate – leave null if not applicable */
    link: {
      type: String,
      default: null,
    },

    /* Optional ACL override for this node only */
    permission: {
      type: String,
      default: null,
    },
  },
  { timestamps: true, autoCreate: false }
);

/* ── plugins ──────────────────────────────────────────────── */
schema.plugin(paginate);
schema.plugin(validate);

module.exports = model(name, schema);
