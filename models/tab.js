const { validate } = require('express-goodies/middleware');
const { paginate } = require('express-goodies/mongoose');
const { Schema, model } = require('mongoose');

const name = 'tab';

const AssetSchema = new Schema(
  {
    /* original file-name shown to the user */
    label: { type: String },
    type: { type: String },
    name: { type: String },
    /* physical object key / URL in your storage bucket */
    url: { type: String },

    /* helper for the client – “pdf”, “doc”, “xlsx”, … */
    fileType: { type: String },
  },
  { _id: false }
);

/* -------------------------------------------------------------------- */
const schema = new Schema(
  {
    /* owning flow (1-N) */
    flow: {
      type: Schema.Types.ObjectId,
      ref: 'flow',
      required: true,
    },

    /* unique human-readable key inside a flow (“one”, “two”, …) */
    slug: {
      type: String,
      required: true,
    },

    /* order when rendering tabs for the flow */
    order: { type: Number, default: 1 },

    /* short heading shown in the UI’s tab strip */
    title: { type: String, required: true, trim: true },

    /* the full HTML snippet you imported – **plain string** */
    html: { type: String, required: true },

    /* downloadables, if any */
    assets: {
      type: [AssetSchema],
      default: [],
    },

    /* ACL override (optional) */
    permission: { type: String, default: null },
  },
  { timestamps: true, autoCreate: false }
);

/* ── plugins ──────────────────────────────────────────────── */
schema.plugin(paginate);
schema.plugin(validate);

module.exports = model(name, schema);
